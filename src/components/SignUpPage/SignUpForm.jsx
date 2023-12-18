import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import FormInput from "../common/FormInput";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import axiosBase from "axiosConfig";
const SignUpForm = ({ setUserEmail, setSendCode, setUserPassword }) => {
  const [isLoading, setIsLoading] = useState(0);
  const navigate = useNavigate();
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
    setIsLoading(1);
    axiosBase
      .post("Account/Send_otp/", {
        email: values.email,
        Password: values.password,
      })
      .then((response) => {
        if (response.data.status === false) {
          toast.warn(`${response.data.Error}`);
          navigate("/login");
        } else {
          setSendCode(1);
          setIsLoading(0);
          toast.success(`${response.data.Error}`);
          setUserEmail(values.email);
          setUserPassword(values.password);
          helpers.resetForm();
        }
      })
      .catch((error) => {
        toast.warn(`${error.response.data.Error}`);
        setIsLoading(0);
        helpers.resetForm();
        navigate("/login");
      });
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="mt-10 flex w-11/12 flex-col items-start justify-center gap-4 rounded-3xl bg-white p-2 dark:bg-transparent lg:absolute lg:left-[-9rem] lg:top-[10rem] lg:mt-0 lg:w-[25rem] lg:p-10 lg:dark:bg-gray-700"
      >
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
          {!isLoading ? (
            "ثبت نام"
          ) : (
            <AiOutlineLoading3Quarters className="w-full animate-spin text-center text-xl text-white" />
          )}
        </button>
        <Link
          to="/login"
          className="flex justify-start text-sm text-blue-700 dark:text-blue-400"
        >
          {" "}
          از قبل حساب کاربری دارم
        </Link>
      </form>
    </>
  );
};

export default SignUpForm;
