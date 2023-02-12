import styles from "./sceleton.module.css";
const Skeleton = ({ className, children }) => {
  return (
    <div className={`${className} , ${styles.skeletonAnimation}`}>
      {children}
    </div>
  );
};

export default Skeleton;
