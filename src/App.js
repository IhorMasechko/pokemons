import { Route, Routes, Navigate } from "react-router-dom";
import Tabs from "./Components/Tabs/Tabs";
import Home from "../src/Pages/Home/Home";
import Search from "../src/Pages/Search/Search";
import Pokemon from "../src/Pages/Pokemon/Pokemon";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Tabs />}>
          <Route index element={<Home />} />
          <Route path="/pokemon" element={<Search />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
