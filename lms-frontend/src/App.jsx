import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminNewClass from "./pages/Admin/class/AdminNewClass";
import AdminNewTeacher from "./pages/Admin/teacher/AdminNewTeacher";
import AdminNewStudent from "./pages/Admin/student/AdminNewStudent";
import AdminPayment from "./pages/Admin/payment/AdminPayment";
import AdminSettings from "./pages/Admin/settings/AdminSettings";
import AdminSecurity from "./pages/Admin/settings/AdminSecurity";
import AdminGradeSubject from "./pages/Admin/class/AdminGrade&Subject";
import AdminDateTime from "./pages/Admin/class/AdminDateTime";
import AdminPricing from "./pages/Admin/class/AdminPricing";
import AdminReviewPublish from "./pages/Admin/class/AdminReviewPublish";
import AdminViewClassInfo from "./pages/Admin/class/AdminViewClassInfo";
import AssignmenntOverview from "./pages/Admin/class/AssignmentOverview";
import AssignmentSchedule from "./pages/Admin/class/AssignmentSchedule";
import AssignmentReview from "./pages/Admin/class/AssignmentReview";
import AdminStudentInfo from "./pages/Admin/student/AdminStudentInfo";
import AdminTeacherInfo from "./pages/Admin/teacher/AdminTeacherInfo";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/new-class" element={<AdminNewClass />} />
          <Route path="/admin/new-teacher" element={<AdminNewTeacher />} />
          <Route path="/admin/new-student" element={<AdminNewStudent />} />
          <Route path="/admin/payments" element={<AdminPayment />} />
          <Route path="/admin/settings-personalinfo" element={<AdminSettings />} />
          <Route path="/admin/settings-security" element={<AdminSecurity />} />
          <Route path="/admin/new-class/grade-subject" element={<AdminGradeSubject />} />
          <Route path="/admin/new-class/date-time" element={<AdminDateTime />} />
          <Route path="/admin/new-class/pricing" element={<AdminPricing />} />
          <Route path="/admin/new-class/review-publish" element={<AdminReviewPublish />} />
          <Route path="/admin/view-class" element={<AdminViewClassInfo />} />
          <Route path="/admin/assignment/overview" element={<AssignmenntOverview />} />
          <Route path="/admin/assignment/schedule" element={<AssignmentSchedule />} />
          <Route path="/admin/assignment/review" element={<AssignmentReview />} />
          <Route path="/admin/student-info" element={<AdminStudentInfo />} />
          <Route path="/admin/teacher-info" element={<AdminTeacherInfo />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;

