import createEmptyArray from "utils/createEmptyArray";
import Skeleton from "../../Skeleton/Skeleton";
import styles from "./CircleCategoriesSkeleton.module.css";
const skeletons = createEmptyArray(6).map((_, i) => (
  <div key={i}>
    <Skeleton width={"8.5rem"} height={"8.5rem"} radius={"100%"} />
    <Skeleton width={"6rem"} height={"2rem"} radius={"15px"} />
  </div>
));
const CircleCategoriesSkeleton = () => {
  return <div className={styles.categoriesSkeletonContainer}>{skeletons}</div>;
};

export default CircleCategoriesSkeleton;
