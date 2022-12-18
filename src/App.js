import AddRestaurant from "./component/AddRestaurant";
import AllRestaurant from "./component/AllRestaurant";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/addRestaurant" element={<AddRestaurant />} />
          <Route path="/allRestaurant" element={<AllRestaurant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
