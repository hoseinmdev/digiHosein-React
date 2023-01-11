import styles from "./product.module.css";

const Product = ({ title, price, imageURL, id }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const clickHandler = () => {
    console.log(id);
  };
  return (
    <div>
      <div className={styles.productBlock}>
        <img
          className={styles.imageStyle}
          src={imageURL}
          alt="product-1"
          onClick={() => {
            openInNewTab(imageURL);
          }}
        />
        <h4>{title}</h4>
        <button className={styles.productBtn} onClick={clickHandler}>
          افزودن به سبد خرید
        </button>
        {/* <div>
            <span>حذف</span>
          </div> */}
        <h4>{price.toLocaleString("en")} تومان</h4>
      </div>
    </div>
  );
};

export default Product;
