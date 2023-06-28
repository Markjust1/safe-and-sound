import "./app.css";
import FormList from "./components/FormList";
import FormContent from "./components/FormContent";

const App = () => {
  return (
    <div className="app">
      <FormList/>
      <FormContent/>
    </div>
  );
}

export default App;
