import React from "react";
import logo from "../assets/img/logo.webp";
import Image from "next/image";
import { contactInfo, quickLinks, servicesFoot } from "@/commonArray/array";

const Footer = () => {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: "#222" }}>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
            <Image
              src={logo}
              alt="Security"
              className="img-fluid"
              style={{ maxWidth: "150px", height: "83px" }}
            />
            <p className="mb-0">
              Your Trusted Partner for Comprehensive IT Solutions
            </p>
          </div>

          <div className="col-md-8">
            <div className="row">
              {/* Quick Links */}
              <div className="col-6 col-lg-4 mb-3">
                <h6 className="fw-bold">Quick Links</h6>
                <ul className="list-unstyled">
                  {quickLinks?.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="text-white text-decoration-none"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="col-6 col-lg-4 mb-3">
                <h6 className="fw-bold">Services</h6>
                <ul className="list-unstyled">
                  {servicesFoot?.map((service, index) => (
                    <li key={index}>
                      <a
                        href={`#${service.id}`}
                        className="text-white text-decoration-none"
                      >
                        {service.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="col-12 col-lg-4 mb-3">
                <h6 className="fw-bold">Contact Us</h6>
                {contactInfo?.map((info, index) => (
                  <p key={index} className="mb-1">
                    {info.type}:{" "}
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white text-decoration-none"
                      >
                        {info.value}
                      </a>
                    ) : (
                      info.value
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center pt-4">
          <p className="small mb-0">
            © 2025 Trek Tech Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
