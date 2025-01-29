import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./HomePage.css"; // Add custom CSS for the home page here

const Home = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Careonix Charity Foundation</h1>
          <p>We are committed to bringing positive change to the community.</p>
          <a href="/about" className="btn-primary">
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Careonix Charity Foundation is dedicated to making a difference by
            supporting various causes and spreading awareness.
          </p>
          <a href="/about" className="btn-secondary">
            Read More
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Fundraising</h3>
            <p>Organizing events to raise funds for charity causes.</p>
          </div>
          <div className="service-card">
            <h3>Community Support</h3>
            <p>Providing support to underserved communities.</p>
          </div>
          <div className="service-card">
            <h3>Education</h3>
            <p>Helping underprivileged children with education.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What People Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "Careonix has helped me in so many ways. Their programs have made
              a huge difference in my life."
            </p>
            <h4>John Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "I'm so grateful for the support I received. It has truly made a
              positive impact."
            </p>
            <h4>Jane Smith</h4>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
