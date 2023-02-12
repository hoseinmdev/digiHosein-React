import styles from "./insideSkeleton.module.css";
const InsideSkeleton = ({ width, height, radius }) => {
  return (
    <div
      className={styles.innerSkeletonAnimation}
      style={{ width, height, borderRadius: radius }}
    ></div>
  );
};

export default InsideSkeleton;
