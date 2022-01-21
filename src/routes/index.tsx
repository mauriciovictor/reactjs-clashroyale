import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Locations } from "../pages/Locations";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </BrowserRouter>
  );
}
