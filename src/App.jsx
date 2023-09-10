import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import BrowserRouter as Routerimport Footer from "./layout/Footer";
import CartProvider from "./components/CartContext";
import Footer from "./layout/Footer";
import Navbar from "./layout/navbar/NavBar";
import Bio from "./screens/bio/Bio";
import Home from "./screens/home/Home";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function App() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <CartProvider>
      <Router>
        <CookieConsent
          containerClasses="cookie_container"
          style={{
            background: "rgba(3, 3, 3, 0.9)",
            fontWeight: "500",
            height: "10vh",
            alignItems: "center",
            fontSize: "18px",
          }}
          buttonStyle={{
            borderRadius: "50px",
            padding: "20px 32px",
            fontSize: "18px",
            fontWeight: "700",
            background: "var(--bright)",
            color: "var(--dark)",
          }}
          contentStyle={{ textAlign: "left", marginBottom: "12px" }}
        >
          This website uses cookies and third party software to monitor traffic
          anonymously and improve user experience. For more info read my{" "}
          {/* <Span>
        <a href="/terms" aria-label="Visit Victor Blanco's Terms Page">
          terms & conditions
        </a>
      </Span> */}
        </CookieConsent>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          {/* <Route path="/terms" element={<Terms scrollToTop={scrollToTop} />} /> */}
          {/* <Route path="/Success" element={<Success />} /> */}
        </Routes>
        <Footer scrollToTop={scrollToTop} />
      </Router>
    </CartProvider>
  );
}

export default App;
