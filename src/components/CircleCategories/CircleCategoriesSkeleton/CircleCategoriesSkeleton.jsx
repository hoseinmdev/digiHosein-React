import createEmptyArray from "utils/createEmptyArray";
import Skeleton from "../../Skeleton/Skeleton";
import styles from "./CircleCategoriesSkeleton.module.css";
const skeletons = createEmptyArray(6).map((_, i) => (
  <div key={i}>
    <Skeleton width={"8.5rem"} height={"8.5rem"} radius={"100%"} />
    <Skeleton width={"6rem"} height={"2rem"} radius={"15px"} />
  </div>
));
const mobileSkeletons = createEmptyArray(3).map((_, i) => (
  <div key={i}>
    <Skeleton width={"6.5rem"} height={"6.5rem"} radius={"100%"} />
    <Skeleton width={"5rem"} height={"1.5rem"} radius={"15px"} />
  </div>
));
const CircleCategoriesSkeleton = () => {
  return (
    <>
      <div className={styles.categoriesSkeletonContainer}>{skeletons}</div>
      <div className={styles.categoriesSkeletonContainerMobile}>
        {mobileSkeletons}
      </div>
    </>
  );
};

export default CircleCategoriesSkeleton;
