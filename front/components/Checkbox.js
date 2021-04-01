import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { StCheckbox } from '../style/Form';

const Checkbox = ({
  check,
  setCheck,
  text = '',
  disabled = false,
}) => {
  const onCheckAgree = useCallback((e) => {
    e.preventDefault();
    setCheck(!check);
  }, [check, setCheck]);

  return (
    <StCheckbox onClick={onCheckAgree}>
      <input type="checkbox" defaultChecked={check} required />
      <span className={check ? 'checked' : disabled ? ' disabled' : ''}>{check && <i />}</span>
      {text}
    </StCheckbox>
  );
};

Checkbox.propTypes = {
  check: PropTypes.bool.isRequired,
  setCheck: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default Checkbox;
