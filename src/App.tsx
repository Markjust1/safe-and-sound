import main from "./app.module.css";
import FormList from "./components/FormList";
import FormContent from "./components/FormContent";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className={main.app}>
      <Navbar />

      <div className={main.content}>
        <FormList />
        <FormContent />
      </div>

    </div>
  );
}

export default App;
