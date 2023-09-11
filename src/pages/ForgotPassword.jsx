import { toast } from "react-toastify";
import * as Yup from "yup";
import signUpImage from "../assets/images/signUpImage.webp";
import FormInput from "../components/common/FormInput";
import { useFormik } from "formik";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import EnterCode from "components/SignUpPage/EnterCode";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [sendCode, setSendCode] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const initialValues = {
    email: "",
    password: "",
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
        "https://digihosein.pythonanywhere.com/Account/ForgetPassword/",
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
      .then((response) => {
        console.log(response);
        setUserEmail(values.email);
        setUserPassword(values.password);
        toast.success(`${response.data.Error}`);
        setSendCode(1);
        //   localStorage.setItem(
        //     "token",
        //     JSON.stringify(response.data.Authorization),
        //   );
        //   helpers.resetForm();
        //   navigate("/login", { replace: true });
      })
      .catch((error) => {
        toast.error(`${error.response.data.Error}`, { theme: "colored" });
      });
    helpers.resetForm();
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const renderForgotPasswordForm = () => {
    return (
      <form
        className="flex w-11/12 flex-col items-start justify-center gap-4 rounded-lg p-4 lg:w-96"
        onSubmit={formik.handleSubmit}
      >
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
          label="رمز عبور جدید را وارد کنید"
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
          type="submit"
          className="mt-8 w-full rounded-xl bg-violet-700 px-4 py-3 text-lg text-white shadow-[1px_10px_14px_rgba(241,231,254,1)] outline-none dark:shadow-none dark:outline dark:outline-violet-400"
        >
          تایید
        </button>
      </form>
    );
  };
  return (
    <div className="fadeShow flex h-screen w-full">
      <div className="relative flex h-full w-full flex-col items-center justify-start gap-4 bg-white pt-10 dark:bg-gray-800 lg:w-1/2 ">
        <p className="text-xl font-bold text-gray-700 dark:text-white/80">
          فراموشی رمز عبور
        </p>
        {!sendCode ? (
          renderForgotPasswordForm()
        ) : (
          <EnterCode userEmail={userEmail} password={userPassword} />
        )}
      </div>
      <img
        src={signUpImage}
        className="hidden h-full w-full rounded-r-3xl lg:block"
        alt=""
      />
    </div>
  );
};

export default ForgotPassword;
