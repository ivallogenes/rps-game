import { Routes, Route } from "react-router-dom";
import './App.scss';
import Header from "./components/Header";
import Homepage from "./pages/Home";
import RockPaperScissorGame from './components/game/RockPaperScissorGame';

function App() {
  const hiddenWisdomStyle = "padding:12px;background-color:green;color:white;font-size:14px;";
  console.log("%cNothing is certain. Anything is possible.", hiddenWisdomStyle);
  console.log("Our destiny is our own. We, humans, are the shepherds of our civilization. It is our responsibility to guide it in the ways of justice, reason and care.");

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/play" element={ <RockPaperScissorGame /> } />
        <Route path="/" element={ <Homepage /> } />
      </Routes>

    </div>
  );
}

export default App;
