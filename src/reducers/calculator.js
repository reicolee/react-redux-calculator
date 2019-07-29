import {
  SET_VALUE,
  SET_DISPLAY_VALUE,
  SET_SUBSEQUENT_DISPLAY_VALUE,
  SET_OPERATOR,
  COMPUTE_RESULT,
  CLEAR_DISPLAY_VALUE,
  STORE_MEMORY,
  RETRIEVE_MEMORY
} from '../actions';

const initialState = {
  value: null,
  displayValue: '0',
  waitingForOperand: false,
  operator: null,
  valueInMemory: ''
};

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      return {
        ...state,
        value: action.value
      };
    case SET_DISPLAY_VALUE:
      return {
        ...state,
        displayValue: action.value
      };

    case SET_SUBSEQUENT_DISPLAY_VALUE:
      return {
        ...state,
        displayValue: action.value,
        waitingForOperand: false
      };

    case SET_OPERATOR:
      return {
        ...state,
        operator: action.operator,
        waitingForOperand: true
      };

    case COMPUTE_RESULT:
      return {
        ...state,
        value: action.value,
        displayValue: String(action.value)
      };

    case STORE_MEMORY:
      return {
        ...state,
        valueInMemory: state.displayValue
      };

    case RETRIEVE_MEMORY:
      return {
        ...state,
        displayValue: state.valueInMemory
      };

    case CLEAR_DISPLAY_VALUE:
      return {
        ...state,
        displayValue: '0',
        value: null,
        waitingForOperand: false,
        operator: null
      };

    default:
      return state;
  }
};

export default calculator;
