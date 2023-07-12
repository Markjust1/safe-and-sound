import styles from "../styles/SideElement.module.css";
import arrow from "../assets/back-arrow.png";
import { useState } from "react";

const forms = [
  "Daily Hazard Assessment",
  'Trade Infraction',
  'Weekly Safety Toolbox Talk',
  'Trade Monitoring',
  'Weekly Hazard Assessment',
  'Monthly Jobsite Spotcheck',
  'Safety Orientation'
];

const options = ['New Form', 'In Progress','Completed forms'];

const SideElement: React.FC = () => {
  const [view, setView] = useState(false);
  return (
    <>
    {view && forms.map(elem=><div className={styles.side}>{elem}</div>)}
    {view && <div className={styles.arrow} onClick={()=>setView(false)}><img src={arrow}></img></div>}
    {!view && options.map(elem=><div className={styles.side} onClick={()=>{setView(true)}}>{elem}</div>)}
    </>
  );
};

export default SideElement;
