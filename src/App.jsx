import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Skills from "./pages/Skills/Skills";

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

        <Route
        path="/competences"
        element={<Skills />}
        />

{/*         <Route
        path="/parcours.:slug"
        element={<Journey />}
        />
 */}
{/*         <Route
        path="/contact.:slug"
        element={<Contact />}
        />
 */}
              </Route>
    </Routes>
  );
}

export default App;