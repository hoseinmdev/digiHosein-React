import styles from "./Skeleton.module.css";
const Skeleton = ({ width, height, radius }) => {
  return (
    <div
      className={styles.skeletonAnimation}
      style={{ width, height, borderRadius: radius }}
    ></div>
  );
};

export default Skeleton;
