const ShapeOnBackground = ({ size, color, margin }) => {
  const styles = {
    width: size,
    height: size,
    backgroundColor: color,
    borderRadius: "100%",
    margin,
  };
  return <span style={styles}></span>;
};

export default ShapeOnBackground;
