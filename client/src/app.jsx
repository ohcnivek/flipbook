import React from "react";
import "./app.css";
import "./app_tailwind.css";
import Flipbook from "./components/Flipbook";

export function App() {
  return (
    <div className="flex flex-col items-center text-3xl pt-10">
      <header className="font-bold pb-4">
        <h1>Digital flipbook player</h1>
      </header>
      <Flipbook />
    </div>
  );
}
