import "./App.css";
import { BrowserRouter as Router, Route, Routes , Link } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Dashboard from "./pages/dashboard/Dashboard"

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={
           <>
              <NavBar />
              <Footer />
              <Link to="/dashboard">Dashboard</Link>
            </>
          }
        />

        <Route path="/dashboard" element={ <Dashboard/> }  />

      </Routes>
    </Router>
  );
}

export default App;
