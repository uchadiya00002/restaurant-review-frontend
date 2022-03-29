import React from "react";
import { Routes, Route } from "react-router-dom";
import { RestaurantsContextProvider } from "./context/RestaurantContext";
import Home from "./routes/Home";
import RestaurantDetailsPage from "./routes/RestaurantDetailsPage";
import UpdatePage from "./routes/UpdatePage";

const App = () => {
  return (
    <RestaurantsContextProvider>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/restaurants/:id"
            element={<RestaurantDetailsPage />}
          />

          <Route
            exact
            path="/restaurants/:id/update"
            element={<UpdatePage />}
          />
        </Routes>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
