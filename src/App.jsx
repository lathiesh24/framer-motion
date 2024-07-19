import React from "react";
import Animation from "./Animation";
import TextAnimation from "./TextAnimation";

function App() {
  return (
    <div className="bg-customGradient h-screen">
      <div className="grid grid-cols-2">
        <TextAnimation />
        <div>
          <Animation />
        </div>
      </div>
    </div>
  );
}

export default App;
