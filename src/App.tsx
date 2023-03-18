import React from "react";
import "./App.css";

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]; //tuples
type Person = {
  name: string;
  age?: number;
};
function App() {
  return <div className="App">Hello World</div>;
}

export default App;
