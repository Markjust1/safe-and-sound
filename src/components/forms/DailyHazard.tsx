import styles from "../../styles/forms/DailyHazard.module.css"

const DailyHazard: React.FC = () => {
  // Create a Date object with the current timestamp
const currentDate = new Date(Date.now());

// Define options for date formatting
const dateOptions = {
  year: 'numeric',
  month: 'long',
  day: '2-digit'
};

// Define options for time formatting
const timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'America/Edmonton' // Calgary time
};

// Get the formatted date
const formattedDate = currentDate.toLocaleString('en-US');

// Get the formatted time
const formattedTime = currentDate.toLocaleString('en-US');
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Daily Hazard Assessment</h1>

      <div className={styles.container}>
        
          <h1>Site: 1</h1>
          <button>change</button>

        <div>Date and time: {formattedDate}</div>
      </div>

      <div className={styles.container}>
        <div>Verify your location at the top of the page:</div>
        <input className={styles.center} type="checkbox" />
      </div>
      <div className={styles.container}>
        <h2>General Information</h2>
        <div>Enter address you are working at:</div>
        <input type="text" />
        <div>Worker conducting this assessment:</div>
        <input type="text" />
        <div>Weather conditions:</div>
        <input type="text" />
      </div>
    </div>
  );
};

export default DailyHazard;