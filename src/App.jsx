import "./App.css";
import Avys from "./Components/Avys";
import Karves from "./Components/Karves";
import Mygtukas from "./Components/Mygtukas";
import { useState } from "react";
import rand from "./Common/rand";
import { useEffect } from "react";

function App() {
  const [karves, setKarves] = useState([]);
  const [avys, setAvys] = useState([]);

  const randomAvys = () => {
    const elementas = [];
    let ilgis = rand(5, 20);

    for (let i = 0; i < ilgis; i++) {
      elementas.push(`A${rand(0, 9999999)}`);

      console.log(elementas[i]);
    }
    return elementas;
  };
  const randomKarves = () => {
    const elementas = [];
    let ilgis = rand(5, 20);

    for (let i = 0; i < ilgis; i++) {
      elementas.push(`K${rand(0, 9999999)}`);

      console.log(elementas[i]);
    }
    return elementas;
  };

  const goGyvunai = () => {
    const elementas = randomAvys();
    console.log(elementas);
    setAvys((avys) => [...avys, ...elementas]);
    let avytes = localStorage.getItem("saugiosA");
    if (avytes !== []) {
      avytes = localStorage.setItem("saugiosA", JSON.stringify(avys));
    }
    const elementas1 = randomKarves();
    setKarves((karves) => [...karves, ...elementas1]);

    console.log(elementas);

    if (karves.length > 0) {
      localStorage.setItem("saugios", JSON.stringify(karves));
    }
  };

  const ateKarvute = (karve, i) => {
    karves.splice(i, 1);

    setAvys((avys) => [...avys, karve]);
  };

  const ateAvyte = (avis, i) => {
    avys.splice(i, 1);

    setKarves((karves) => [...karves, avis]);
  };

  useEffect(() => {
    const karves = JSON.parse(localStorage.getItem("saugios"));
    if (karves) {
      setKarves(karves);
      console.log(JSON.parse(localStorage.getItem("saugios")));
    }
  }, []);
  useEffect(() => {
    const avys = JSON.parse(localStorage.getItem("saugiosA"));
    if (avys) {
      setAvys(avys);
      console.log(JSON.parse(localStorage.getItem("saugiosA")));
    }
  }, []);

  return (
    <div className="App">
      <h1>My little farm</h1>
      <Mygtukas goGyvunai={goGyvunai}></Mygtukas>
      <div className="ganykla">
        <div className="kaire">
          <h4>Karves</h4>
          <Karves ateKarvute={ateKarvute} karves={karves} avys={avys}></Karves>
        </div>
        <div className="desine">
          <h4>Avys</h4>
          <Avys ateAvyte={ateAvyte} avys={avys} karves={karves}></Avys>
        </div>
      </div>
    </div>
  );
}

export default App;
