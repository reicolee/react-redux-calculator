import React from 'react';
import Button from '@material-ui/core/Button';

function StyledButton({ children, handleClick, type }) {
  const color =
    type === 'operator'
      ? 'secondary'
      : type === 'digit'
      ? 'primary'
      : 'default';

  return (
    <>
      <Button
        variant="outlined"
        color={color}
        size="medium"
        onClick={() => handleClick(children)}
        styled={{ borderRadious: 'none' }}
      >
        {children}
      </Button>
    </>
  );
}

export default StyledButton;
