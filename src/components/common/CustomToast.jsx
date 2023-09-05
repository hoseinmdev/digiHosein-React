import { MdAddTask } from "react-icons/md";
import { ToastContainer } from "react-toastify";
const CustomToast = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
      // theme="dark"
      icon={<MdAddTask style={{ fontSize: "2.5rem" }} />}
    />
  );
};

export default CustomToast;
