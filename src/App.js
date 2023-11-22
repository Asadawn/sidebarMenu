import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import Analytics from "./pages/Analytics";
import Comment from "./pages/Comment";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";

function App() {
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Analytics" element={<Analytics />} />
              <Route path="/Product" element={<Product />} />
              <Route path="/Comment" element={<Comment />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
