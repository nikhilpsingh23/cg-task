import React from "react";
import "./styles/footer.css";

function FooterSection() {
  return (
    <section className="footer-section">
      <div className="container footer">
        <div className="logo-section">
          <img className="logo" src="public/logo.png" alt="1mdm" />
          <br />
          <p className="footer-link">
            <br />
            One Medical Devices
            <br />
            Market Place
          </p>
        </div>
        <br />
        <div className="link-section">
          <h5>Platform</h5>
          <br />
          <a href="seller.php">
            <p className="footer-link">Sell on 1MDM</p>
          </a>
          <a href="pricing.php">
            <p className="footer-link">Pricing</p>
          </a>
          <a href="index.php">
            <p className="footer-link">About Us</p>
          </a>
          <a href="our-story.php">
            <p className="footer-link">Our Story</p>
          </a>
          <a
            href="https://superlabs.co/careers.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="footer-link">Careers</p>
          </a>
          <a href="https://1mdm.com/index.php?route=extension/maza/blog/home">
            <p className="footer-link">Blog</p>
          </a>
          <a href="https://1mdm.com/index.php?route=product/manufacturer">
            <p className="footer-link">Brands</p>
          </a>
        </div>

        <div className="link-section">
          <h5>Press Room</h5>
          <br />
          <a href="press.php">
            <p className="footer-link">Images & B-roll</p>
          </a>
          <br />
          <h5>Policies</h5>
          <br />
          <a href="https://1mdm.com/terms-of-service">
            <p className="footer-link">Terms of Service</p>
          </a>
          <a href="https://1mdm.com/privacy-policy">
            <p className="footer-link">Privacy Policy</p>
          </a>
          <a href="https://1mdm.com/delivery-information">
            <p className="footer-link">Delivery Information</p>
          </a>
        </div>
        <br />
        <div className="contact-section">
          <h5>Reach Us</h5>
          <br />
          <a href="https://1mdm.com/corporate-information">
            <p className="footer-link">Corporate Information</p>
          </a>
          <a href="contact.php">
            <p className="footer-link">Contact Us</p>
          </a>
        </div>
        <br />
      </div>
    </section>
  );
}

export default FooterSection;
