import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Input = ({
  label,
  placeholder,
  name,
  type = "text",
  onChange,
  onBlur,
  value,
  error,
  touched,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showIcon, setShowIcon] = useState({
    hide: 1,
    unHide: 0,
  });

  const iconClickHandler = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
    setShowIcon({ hide: 0, unHide: 0 });
    if (showIcon.hide) {
      setTimeout(() => {
        setShowIcon({ hide: 0, unHide: 1 });
      }, 20);
    }
    if (showIcon.unHide) {
      setTimeout(() => {
        setShowIcon({ hide: 1, unHide: 0 });
      }, 20);
    }
  };
  const renderIcon = () => {
    if (type === "password")
      return showPassword ? (
        <FaEyeSlash
          style={{ opacity: `${showIcon.hide}` }}
          className="flex-1 cursor-pointer"
          onClick={iconClickHandler}
        />
      ) : (
        <FaEye
          style={{ opacity: `${showIcon.unHide}` }}
          className="flex-1 cursor-pointer"
          onClick={iconClickHandler}
        />
      );
  };
  return (
    <>
      <label
        htmlFor={name}
        className="flex w-full flex-col items-start justify-center"
      >
        <div className="flex w-full items-center justify-start gap-4">
          <span>{label}</span>
          <span className="flex justify-end text-sm text-red-600">
            {error && touched && error}
          </span>
        </div>
        <div className="flex w-full items-center justify-center">
          <input
            className="w-full rounded p-2 text-sm shadow-md"
            id={name}
            placeholder={placeholder}
            type={showPassword && type === "password" ? "password" : "text"}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            style={{ width: type === "password" ? "90%" : "100%" }}
          />
          {renderIcon()}
        </div>
      </label>
    </>
  );
};

export default Input;
