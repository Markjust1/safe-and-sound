import styles from "../styles/Navbar.module.css";
import icon from "../assets/icon-safety-64.png"

const Navbar: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={icon}></img>
      <div className={styles.user}>Artem Novikov</div>
    </div>
  );
};

export default Navbar;