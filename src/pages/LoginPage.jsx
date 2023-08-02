import FormInput from "../components/common/FormInput/FormInput";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiCommentError } from "react-icons/bi";
import SiteLayout from "layout/SiteLayout/SiteLayout";
import backToUp from "utils/BackToUp";

const LoginPage = () => {
  const [fadeShow, setFadeShow] = useState(0);
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));
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
    helpers.resetForm();
    if (
      values.email === userInformation.email &&
      values.password === userInformation.password
    ) {
      localStorage.setItem(
        "userInformation",
        JSON.stringify({ ...userInformation, islogin: true })
      );
      navigate("/");
      toast.success("خوش آمدید !");
    } else {
      toast.error("اطلاعات وارد شده صحیح نیست", {icon: <BiCommentError />});
    }
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
        className="w-full flex justify-center items-center gap-4"
        style={{ opacity: fadeShow }}
      >
        <form
          className="w-11/12 shadow-xl px-6 py-4 flex flex-col justify-center items-center gap-4 w-full md:w-96 h-64"
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
            className="mt-2 p-2 text-base bg-violet-700 text-white rounded-lg outline-none w-1/2"
          >
            ورود
          </button>
        </form>
      </div>
    </SiteLayout>
  );
};

export default LoginPage;
