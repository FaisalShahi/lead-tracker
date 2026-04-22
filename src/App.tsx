import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import AddLeadPage from "./pages/AddLeadPage";
import LeadDetailPage from "./pages/LeadDetailPage";
import AllLeadsPage from "./pages/AllLeadsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/add-lead" element={<AddLeadPage />} />
        <Route path="/leads/:id" element={<LeadDetailPage />} />
        <Route path="/leads" element={<AllLeadsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
