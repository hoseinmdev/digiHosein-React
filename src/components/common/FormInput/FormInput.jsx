import styles from "./FormInput.module.css";
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
          className={styles.customStyle}
          onClick={iconClickHandler}
        />
      ) : (
        <FaEye
          style={{ opacity: `${showIcon.unHide}` }}
          className={styles.customStyle}
          onClick={iconClickHandler}
        />
      );
  };
  return (
    <>
      <label htmlFor={name} className={styles.inputControl}>
        <div className={styles.ErrorControl}>
          <span>{label}</span>
          <span className={styles.errorText}>{error && touched && error}</span>
        </div>
        <div className={styles.passwordControl}>
          <input
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
