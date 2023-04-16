import { BsCpu } from "react-icons/bs";
import { FaDigitalTachograph } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { GiBatteryPackAlt, GiWeight } from "react-icons/gi";
import { MdScreenshot, MdStorage } from "react-icons/md";
import { CgSmartphoneRam } from "react-icons/cg";
import styles from "./productIntroduction.module.css";
const ProductIntroduction = ({ product }) => {
    const productProperties = []
  Object.values(product.Specifications).forEach(function(value, index) {
    productProperties.push({title: value.title, icon: value.icon})
  });
  console.log(productProperties)
  const renderProductProperties = () => {
    if (product.category === "phones") {
      return (
        <div className={styles.infoList}>

          {productProperties.map(p => {
            return <div key={p.title}>
                          {p.icon}
            <p>{p.title}</p>
            </div>
          })}

          {/* <div>
            <BsCpu className={styles.iconBlock} />
            <p>{product.Specifications.cpu.model}</p>
          </div>
          <div>
            <FaDigitalTachograph className={styles.iconBlock} />
            <p>{product.Specifications.storage.capacity}</p>
          </div>
          <div>
            <MdScreenshot className={styles.iconBlock} />
            <p>{product.Specifications.screen.size}</p>
          </div>
          <div>
            <FiCamera className={styles.iconBlock} />
            <p>{product.Specifications.camera.quality}</p>
          </div>
          <div>
            <GiBatteryPackAlt className={styles.iconBlock} />
            <p>{product.Specifications.battery.capacity}</p>
          </div>
          <div>
            <CgSmartphoneRam className={styles.iconBlock} />
            <p>{product.Specifications.ram.capacity}</p>
          </div> */}
        </div>
      );
    }
    if (product.category === "laptops") {
      return (
        <div className={styles.infoList}>
          <div>
            <BsCpu className={styles.iconBlock} />
            <p>{product.Specifications.cpu.model}</p>
          </div>
          <div>
            <FaDigitalTachograph className={styles.iconBlock} />
            <p>{product.Specifications.gpu.model}</p>
          </div>
          <div>
            <MdStorage className={styles.iconBlock} />
            <p>{product.Specifications.storage.capacity}</p>
          </div>
          <div>
            <GiWeight className={styles.iconBlock} />
            <p>{product.Specifications.Weight.capacity}</p>
          </div>
          <div>
            <CgSmartphoneRam className={styles.iconBlock} />
            <p>{product.Specifications.ram.capacity}</p>
          </div>
        </div>
      );
    }
    if (product.type === "consoles") {
      return (
        <div className={styles.infoList}>
          <div>
            <BsCpu className={styles.iconBlock} />
            <p>{product.Specifications.cpu}</p>
          </div>
          <div>
            <CgSmartphoneRam className={styles.iconBlock} />
            <p>{product.Specifications.ram}</p>
          </div>
          <div>
            <FiCamera className={styles.iconBlock} />
            <p>{product.Specifications.camera}</p>
          </div>
          <div>
            <MdStorage className={styles.iconBlock} />
            <p>{product.Specifications.storage}</p>
          </div>
          <div>
            <GiWeight className={styles.iconBlock} />
            <p>{product.Specifications.Weight}</p>
          </div>
        </div>
      );
    }
  };
  return (
    <>
      <div className={styles.imageAndInfoBlock}>
        <div className={styles.infoBlock}>
          <h3>ویژگی های اصلی</h3>
          {renderProductProperties()}
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
          {renderProductProperties()}
        </div>
      </div>
    </>
  );
};

export default ProductIntroduction;
