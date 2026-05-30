import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import BusinessAnalyst from "./pages/BusinessAnalyst";
import CyberSecurity from "./pages/CyberSecurity";
import ProjectManagement from "./pages/ProjectManagement";
import DataScience from "./pages/DataScience";

/* Scroll To Top */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>

      {/* Auto Scroll Top On Page Change */}
      <ScrollToTop />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

      

        {/* Programs */}
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
    </>
  );
}