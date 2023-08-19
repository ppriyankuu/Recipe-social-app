/* eslint-disable no-unused-vars */
import { useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full">
      <Layout />
    </div>
  );
}

export default App;
