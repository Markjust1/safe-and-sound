import styles from "../styles/SideElement.module.css";
import { useState } from "react";

const forms = [
  "Daily Hazard Assessment",
  'Trade Infraction',
  'Weekly Safety Toolbox Talk',
  'Trade Monitoring',
  'Weekly Hazard Assessment',
  'Monthly Jobsite Spotcheck'
];

const options = ['New Form', 'In Progress','Submitted forms'];

const SideElement: React.FC = () => {
  const [view, setView] = useState(false);
  return (
    <>
    {view && forms.map(elem=><div className={styles.side}>{elem}</div>)}
    {view && <div className={styles.side} onClick={()=>setView(false)}>BACK</div>}
    {!view && options.map(elem=><div className={styles.side} onClick={()=>{setView(true)}}>{elem}</div>)}
    </>
  );
};

export default SideElement;
