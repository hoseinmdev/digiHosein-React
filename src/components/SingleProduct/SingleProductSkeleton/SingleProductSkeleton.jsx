import InsideSkeleton from "../../Skeleton/InsideSkeleton";
import Skeleton from "../../Skeleton/Skeleton";
import styles from "./singleProductSkeleton.module.css";
const SingleProductSkeleton = () => {
  return (
    <div className={styles.skeletonBlock}>
      <div className={styles.introductionSkeleton}>
        <div className={styles.specificationsSkeleton}>
          <InsideSkeleton width={"40%"} height={"10%"} radius={"30px"} />
          <InsideSkeleton width={"100%"} height={"10%"} radius={"30px"} />
          <InsideSkeleton width={"100%"} height={"10%"} radius={"30px"} />
          <InsideSkeleton width={"100%"} height={"10%"} radius={"30px"} />
          <InsideSkeleton width={"100%"} height={"10%"} radius={"30px"} />
          <InsideSkeleton width={"100%"} height={"10%"} radius={"30px"} />
          <InsideSkeleton width={"100%"} height={"10%"} radius={"30px"} />
        </div>
        <Skeleton className={styles.productImageSkeleton}>
          <InsideSkeleton width={"100%"} height={"100%"} radius={"8px"} />
        </Skeleton>
      </div>
      <InsideSkeleton width={"2px"} height={"18rem"}/>
      <div className={styles.checkoutSkeleton}>
        <InsideSkeleton width={"80%"} height={"14%"} radius={"30px"} />
        <InsideSkeleton width={"100%"} height={"7%"} radius={"30px"} />
        <InsideSkeleton width={"50%"} height={"10%"} radius={"30px"} />
        <InsideSkeleton width={"55%"} height={"10%"} radius={"30px"} />
        <InsideSkeleton width={"50%"} height={"10%"} radius={"30px"} />
        <InsideSkeleton width={"60%"} height={"10%"} radius={"30px"} />
        <InsideSkeleton width={"100%"} height={"15%"} radius={"30px"} />
      </div>
    </div>
  );
};

export default SingleProductSkeleton;
