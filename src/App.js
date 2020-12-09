// import logo from './logo.svg';
import "./App.css";
import { initNotification } from "./service/firebaseService";

function App() {
  return (
    <div className="App">
      <h1> Hello world </h1>{" "}
      <button onClick={initNotification}>Configure Notification</button>
    </div>
  );
}

export default App;
