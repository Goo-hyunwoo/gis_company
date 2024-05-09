import React from "react";
import OlContextProvider from "./context/openlayers/OlContext";
import OlMap from "./components/openlayers/OlMap";
import Search from "./pages/search/Search";
import Info from "./pages/info/Info";

function App() {
  return (
    <OlContextProvider>
      <>
        <Search />
        <Info />
        <OlMap />
      </>
    </OlContextProvider>
  );
}

export default App;
