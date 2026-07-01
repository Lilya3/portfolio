import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
// import Skills from "./pages/Skills/Skills";
// import Journey from "./pages/Journey/Journey";
// import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects />} />

        {/* Plus tard */}
        {/* <Route path="/competences" element={<Skills />} /> */}
        {/* <Route path="/parcours" element={<Journey />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;