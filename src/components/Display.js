import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';

function Display({ displayValue }) {
  return (
    <Grid container item xs={9} justify="flex-end">
      {displayValue}
    </Grid>
  );
}

Display.propTypes = {
  displayValue: PropTypes.string.isRequired
};

export default Display;
