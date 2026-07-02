import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route 
        path="/" 
        element={<Home />} 
        />

        <Route 
        path="/projets" 
        element={<Projects />} 
        />

        <Route
        path="/projets/:slug"
        element={<ProjectDetails />}
        />

        {/* Plus tard */}
        {/* <Route path="/competences" element={<Skills />} /> */}
        {/* <Route path="/parcours" element={<Journey />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Route>
    </Routes>
  );
}

export default App;