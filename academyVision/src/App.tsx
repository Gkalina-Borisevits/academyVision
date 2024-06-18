import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layouts";

function App() {
  return (
    <>
     <p >app</p>
      <Routes>
        <Route path="/" element={<Layout />}> 
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
