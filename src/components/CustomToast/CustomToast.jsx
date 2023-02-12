import { MdAddTask } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import styles from "./customToast.module.css"
const CustomToast = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        bodyClassName={styles.toastText}
        progressClassName={styles.toastLine}
        toastClassName={styles.toast}
        icon={<MdAddTask style={{fontSize:"2.5rem"}}/>}
      />
    </>
  );
};
 
export default CustomToast;