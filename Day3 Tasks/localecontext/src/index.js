import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";
import LocaleContext from "./LocaleContext";
import "./index.css";

/*
  Instructions:
    You're given a full app that uses Context.Consumer
    in order to grab values off of context. Your job is to
    refactor all of those to use the `useContext` Hook.
*/

function App() {
  const [locale, setLocale] = React.useState("en");

  const toggleLocale = () => {
    setLocale((locale) => {
      return locale === "en" ? "es" : "en";
    });
  };

  const value = React.useMemo(
    () => ({
      locale,
      toggleLocale,
    }),
    [locale]
  );

  return (
    <Router>
      <div className="App">
        <LocaleContext.Provider value={value}>
          <Nav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </LocaleContext.Provider>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

