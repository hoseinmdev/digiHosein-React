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
        <div className="flex w-full items-center justify-center overflow-hidden rounded-2xl border  border-transparent bg-neutral-200/60 p-3 focus-within:border-violet-300 focus-within:bg-white focus-within:shadow-[1px_10px_14px_rgba(241,231,254,1)] hover:border-violet-200 dark:border-none dark:bg-gray-600 dark:shadow-none dark:focus-within:outline dark:focus-within:outline-violet-400 lg:border-2 lg:bg-neutral-100 lg:p-4">
          <input
            autoComplete="off"
            className="h-full w-full rounded bg-transparent text-sm dark:text-white lg:text-base"
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
