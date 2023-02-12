import InsideSkeleton from "../Skeleton/InsideSkeleton";
import Skeleton from "../Skeleton/Skeleton";
import styles from "./sliderSkeleton.module.css";
const SliderSkeleton = () => {
  return (
    <Skeleton className={styles.sliderSkeleton}>
      <InsideSkeleton width={"3rem"} height={"35%"} radius={"100px"} />
      <InsideSkeleton width={"90%"} height={"90%"} radius={"30px"} />
      <InsideSkeleton width={"3rem"} height={"35%"} radius={"100px"} />
    </Skeleton>
  );
};

export default SliderSkeleton;
