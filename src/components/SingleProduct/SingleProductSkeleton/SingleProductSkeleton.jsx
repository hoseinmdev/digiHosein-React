import Skeleton from "../../Skeleton/Skeleton";
import styles from "./singleProductSkeleton.module.css";
const SingleProductSkeleton = () => {
  return (
    <>
      <div className={styles.skeletonBlock}>
        <div className={styles.introductionSkeleton}>
          <div className={styles.specificationsSkeleton}>
            <Skeleton width={"40%"} height={"10%"} radius={"30px"} />
            <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
            <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
            <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
            <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
            <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
            <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
          </div>
          <div className={styles.productImageSkeleton}>
            <Skeleton width={"100%"} height={"100%"} radius={"8px"} />
          </div>
        </div>
        <Skeleton width={"2px"} height={"18rem"} />
        <div className={styles.checkoutSkeleton}>
          <Skeleton width={"80%"} height={"14%"} radius={"30px"} />
          <Skeleton width={"100%"} height={"7%"} radius={"30px"} />
          <Skeleton width={"50%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"55%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"50%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"60%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"100%"} height={"15%"} radius={"30px"} />
        </div>
      </div>

      <div className={styles.introductionSkeletonMobile}>
        <div className={styles.specificationsSkeleton}>
          <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
          <Skeleton width={"100%"} height={"10%"} radius={"30px"} />
        </div>
        <div className={styles.productImageSkeleton}>
          <Skeleton width={"100%"} height={"100%"} radius={"8px"} />
        </div>
      </div>
    </>
  );
};

export default SingleProductSkeleton;
