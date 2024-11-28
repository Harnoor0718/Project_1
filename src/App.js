import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <section className="white-section">
        <h1>Welcome to the White Section</h1>
        <p>
          This is the starting section of the webpage. Here you can include 
          an introduction or any important content that needs to stand out.
        </p>
      </section>
      <section className="black-section">
        <h1>Welcome to the Black Section</h1>
        <p>
          This section provides a contrast to the white section. You can use 
          this space to highlight key information or create visual impact.
        </p>
      </section>
    </div>
  );
};

export default App;
