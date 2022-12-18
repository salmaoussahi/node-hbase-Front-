import AddRestaurant from "./pages/restaurant/AddRestaurant";
import AllRestaurant from "./pages/restaurant/AllRestaurant";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
import DetailRestaurant from "./pages/restaurant/DetailRestaurant";
import UpdateRestaurant from "./pages/restaurant/UpdateRestaurant";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Ressources from "./pages/Ressources";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:name" element={<Ressources />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/addRestaurant" element={<AddRestaurant />} />
          <Route path="/allRestaurant" element={<AllRestaurant />} />
          <Route path="/updateRestaurant/:name" element={<UpdateRestaurant />} />
          <Route path="/detailRestaurant/:name" element={<DetailRestaurant />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
