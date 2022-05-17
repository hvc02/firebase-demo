import logo from "./logo.svg";
import "./App.css";
import { auth, registerWithEmailAndPassword } from "./firebase/firebase";

function App() {
  console.log(auth, "auth");
  function handleSubmit() {
    registerWithEmailAndPassword("hari", "harichanda420@gmail.com", "test@123");
  }
  return (
    <div className="App">
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
