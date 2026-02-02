import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AnimatePresence } from "framer-motion";
import Dashboard from "./pages/Dashboard";
import Dboard from "./dashboardComp/Dboard";
import Leads from "./dashboardComp/Leads";
import SavedProducts from "./dashboardComp/SavedProducts";
import Help from "./dashboardComp/Help";
import Profile from "./dashboardComp/Profile";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import FAQ from "./components/FAQ";

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQ />} />

        {/* dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/dboard" element={<Dboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/savedProducts" element={<SavedProducts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
