import styles from "../styles/SideElement.module.css";

const forms = [
  "Daily Hazard Assessment",
  'Trade Infraction',
  'Weekly Safety Toolbox Talk',
  'Trade Monitoring',
  'Weekly Hazard Assessment',
  'Monthly Jobsite Spotcheck'
];

const SideElement: React.FC = () => {
  return (
    <>
    {forms.map(elem=><div className={styles.side}>{elem}</div>)}
    </>
  );
};

export default SideElement;
