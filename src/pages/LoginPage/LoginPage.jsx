import FormInput from "../../components/common/FormInput/FormInput";
import styles from "./LoginPage.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import digiHosein from "../../Accets/images/logo.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiCommentError } from "react-icons/bi";

const LoginPage = () => {
  const [fadeShow, setFadeShow] = useState(0);
  const userInformation = JSON.parse(localStorage.getItem("userInformation"));
  let navigate = useNavigate();

  useEffect(() => {
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
      toast.error("اطلاعات وارد شده صحیح نیست", {
        icon: <BiCommentError />,
        bodyClassName: styles.toastText,
        progressClassName: styles.toastLine,
      });
    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className={styles.formPage} style={{ opacity: fadeShow }}>
      <Link to="/">
        <img src={digiHosein} alt="دیجی حسین" />
      </Link>
      <form onSubmit={formik.handleSubmit} className={styles.formControl}>
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
        <button disabled={!formik.isValid} type="submit">
          ورود
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
