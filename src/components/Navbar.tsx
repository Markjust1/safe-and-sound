import styles from "../styles/Navbar.module.css";
import icon from "../assets/icon-safety-64.png"

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={icon}></img>
      <div className={styles.column}>
      <div className={styles.user}>Artem Novikov</div>
      <div className={styles.row}>
        {/* <div className={styles.user}>Jobsite:</div> */}
        <select className={styles.select}>
          <option>Site 1</option>
          <option>Site 2</option>
          <option>Site 3</option>
          <option>Site 4</option>
        </select>
      </div>
      </div>
    </div>
  );
};

export default Navbar;