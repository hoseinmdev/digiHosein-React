import { FaSearch } from "react-icons/fa";
import styles from "./SearchProducts.module.css";
const SearchProducts = () => {
  return (
    <div className={styles.searchBox}>
      <FaSearch />
      <input placeholder="جستجو برای ... " />
    </div>
  );
};

export default SearchProducts;
