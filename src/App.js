import "./App.css";
import { useEffect, useState } from "react";
import Form from "./components/form";

function App() {
  const [sheet, setSheet] = useState({
    id: "",
    heading: "",
    issuer: "",
    receiver: "",
    copyReceiver: "",
  });

  const [sheets, setSheets] = useState(
    JSON.parse(localStorage.getItem("localSheet")) || []
  );

  useEffect(() => {
    localStorage.setItem("localSheet", JSON.stringify(sheets));
  }, [sheets]);

  return (
    <div className="App">
      <Form sheet={sheet} setSheet={setSheet} sheets={sheets} setSheets={setSheets}/>
      <div style={{whiteSpace: "pre-wrap"}}>
        {sheets.map(s => <p>{s.heading}</p>)}
      </div>
    </div>
  );
}

export default App;
