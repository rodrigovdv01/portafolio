import "./App.css";
import Lenguajes from "./Lenguajes";
import Body from "./Body";

function App() {
  return (
    <div className="App">
      <Body />
      <Lenguajes />
    </div>
  );
}

document.body.style.overflowY = "hidden";

export default App;
