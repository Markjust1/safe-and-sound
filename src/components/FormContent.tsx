import styles from "../styles/FormContent.module.css"
import DailyHazard from "./forms/DailyHazard";

const FormContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <DailyHazard/>
    </div>
  );
};

export default FormContent;