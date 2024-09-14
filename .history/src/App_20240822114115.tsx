import "./cards.css";

import IconAccessibility from "~icons/carbon/accessibility";
import IconAccountBox from "~icons/mdi/account-box";

import { RevealBento } from "./components/RevealBento";
import { GridCards } from "./components/GridCards";

import StaggeredDropDown from "./components/StaggeredDropDown";
import Bentodemo from "./components/BentoGrid";
import { Example } from "./components/TiltShineCard";

function App() {
  return (
    <div className="section-large">
      <div className="container-large">
        <div>
          <IconAccessibility />
          <IconAccountBox style={{ fontSize: "2em", color: "red" }} />
        </div>
        <RevealBento />
        <GridCards />
        <StaggeredDropDown />

        <Example />
      </div>
    </div>
  );
}

export default App;
