import React, { useState } from "react";
import "./app.css";
import "./app_tailwind.css";
import Flipbook from "./components/Flipbook";
// This is a placeholder. Feel free to edit or remove this code :)
export function App() {
  return (
    <div className="flex flex-col items-center text-3xl pt-10">
      <header className="font-bold">
        <h1>Digital flipbook player</h1>
      </header>
      <Flipbook></Flipbook>
    </div>
  );
}
