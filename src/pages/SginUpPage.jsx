import FormInput from "../components/common/FormInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SiteLayout from "layout/SiteLayout";
import backToUp from "utils/BackToUp";
import signUpImage from "../assets/images/signUpImage.webp";
const SginUpPage = () => {
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));
  const [fadeShow, setFadeShow] = useState(0);
  const location = useLocation();
  let navigate = useNavigate();
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
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConfirmation: "",
  };
  const yup = Yup.string();
  const phoneRegExp =
    /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi;
  const validationSchema = Yup.object({
    name: yup.required("نام اجباری است"),
    email: yup.email("ایمیل نامعتبر است").required("ایمیل اجباری است"),
    phoneNumber: yup
      .min(1, "کمتر از 11 رقم !")
      .max(11, "بیشتر از 11 رقم !")
      .matches(phoneRegExp, "شماره را با 09 تکمیل کنید")
      .required("شماره موبایل اجباری است"),
    password: yup
      .min(6, "کمتر از 6 کارکتر است")
      .required("رمز عبور اجباری است"),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], "پسورد همخوانی ندارد")
      .required("تایید رمز عبور اجباری است"),
  });
  const onSubmit = (values, helpers) => {
    helpers.resetForm();
    toast.success("خوش آمدید !");
    navigate("/");
    localStorage.setItem(
      "userInformation",
      JSON.stringify({ ...values, islogin: true }),
    );
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
          onSubmit={formik.handleSubmit}
          className="flex w-11/12 flex-col items-center justify-center gap-4 rounded-lg p-4 lg:w-96"
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
            label="شماره موبایل"
            placeholder="شماره موبایل خود را وارد کنید ..."
            name="phoneNumber"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phoneNumber}
            error={formik.errors.phoneNumber}
            touched={formik.touched.phoneNumber}
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
          <FormInput
            label="تکرار رمز عبور"
            placeholder="رمز عبور خود را تکرار کنید ..."
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
            style={{ opacity: !formik.isValid && 0.5 }}
            className="mt-2 w-40 rounded-lg bg-violet-700 px-4 py-2 text-base text-white outline-none"
            type="submit"
          >
            ثبت نام
          </button>
          <Link
            to="/login"
            className="flex w-full justify-start text-sm text-blue-700 dark:text-blue-400"
          >
            {" "}
            از قبل حساب کاربری دارم
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

export default SginUpPage;
