import FormInput from "../components/common/FormInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiCommentError } from "react-icons/bi";
import backToUp from "utils/BackToUp";
import signUpImage from "../assets/images/signUpImage.webp";
import axios from "axios";

const LoginPage = () => {
  const [fadeShow, setFadeShow] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    backToUp();
    setTimeout(() => setFadeShow(1), 300);
  }, []);
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
  });
  const onSubmit = (values, helpers) => {
    axios
      .post(
        "http://127.0.0.1:8000/Account/Login/",
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
        toast.success("خوش آمدید", { theme: "colored" });
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.Authorization),
        );
        navigate("/")
      })
      .catch(function (error) {
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

  return (
    <div className="flex h-screen w-full" style={{ opacity: fadeShow }}>
      <div className="flex h-full w-full flex-col items-center justify-start gap-4 bg-white pt-10 dark:bg-gray-800 lg:w-1/2">
        <p className="text-xl font-bold text-gray-700 dark:text-white/80">
          به دیجی حسین خوش اومدی !
        </p>
        <form
          className="flex w-11/12 flex-col items-start justify-center gap-4 rounded-lg p-4 lg:w-96"
          onSubmit={formik.handleSubmit}
        >
          <FormInput
            label="آدرس ایمیل"
            placeholder="ایمیل خود را وارد کنید ..."
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
            placeholder="رمز عبور خود را وارد کنید ..."
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={formik.errors.password}
            touched={formik.touched.password}
            type="password"
          />
          <button
            disabled={!formik.isValid}
            type="submit"
            className="mt-8 w-full rounded-xl bg-violet-700 px-4 py-3 text-lg text-white shadow-[1px_10px_14px_rgba(241,231,254,1)] outline-none dark:shadow-none dark:outline dark:outline-violet-400"
          >
            ورود
          </button>
          <Link
            to="/login"
            className="mt-2 flex justify-start text-sm text-blue-700 dark:text-blue-400"
          >
            {" "}
            رمز عبور را فراموش کردم !
          </Link>
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

export default LoginPage;
