export const SET_VALUE = 'SET_VALUE';
export const SET_DISPLAY_VALUE = 'SET_DISPLAY_VALUE';
export const SET_SUBSEQUENT_DISPLAY_VALUE = 'SET_SUBSEQUENT_DISPLAY_VALUE';
export const CLEAR_DISPLAY_VALUE = 'CLEAR_DISPLAY_VALUE';
export const SET_OPERATOR = 'SET_OPERATOR';
export const COMPUTE_RESULT = 'COMPUTE_RESULT';
export const STORE_MEMORY = 'STORE_MEMORY';
export const RETRIEVE_MEMORY = 'RETRIEVE_MEMORY';

export const setValue = value => ({
  type: SET_VALUE,
  value
});

export const setDisplayValue = value => ({
  type: SET_DISPLAY_VALUE,
  value
});

export const setSubsequentDisplayValue = value => ({
  type: SET_SUBSEQUENT_DISPLAY_VALUE,
  value
});

export const setOperator = operator => ({
  type: SET_OPERATOR,
  operator
});

export const computeResult = value => ({
  type: COMPUTE_RESULT,
  value
});

export const setValueInMemory = () => ({
  type: STORE_MEMORY
});

export const restoreValueInMemory = () => ({
  type: RETRIEVE_MEMORY
});

export const clearDisplayValue = () => ({
  type: CLEAR_DISPLAY_VALUE
});
