import React from "react";
import { FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

// Define form data type
interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  message: string;
}

// Validation schema using Yup
const schema = yup.object().shape({
  fullName: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  companyName: yup.string().required("Company name is required").min(2, "Company name must be at least 2 characters"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  message: yup.string().required("Message is required").min(10, "Message must be at least 10 characters"),
});

const SuccessModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Opaque black overlay
        zIndex: 1050,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
      onClick={onClose} // Close on backdrop click
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '2rem',
          width: '400px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          textAlign: 'center',
          zIndex: 1060,
          cursor: 'default',
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="d-flex justify-content-end mb-3">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
            style={{ fontSize: '1.5rem' }}
          ></button>
        </div>

        <div className="mb-4">
          <div
            className="rounded-circle bg-success bg-opacity-10 d-inline-flex p-3"
            style={{ width: 80, height: 80 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
            </svg>
          </div>
        </div>

        <h4 className="fw-bold mb-2">Thank You!</h4>
        <p className="text-muted mb-4">
          Your message has been sent successfully.<br />
          We will get back to you within 24 hours.
        </p>

        <button
          type="button"
          className="btn btn-primary px-4"
          style={{ backgroundColor: "#00aaff", border: "none", borderRadius: "6px" }}
          onClick={onClose}
        >
          Got it
        </button>
      </div>
    </div>
  );
};
const ContactForm: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Post to Formspree
      await axios.post("https://formspree.io/f/xzzakyyb", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Show success modal
      setIsModalOpen(true);

      // Clear form fields
      reset();

    } catch (error) {
      alert("Something went wrong. Please try again later.");
      console.error("Form submission error:", error);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const fields = [
    { id: "fullName", label: "Name", type: "text", name: "fullName" as const },
    { id: "companyName", label: "Company Name", type: "text", name: "companyName" as const },
    { id: "email", label: "Email", type: "email", name: "email" as const },
    { id: "phone", label: "Phone No", type: "tel", name: "phone" as const },
  ];

  return (
    <section
      className="contact-form-section py-5"
      style={{ backgroundColor: "#f0f8ff" }}
    >
      <div className="container">
        <div className="row g-4 min-vh-100 justify-content-center align-items-center">
          {/* Left Column */}
          <div className="col-md-6 mt-5">
            <h2 className="fw-bold">We’re Here to Assist You</h2>
            <p>
              We’re here to help you explore the right IT solutions for your
              business.
            </p>

            <div className="d-flex align-items-center gap-3 mt-3">
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#eafaff",
                  borderRadius: 8,
                  border: "1px solid #00aaff",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <FaEnvelope size={24} color="#00aaff" />
              </div>
              <div>
                <p className="mb-0 fw-bold">Email:</p>
                <p className="mb-0">
                  <a
                    href="mailto:tushar@trektech.co.in"
                    className="text-decoration-none text-dark d-block"
                  >
                    tushar@trektech.co.in
                  </a>
                  <a
                    href="mailto:info@trektech.co.in"
                    className="text-decoration-none text-dark d-block"
                  >
                    info@trektech.co.in
                  </a>
                </p>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 mt-4">
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#eafaff",
                  borderRadius: 8,
                  border: "1px solid #00aaff",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <FaPhone size={24} color="#00aaff" />
              </div>
              <div>
                <p className="mb-0 fw-bold">Phone:</p>
                <p className="mb-0">
                  <a
                    href="tel:+918490007406"
                    className="text-decoration-none text-dark"
                  >
                    +91 8490007406
                  </a>
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 mt-4">
              <div
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#eafaff",
                  borderRadius: 8,
                  border: "1px solid #00aaff",
                  padding: "8px"
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <FaLocationArrow size={24} color="#00aaff" />
              </div>
              <div>
                <p className="mb-0 fw-bold">Address:</p>
                <p className="mb-0">
                  <a
                    href="https://maps.app.goo.gl/v5g3AF1tHd75psHC7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                  >
                    D-603 Nakshtra Buildcon, Opp Swastik Platinum, Bhammariya Kuwa, Ahmedabad, Gujarat, 382405, India
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <form
              className="formPage bg-white p-4 shadow"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <h3 className="skyblue mb-4">Contact Us</h3>

              {fields.map(({ id, label, type, name }) => (
                <div className="mb-3" key={id}>
                  <label htmlFor={id} className="form-label fw-bold">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
                    placeholder={`Enter your ${label.toLowerCase()}`}
                    {...register(name)}
                  />
                  {errors[name] && (
                    <div className="invalid-feedback d-block">
                      {errors[name]?.message}
                    </div>
                  )}
                </div>
              ))}

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">
                  Message
                </label>
                <textarea
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  id="message"
                  rows={4}
                  placeholder="Type your message..."
                  {...register("message")}
                />
                {errors.message && (
                  <div className="invalid-feedback d-block">
                    {errors.message.message}
                  </div>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary px-5 py-2 w-100"
                  style={{ backgroundColor: "#00aaff", border: "none" }}
                >
                  {isSubmitting ? (
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default ContactForm;