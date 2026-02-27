import { Routes, Route, useLocation } from "react-router-dom";
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
import TermsnCondition from "./components/TermsnCondition";
import Privacy from "./components/Privacy";
import Refund from "./components/Refund";
import Shipping from "./components/Shipping";
import Membership from "./components/Membership";
import ProtectedRoute from "./components/ProtectedRoute";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { ToastContainer } from "react-toastify";
import LeadsHistory from "./dashboardComp/LeadsHistory";
import LeadsPage from "./pages/LeadsPage";
import { useEffect } from "react";
import { loginSuccess, setLoading } from "./slice/authSlice";
import { useDispatch } from "react-redux";
import { getProfile } from "./api/index";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  const loadUser = async () => {
    const token = localStorage.getItem("access");

    console.log("Token:", token);

    if (!token) {
      dispatch(setLoading());
      return;
    }

    try {
      const res = await getProfile();

      console.log(res.data);

      dispatch(
        loginSuccess({
          user: res.data,
          token: token,
        }),
      );
    } catch (err) {
      dispatch(setLoading());
    }
  };

  useEffect(() => {
    console.log("App Loaded");

    loadUser();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <ToastContainer position="top-right" theme="dark" autoClose={2000} />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<TermsnCondition />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/products/:slug" element={<ProductDetailsPage />} />
        <Route path="/leads/group/:slug" element={<LeadsPage />} />

        {/* dashboard */}
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/dboard" element={<Dboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/leads-history" element={<LeadsHistory/>}/>
        <Route path="/savedProducts" element={<SavedProducts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} /> */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/dboard"
          element={
            <ProtectedRoute>
              <Dboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/leads"
          element={
            <ProtectedRoute>
              <Leads />
            </ProtectedRoute>
          }
        />

        <Route
          path="/savedProducts"
          element={
            <ProtectedRoute>
              <SavedProducts />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/help"
          element={
            <ProtectedRoute>
              <Help />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
