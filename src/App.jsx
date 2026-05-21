import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import BusinessAnalyst from "./pages/BusinessAnalyst";
import CyberSecurity from "./pages/CyberSecurity";
import ProjectManagement from "./pages/ProjectManagement";
import DataScience from "./pages/DataScience";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/business-analyst"
        element={<BusinessAnalyst />}
      />

      <Route
        path="/cyber-security"
        element={<CyberSecurity />}
      />

      <Route
        path="/project-management"
        element={<ProjectManagement />}
      />

      <Route
        path="/data-science"
        element={<DataScience />}
      />
    </Routes>
  );
}