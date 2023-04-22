import styles from "./productIntroduction.module.css";
const ProductIntroduction = ({ product }) => {
  const productProperties = [];
  Object.values(product.Specifications).forEach(function (value, index) {
    productProperties.push({ title: value.title, icon: value.icon });
  });
  return (
    <>
      <div className={styles.imageAndInfoBlock}>
        <div className={styles.infoBlock}>
          <h3>ویژگی های اصلی</h3>
          <div className={styles.infoList}>
            {productProperties.map((p) => {
              return (
                <div key={p.title}>
                  {p.icon}
                  <p>{p.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <img
          className={styles.imageStyle}
          src={product.imageURL}
          alt={product.title}
        ></img>
      </div>
      <div className={styles.imageAndInfoBlockMobile}>
        <img
          className={styles.imageStyle}
          src={product.imageURL}
          alt={product.title}
        ></img>
        <div className={styles.infoBlock}>
          <h3>ویژگی های اصلی</h3>
          <div className={styles.infoList}>
            {productProperties.map((p) => {
              return (
                <div key={p.title}>
                  {p.icon}
                  <p>{p.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductIntroduction;
