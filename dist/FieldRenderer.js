function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import Field from "./Field";
export const ReactSharedField = props => {
  const {
    fields,
    data,
    error,
    handleOnChange,
    defaultOptions = {},
    typeAheadDatas = {},
    condition = {}
  } = props;
  return fields.map(field => {
    return !Object.keys(condition).includes(field.key) || condition[field.key] ? /*#__PURE__*/React.createElement("div", {
      key: field.key,
      className: field.class ? field.class : "col-md-6"
    }, /*#__PURE__*/React.createElement(Field, _extends({}, field, {
      id: field.randomId ? `${field.id}-${Math.random()}` : field.id,
      inputClass: field.formClass,
      value: data[field.key] ? data[field.key] : field.defaultValue,
      onChange: handleOnChange,
      fieldKey: field.key,
      error: error && error[field.key],
      typeAheadData: typeAheadDatas[field.key] ? typeAheadDatas[field.key] : () => {},
      options: defaultOptions[field.key] ? defaultOptions[field.key] : field.options
    }))) : "";
  });
};