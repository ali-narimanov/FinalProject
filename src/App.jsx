import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Politics from "./pages/Politics";
import FilmsEntertainment from "./pages/FilmsEntertainment";
import Crypto from "./pages/Crypto";
import Sports from "./pages/Sports";
import "./index.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ScrollToTop from "react-scroll-to-top";


function App() {
  return (
    <Router>
       <ScrollToTop smooth color="#6f00ff" />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">NEWS WEBSITE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Business">Business</Nav.Link>
              <Nav.Link href="/Sports">Sports</Nav.Link>
              <Nav.Link href="/Politics">Politics</Nav.Link>
              <Nav.Link href="/FilmsEntertainment">Entertainment</Nav.Link>
              <Nav.Link href="/Crypto">Bitcoin</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link eventKey={2} href="/about">
                ABOUT
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Business" element={<Business />} />
        <Route path="/Politics" element={<Politics />} />
        <Route path="/FilmsEntertainment" element={<FilmsEntertainment />} />
        <Route path="/Crypto" element={<Crypto />} />
        <Route path="/Sports" element={<Sports />} />
      </Routes>
    </Router>
  );
}

export default App;
