import { useRef } from "react";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Timer from "components/common/Timer";
import axiosBase from "axiosConfig";

const EnterCode = ({ userEmail, password }) => {
  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState(0);
  const inputRef = useRef([]);
  const navigate = useNavigate();
  const enterCodeRef = useRef();

  const nextInput = (index, endValue) => {
    inputRef.current[index + 1]?.focus();
    if (index === 5) {
      setInputValues([...inputValues, (inputValues[5] = endValue)]);
      enterCodeRef.current.click();
      setIsLoading(1);
    }
  };
  const prevInput = (index) => {
    inputRef.current[index - 1]?.focus();
  };
  const onChangeHandler = (e, index) => {
    const newInputValues = inputValues.map((i) => {
      if (e.target.value.trim().length === 0) {
        if (index === inputValues.indexOf(i)) {
          prevInput(index);
          return (inputValues[index] = "");
        } else return i;
      } else {
        if (index === inputValues.indexOf(i)) {
          nextInput(index, e.target.value);
          return (inputValues[index] = e.target.value);
        } else return i;
      }
    });
    setInputValues(newInputValues);
  };

  const sendCodeToBackend = async (e) => {
    e.preventDefault();
    const code = inputValues.map((num) => Number(num));
    await axiosBase
      .post("Account/Register/", {
        email: userEmail,
        otp: code.join(""),
      })
      .then((response) => {
        toast.success("ثبت نام موفقیت آمیز بود", { theme: "colored" });
        localStorage.setItem(
          "token",
          JSON.stringify({
            token: response.data.Authorization,
            email: userEmail,
          }),
        );
        axiosBase.defaults.headers["Authorization"] =
          response.data.Authorization;
        navigate("/", { replace: true });
        inputRef.current[0]?.focus();
      })
      .catch((error) => {
        toast.error(`${error.response.data.Error}`, {
          theme: "colored",
        });
        setInputValues(["", "", "", "", "", ""]);
        setIsLoading(0);
        inputRef.current[0]?.focus();
      });
  };

  return (
    <form className="mt-10 flex w-11/12 flex-col items-start justify-center gap-4 rounded-3xl bg-white p-2 dark:bg-transparent lg:absolute lg:left-[-9rem] lg:top-[10rem] lg:mt-0 lg:w-[25rem] lg:p-10 lg:dark:bg-gray-700">
      <div className="fadeShow flex flex-col items-center justify-center gap-6 dark:text-white/80">
        <p className="text-lg">کد 6 رقمی به ایمیل شما ارسال شد</p>
        <p>لطفا کد دریافتی را وارد کنید</p>
        <div
          dir="ltr"
          className=" flex w-full items-center justify-between gap-3"
        >
          {inputValues.map((input, index) => {
            return (
              <input
                value={input}
                ref={(ref) => (inputRef.current[index] = ref)}
                key={index}
                className="w-full rounded-xl border border-violet-200 p-4 text-center text-base text-black focus-within:border-violet-600 focus-within:shadow-[1px_10px_14px_rgba(213,184,255,0.7)] dark:bg-gray-600 dark:text-white dark:shadow-none dark:focus-within:outline dark:focus-within:outline-violet-400 lg:p-3 lg:text-lg"
                maxLength={1}
                onChange={(e) => onChangeHandler(e, index)}
                type="tel"
              />
            );
          })}
        </div>
        <button
          ref={enterCodeRef}
          className={`w-full rounded-xl bg-violet-600 px-4 py-3 text-lg text-white shadow-[1px_10px_14px_rgba(241,231,254,1)] outline-none dark:shadow-none dark:outline dark:outline-violet-400`}
          type="submit"
          onClick={sendCodeToBackend}
        >
          {!isLoading ? (
            <p className="fadeShow">تایید</p>
          ) : (
            <AiOutlineLoading3Quarters className="w-full animate-spin text-center text-xl text-white" />
          )}
        </button>
        <Timer password={password} email={userEmail} />
      </div>
    </form>
  );
};

export default EnterCode;
