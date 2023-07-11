import styles from "../../styles/forms/DailyHazard.module.css"

const DailyHazard: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Daily Hazard Assessment</h1>
      <>
        <div>Site: 1</div> <button>change</button>
        <div>Date:</div>
        <div>Time:</div>
      </>
      <>
        <div>Verify your location at the top of the page:</div>
        <div>YES</div>
      </>
    </div>
  );
};

export default DailyHazard;