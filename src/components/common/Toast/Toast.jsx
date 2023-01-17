import { ToastContainer } from "react-toastify";

const Toast = () => {
    return (
      <ToastContainer
        position="top-center"
        autoClose={1700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ width: "16rem" }}
      />
    );
}
 
export default Toast;