// App.tsx
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import Booking from "./pages/Booking";
import Form from './pages/Form';
import "./App.css";


function App() {
  return (

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/booking" element={<Booking />} /> */}
        <Route path="/Form" element={<Form />} />
      </Routes>
  );
}

export default App;
