import React from 'react';
import PropTypes from 'prop-types';

const CheckBoxWithLabel = ({
  label,
  value,
  handleOnChange,
}) => (
  <div className="body__send-copy--container container--checkbox w-checkbox">

    <input
      data-name="Checkbox"
      id="checkbox"
      type="checkbox"
      className="w-checkbox-input"
      checked={value}
      name="ccUser"
      onChange={() => {
        handleOnChange({
          target: {
            name: 'ccUser',
            value: !value,
          },
        });
      }}
    />

    <label
      className="body__send-copy w-form-label"
      htmlFor="checkbox"
    >{label}</label>

  </div>
);
const { string, bool, func } = PropTypes;

CheckBoxWithLabel.propTypes = {
  label: string.isRequired,
  value: bool.isRequired,
  handleOnChange: func.isRequired,
};

export default CheckBoxWithLabel;
