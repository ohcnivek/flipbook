import React from "react";
import "./app.css";
import "./app_tailwind.css";
import Flipbook from "./components/Flipbook";

export function App() {
  return (
    <div className="flex flex-col items-center text-3xl pt-10">
      <header className="pb-4">
        <h1 className="font-bold">Digital flipbook player</h1>
        <p className="text-sm">by kevin hyungyeon cho, ohcnivek@gmail.com</p>
      </header>
      <Flipbook />
    </div>
  );
}
