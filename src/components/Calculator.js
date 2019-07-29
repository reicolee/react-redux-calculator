import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setValue,
  setDisplayValue,
  setSubsequentDisplayValue,
  setOperator,
  computeResult,
  clearDisplayValue,
  setValueInMemory,
  restoreValueInMemory
} from '../actions';
import { computeOperations } from '../utils';

import Display from './Display';
import StyledButton from './StyledButton';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';

function Calculator() {
  const dispatch = useDispatch();
  const props = useSelector(state => state.calculator);
  const { value, displayValue, operator, waitingForOperand } = props;

  const handleDigit = digit => {
    if (waitingForOperand) {
      dispatch(setSubsequentDisplayValue(String(digit)));
    } else {
      const value = displayValue === '0' ? String(digit) : displayValue + digit;
      dispatch(setDisplayValue(value));
    }
  };

  const handleDot = dot => {
    if (waitingForOperand) {
      dispatch(setSubsequentDisplayValue(dot));
    } else if (displayValue.indexOf('.') === -1) {
      dispatch(setDisplayValue(displayValue + '.'));
    }
  };

  const storeMemory = () => {
    dispatch(setValueInMemory());
  };

  const retrieveMemory = () => {
    dispatch(restoreValueInMemory());
  };

  const toggleSign = () => {
    const value =
      displayValue.charAt(0) === '-'
        ? displayValue.substr(1)
        : '-' + displayValue;
    dispatch(setDisplayValue(value));
  };

  const performOperation = nextOperator => {
    const nextValue = parseFloat(displayValue);

    if (value == null) {
      dispatch(setValue(nextValue));
    } else if (operator) {
      const currentValue = value || 0;
      const computedValue = computeOperations[operator](
        currentValue,
        nextValue
      );
      dispatch(computeResult(computedValue));
    }

    dispatch(setOperator(nextOperator));
  };

  const clearDisplay = () => {
    dispatch(clearDisplayValue());
  };

  return (
    <Container maxWidth="xs">
      <Grid container item alignItems="center">
        <Grid container justify="flex-start">
          <Display displayValue={displayValue} />
        </Grid>
        <Grid container justify="center">
          <StyledButton handleClick={clearDisplay}>AC</StyledButton>
          <StyledButton handleClick={storeMemory}>MS</StyledButton>
          <StyledButton handleClick={retrieveMemory}>MR</StyledButton>
          <StyledButton handleClick={performOperation} type="operator">
            /
          </StyledButton>
        </Grid>

        <Grid container justify="center">
          <StyledButton handleClick={handleDigit} type="digit">
            7
          </StyledButton>
          <StyledButton handleClick={handleDigit} type="digit">
            8
          </StyledButton>
          <StyledButton handleClick={handleDigit} type="digit">
            9
          </StyledButton>
          <StyledButton handleClick={performOperation} type="operator">
            x
          </StyledButton>
        </Grid>

        <Grid container justify="center">
          <StyledButton handleClick={handleDigit} type="digit">
            4
          </StyledButton>
          <StyledButton handleClick={handleDigit} type="digit">
            5
          </StyledButton>
          <StyledButton handleClick={handleDigit} type="digit">
            6
          </StyledButton>
          <StyledButton handleClick={performOperation} type="operator">
            -
          </StyledButton>
        </Grid>

        <Grid container justify="center">
          <StyledButton handleClick={handleDigit} type="digit">
            1
          </StyledButton>
          <StyledButton handleClick={handleDigit} type="digit">
            2
          </StyledButton>
          <StyledButton handleClick={handleDigit} type="digit">
            3
          </StyledButton>
          <StyledButton handleClick={performOperation} type="operator">
            +
          </StyledButton>
        </Grid>

        <Grid container justify="center">
          <StyledButton handleClick={handleDigit} type="digit">
            0
          </StyledButton>
          <StyledButton handleClick={handleDot} type="digit">
            .
          </StyledButton>
          <StyledButton handleClick={toggleSign} type="operator">
            ±
          </StyledButton>
          <StyledButton handleClick={performOperation} type="operator">
            =
          </StyledButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Calculator;
