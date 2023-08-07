const Skeleton = ({ width, height, radius }) => {
  return (
    <div
      className="animate-pulse bg-gray-200"
      style={{ width, height, borderRadius: radius }}
    ></div>
  );
};

export default Skeleton;
