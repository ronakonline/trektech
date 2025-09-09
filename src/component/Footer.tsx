import React from "react";
import logo from "../assets/img/logo.webp";
import Image from "next/image";
import { quickLinks, servicesFoot } from "@/commonArray/array";

const Footer = () => {
  return (
    <>
      <style jsx>{`
        .footer {
          background: linear-gradient(145deg, #0a0f1c 0%, #1a1f2e 50%, #0a0f1c 100%);
          color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.02" fill-rule="nonzero"><circle cx="30" cy="30" r="1"/></g></svg>') repeat;
          pointer-events: none;
        }

        .footer-main {
          position: relative;
          z-index: 1;
          padding: 60px 0 30px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section {
          display: flex;
          flex-direction: column;
        }

        .footer-logo-section {
          grid-column: span 1;
        }

        .footer-logo {
          margin-bottom: 20px;
          display: inline-block;
          transition: transform 0.3s ease;
        }

        .footer-logo:hover {
          transform: scale(1.05);
        }

        .footer-tagline {
          color: #a0aec0;
          font-size: 16px;
          line-height: 1.6;
          margin: 0;
        }

        .footer-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 25px;
          color: #ffffff;
          position: relative;
          padding-bottom: 10px;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #4f46e5, #06b6d4);
          border-radius: 2px;
        }

        .footer-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-list li {
          margin-bottom: 12px;
        }

        .footer-link {
          color: #a0aec0;
          text-decoration: none;
          font-size: 15px;
          transition: all 0.3s ease;
          display: inline-block;
          position: relative;
        }

        .footer-link:hover {
          color: #ffffff;
          transform: translateX(5px);
        }

        .footer-link::before {
          content: '→';
          position: absolute;
          left: -20px;
          opacity: 0;
          transition: all 0.3s ease;
          color: #4f46e5;
        }

        .footer-link:hover::before {
          opacity: 1;
          left: -15px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .contact-label {
          font-size: 12px;
          color: #718096;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .contact-value {
          color: #ffffff;
          font-size: 14px;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-value:hover {
          color: #4f46e5;
        }

        .contact-address {
          color: #a0aec0;
          font-size: 14px;
          line-height: 1.5;
        }

        .footer-bottom {
          border-top: 1px solid #2d3748;
          padding-top: 30px;
          text-align: center;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .copyright {
          color: #718096;
          font-size: 14px;
          margin: 0;
        }

        .made-with {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #718096;
          font-size: 14px;
        }

        .heart {
          color: #e53e3e;
          font-size: 16px;
          animation: heartbeat 2s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0% { transform: scale(1); }
          14% { transform: scale(1.1); }
          28% { transform: scale(1); }
          42% { transform: scale(1.1); }
          70% { transform: scale(1); }
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
          
          .footer-logo-section {
            grid-column: span 2;
            text-align: center;
            margin-bottom: 20px;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            padding: 30px 0 15px 0;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .footer-logo-section {
            grid-column: span 1;
            text-align: center;
          }

          .footer-section {
            text-align: center;
          }

          .footer-title::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .footer-link::before {
            display: none;
          }

          .footer-link:hover {
            transform: none;
          }

          .footer-bottom-content {
            flex-direction: column;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 15px;
          }

          .footer-grid {
            gap: 25px;
          }

          .footer-title {
            font-size: 18px;
          }

          .contact-item {
            align-items: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-main">
          <div className="container">
            <div className="footer-grid">
              {/* Company Logo & Info */}
              <div className="footer-section footer-logo-section">
                <div className="footer-logo">
                  <Image
                    src={logo}
                    alt="Trek Tech Corp"
                    width={150}
                    height={83}
                  />
                </div>
                <p className="footer-tagline">
                  Your Trusted Partner for Comprehensive IT Solutions. 
                  Delivering excellence through innovation and reliability.
                </p>
              </div>

              {/* Quick Links */}
              <div className="footer-section">
                <h3 className="footer-title">Quick Links</h3>
                <ul className="footer-list">
                  {quickLinks?.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="footer-section">
                <h3 className="footer-title">Services</h3>
                <ul className="footer-list">
                  {servicesFoot?.map((service, index) => (
                    <li key={index}>
                      <a href={`#${service.id}`} className="footer-link">
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Information */}
              <div className="footer-section">
                <h3 className="footer-title">Get in Touch</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-label">Primary Email</span>
                    <a href="mailto:tushar@trektech.co.in" className="contact-value">
                      tushar@trektech.co.in
                    </a>
                    <a href="mailto:info@trektech.co.in" className="contact-value">
                      info@trektech.co.in
                    </a>
                  </div>
                  
                 
                  
                  <div className="contact-item">
                    <span className="contact-label">Phone</span>
                    <a href="tel:+918490007406" className="contact-value">
                      +91 8490007406
                    </a>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-label">Office Address</span>
                    <div className="contact-address">
                      D-603 Nakshtra Buildcon,<br />
                      Opp Swastik Platinum,<br />
                      Bhammariya Kuwa, Ahmedabad,<br />
                      Gujarat, 382405, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p className="copyright">
                  © 2025 Trek Tech Corp. All rights reserved.
                </p>
                <div className="made-with">
                  <span>Made with</span>
                  <span className="heart">♥</span>
                  <span>by Trek Tech Corp</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;