import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminNewClass from "./pages/Admin/class/AdminNewClass";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/new-class"     element={<AdminNewClass />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

