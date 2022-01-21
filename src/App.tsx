import { useEffect } from "react";
import { api } from "./services/api";

function App() {
  useEffect(() => {
    async function loadData() {
      try {
        const locations = await api.get("/locations");

        console.log(locations.data);
      } catch (error) {
        console.log("error" + error);
      }
    }

    loadData();
  }, []);
  return <h1> Hello world </h1>;
}

export default App;
