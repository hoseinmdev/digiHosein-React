const backToUp = () => {
  return window.scrollTo({
    top: -1000,
    behavior: "smooth",
  });
};
export default backToUp;
