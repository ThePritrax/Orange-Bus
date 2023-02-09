import "./resources/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import Spinner from "./components/Spinner";
import { useSelector } from "react-redux";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <div>
      {loading && <Spinner/>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
