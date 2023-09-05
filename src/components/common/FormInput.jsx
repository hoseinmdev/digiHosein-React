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
          className="flex-1 dark:text-white/70 lg:cursor-pointer"
          onClick={iconClickHandler}
        />
      ) : (
        <FaEye
          style={{ opacity: `${showIcon.unHide}` }}
          className="flex-1 dark:text-white/70 lg:cursor-pointer"
          onClick={iconClickHandler}
        />
      );
  };
  return (
    <>
      <label
        htmlFor={name}
        className="flex w-full flex-col items-start justify-center gap-2"
      >
        <div className="flex w-full items-center justify-start gap-4 pr-3 dark:text-white/70">
          <span>{label}</span>
          <span className="flex justify-end text-sm text-red-600 dark:text-red-400">
            {error && touched && error}
          </span>
        </div>
        <div className="flex w-full items-center justify-center overflow-hidden  rounded-2xl border border-violet-300 dark:border-none bg-gray-100 p-3 dark:bg-gray-600 lg:p-4">
          <input
            className="h-full w-full rounded text-sm bg-transparent dark:text-white"
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
