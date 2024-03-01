import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminNewClass from "./pages/Admin/class/AdminNewClass";
import AdminNewTeacher from "./pages/Admin/teacher/AdminNewTeacher";
import AdminNewStudent from "./pages/Admin/student/AdminNewStudent";
import AdminPayment from "./pages/Admin/payment/AdminPayment";
import AdminSettings from "./pages/Admin/settings/AdminSettings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/new-class" element={<AdminNewClass />} />
          <Route path="/admin/new-teacher" element={<AdminNewTeacher />} />
          <Route path="/admin/new-student" element={<AdminNewStudent />} />
          <Route path="/admin/payments" element={<AdminPayment />} />
          <Route path="/admin/settings" element={<AdminSettings />} />


        </Route>
      </Routes>
    </Router>
  );
}

export default App;

