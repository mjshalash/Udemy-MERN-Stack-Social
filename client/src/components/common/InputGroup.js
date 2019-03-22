import React from "react";
import propTypes from "prop-types";
import classnames from "classnames";

const InputGroup = ({
  name,
  placeholder,
  value,
  error,
  icon,
  type,
  onChange
}) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      className=
      {classnames("form-control form-control-lg", {
        "is-invalid": error
      })}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputGroup.propType = {
  name: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string.isRequired,
  icon: propTypes.string,
  error: propTypes.string,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
