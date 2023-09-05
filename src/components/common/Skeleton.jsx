const Skeleton = ({ width, height, radius }) => {
  return (
    <div
      className="animate-pulse bg-gray-200 dark:bg-gray-500"
      style={{ width, height, borderRadius: radius }}
    ></div>
  );
};

export default Skeleton;
