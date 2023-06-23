import React from 'react';
import PropTypes from 'prop-types';
import Validation from 'react-validation';

const TextAreaWithLabel = ({
  label,
  value,
  placeholder,
  handleOnChange,
}) => (
  <div className="message__container">

    <label
      className="message__label"
      htmlFor="message-field"
    >
      {label}
      <span className="required">&nbsp;*</span>
    </label>

    <Validation.components.Textarea
      errorClassName="is-invalid-input"
      type="text"
      className="message__input w-input"
      value={value}
      name="message"
      onChange={handleOnChange}
      validations={['required', 'contactUsTextArea']}
      placeholder={placeholder}
      maxLength="5000"
    />

  </div>
);

const { string, func } = PropTypes;
TextAreaWithLabel.propTypes = {
  label: string.isRequired,
  value: string.isRequired,
  placeholder: string.isRequired,
  handleOnChange: func.isRequired,
};

export default TextAreaWithLabel;
