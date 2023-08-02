import FormInput from "../components/common/FormInput/FormInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SiteLayout from "layout/SiteLayout/SiteLayout";
import backToUp from "utils/BackToUp";

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
      JSON.stringify({ ...values, islogin: true })
    );
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <SiteLayout>
      <div
        className="mt-4 w-full h-full flex justify-center items-center"
        style={{ opacity: fadeShow }}
      >
        <form
          onSubmit={formik.handleSubmit}
          className="w-11/12 md:w-96 p-4 flex flex-col justify-center items-center rounded-lg shadow-xl gap-4"
        >
          <FormInput
            label="نام"
            placeholder="نام خود را وارد کنید ..."
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.errors.name}
            touched={formik.touched.name}
          />
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
            className="mt-2 w-40 px-4 py-2 text-base bg-violet-700 text-white rounded-lg outline-none"
            type="submit"
          >
            ثبت نام
          </button>
          <Link
            to="/login"
            className="text-sm text-blue-700 w-full flex justify-start"
          >
            {" "}
            از قبل حساب کاربری دارم
          </Link>
        </form>
      </div>
    </SiteLayout>
  );
};

export default SginUpPage;
