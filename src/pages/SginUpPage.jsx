import FormInput from "../components/common/FormInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import backToUp from "utils/BackToUp";
import signUpImage from "../assets/images/signUpImage.webp";
import axios from "axios";
import { useRef } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const SginUpPage = () => {
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));
  const [fadeShow, setFadeShow] = useState(0);
  const location = useLocation();
  let navigate = useNavigate();
  const [inputValues, setInputValues] = useState(["", "", "", "", "", ""]);
  const inputRef = useRef([]);
  const [sendCode, setSendCode] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(0);
  useEffect(() => {
    backToUp();
    setTimeout(() => setFadeShow(1), 300);
  }, []);
  useEffect(() => {
    if (
      userInformation &&
      userInformation.islogin &&
      location.pathname === "/sginUp"
    )
      navigate("/");
  }, [location.pathname]);

  const initialValues = {
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const yup = Yup.string();
  const validationSchema = Yup.object({
    email: yup.email("ایمیل نامعتبر است").required("ایمیل اجباری است"),
    password: yup
      .min(6, "کمتر از 6 کارکتر است")
      .required("رمز عبور اجباری است"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "پسورد همخوانی ندارد")
      .required("تایید رمز عبور اجباری است"),
  });
  const onSubmit = (values, helpers) => {
    axios
      .post(
        "http://127.0.0.1:8000/Account/Send_otp/",
        {
          email: values.email,
          Password: values.password,
        },
        {
          headers: {
            "User-Agent": "Your User Agent String",
            Host: "www.example.com",
            Accept: "application/json",
            "Accept-Encoding": "gzip, deflate, br",
            Connection: "keep-alive",
          },
        },
      )
      .then(function (response) {
        if (response.data.status === false) {
          toast.error(`${response.data.Error}`, {
            theme: "colored",
          });
          navigate("/login");
        } else {
          toast.success(`${response.data.Error}`, {
            theme: "colored",
          });
          setSendCode(1);
          setUserEmail(values.email);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    helpers.resetForm();
    // navigate("/");
    // localStorage.setItem(
    //   "userInformation",
    //   JSON.stringify({ ...values, islogin: true }),
    // );
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const renderEmailAndPasswordsInput = () => {
    return (
      <>
        <p className="mb-5 hidden w-full border-b border-b-violet-200 p-4 text-right text-xl font-bold text-gray-700 dark:text-white/80 lg:block">
          ورود | ثبت نام
        </p>
        <FormInput
          label="آدرس ایمیل"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.errors.email}
          touched={formik.touched.email}
          type="email"
        />
        <FormInput
          label="رمز عبور"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.errors.password}
          touched={formik.touched.password}
          type="password"
        />
        <FormInput
          label="تکرار رمز عبور"
          name="passwordConfirmation"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordConfirmation}
          error={formik.errors.passwordConfirmation}
          touched={formik.touched.passwordConfirmation}
          type="password"
        />
        <button
          disabled={!formik.isValid}
          style={{ opacity: !formik.isValid && 0.6 }}
          className="mt-6 w-full rounded-xl bg-violet-700 px-4 py-3 text-lg text-white shadow-[1px_10px_14px_rgba(241,231,254,1)] outline-none dark:shadow-none dark:outline dark:outline-violet-400"
          type="submit"
        >
          ثبت نام
        </button>
        <Link
          to="/login"
          className="flex justify-start text-sm text-blue-700 dark:text-blue-400"
        >
          {" "}
          از قبل حساب کاربری دارم
        </Link>
      </>
    );
  };

  const renderEnterCodeInputs = () => {
    const nextInput = (index, endValue) => {
      inputRef.current[index + 1]?.focus();
      if (index === 5) {
        setInputValues([...inputValues, (inputValues[5] = endValue)]);
        sendCodeToBackend();
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

    const sendCodeToBackend = async () => {
      const code = inputValues.map((num) => {
        return Number(num);
      });
      await axios
        .post(
          "http://127.0.0.1:8000/Account/Register/",
          {
            email: userEmail,
            otp: code.join(""),
          },
          {
            headers: {
              "User-Agent": "Your User Agent String",
              Host: "www.example.com",
              Accept: "application/json",
              "Accept-Encoding": "gzip, deflate, br",
              Connection: "keep-alive",
            },
          },
        )
        .then(function (response) {
          toast.success("ثبت نام موفقیت آمیز بود", { theme: "colored" });
          localStorage.setItem(
            "token",
            JSON.stringify(response.data.Authorization),
          );
          navigate("/");
          setIsLoading(0);
          inputRef.current[0]?.focus();
          console.log(response);
        })
        .catch(function (error) {
          toast.error(`${error.response.data.Error}`, { theme: "colored" });
          setInputValues(["", "", "", "", "", ""]);
          setIsLoading(0);
          inputRef.current[0]?.focus();
          // console.log(error);
        });
    };

    return (
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
                className="w-full rounded-xl border border-violet-200 p-4 text-center text-base text-black focus-within:border-violet-600 focus-within:shadow-[1px_10px_14px_rgba(213,184,255,0.7)] dark:bg-gray-600 dark:text-white dark:shadow-none dark:focus-within:outline dark:focus-within:outline-violet-400 lg:p-4 lg:text-lg"
                maxLength={1}
                onChange={(e) => onChangeHandler(e, index)}
                type="tel"
              />
            );
          })}
        </div>
        <button
          className="w-full rounded-xl bg-violet-600 px-4 py-3 text-lg text-white shadow-[1px_10px_14px_rgba(241,231,254,1)] outline-none dark:shadow-none dark:outline dark:outline-violet-400"
          type="submit"
          onClick={sendCodeToBackend}
        >
          {!isLoading ? (
            "تایید"
          ) : (
            <AiOutlineLoading3Quarters className="w-full animate-spin text-center text-lg text-white" />
          )}
        </button>
      </div>
    );
  };
  return (
    <div className="flex h-screen w-full" style={{ opacity: fadeShow }}>
      <div className="relative flex h-full w-full flex-col items-center justify-start gap-4 bg-white pt-10 dark:bg-gray-800 lg:w-1/2 lg:bg-gray-100">
        <p className="text-xl font-bold text-gray-700 dark:text-white/80 lg:hidden">
          به دیجی حسین خوش اومدی !
        </p>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-10 flex w-11/12 flex-col items-start justify-center gap-4 rounded-3xl bg-white p-2 dark:bg-transparent lg:absolute lg:left-[-9rem] lg:top-[10rem] lg:mt-0 lg:w-[25rem] lg:p-10 lg:dark:bg-gray-700"
        >
          {sendCode ? renderEnterCodeInputs() : renderEmailAndPasswordsInput()}
        </form>
      </div>
      <img
        src={signUpImage}
        className="hidden h-full w-full rounded-r-3xl lg:block"
        alt=""
      />
    </div>
  );
};

export default SginUpPage;
