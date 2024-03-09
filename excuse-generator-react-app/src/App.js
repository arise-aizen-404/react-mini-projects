import "./styles.css";
import { useState } from "react";
// import { useEffect } from "react";
import axios from "axios";

export default function App() {
  const [excuseData, setExcuseData] = useState("");
  const fetchExcuse = (ele) => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${ele}/`)
      .then((res) => setExcuseData(res.data[0].excuse))
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
      <button className="btn btn-party" onClick={() => fetchExcuse("party")}>
        party
      </button>
      <button className="btn btn-family" onClick={() => fetchExcuse("family")}>
        family
      </button>
      <button className="btn btn-office" onClick={() => fetchExcuse("office")}>
        Office
      </button>
      <p className="excuse-text">{excuseData}</p>
    </div>
  );
}
