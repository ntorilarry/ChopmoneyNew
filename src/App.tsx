import React from "react";
import "./App.css";
import Home from "./pages/home";
import { Navigate, Route, Routes } from "react-router-dom";
import Storytime from "./pages/storytime";
import Storytimeleft from "./pages/storytimeleft";
import About from "./pages/about";
import { Helmet, HelmetProvider } from "react-helmet-async";
import GoogleTagManager from "./GoogleTag";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <GoogleTagManager />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Chopmoney</title>
          <meta
            name="description"
            content="chop money, budget, budgeting, money, finance, expenses, chopmoney, chopmoney app, sticking to your budget, stick to my budget, savings, financial planning, frugal, money management, Stick to your budget in Ghana, Chop money app, Budgeting app ghana"
          />
          <link rel="canonical" href="http://chopmoney.co" />
        </Helmet>
        <Routes>
          {/* Main Routes */}
          <Route path="/">
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="storytime" element={<Storytime />} />
            <Route path="storytime2" element={<Storytimeleft />} />
            <Route path="about" element={<About />} />
          </Route>

          {/* Not found */}
          <Route
            path="*"
            element={
              <h1 className="text-center text-muted">
                You have hit the end of the road!
              </h1>
            }
          />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
