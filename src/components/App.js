import React from "react";
import SpicyFoodList from "./SpicyFoodList";

function App() {
  return (
    <div>
      <h3>SpicyFoodList</h3>
      <SpicyFoodList />
      <getNewSpicyFood/>
      <handleLiClick/>
      <getNewRandomSpicyFood/>
    </div>
  );
}

export default App;
