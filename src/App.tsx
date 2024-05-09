import React from "react";
import OlContextProvider from "./context/openlayers/OlContext";
import OlMap from "./components/OlMap";

function App() {
  return (
    <div>
      <OlContextProvider>
        <OlMap />
      </OlContextProvider>
    </div>
  );
}

export default App;
