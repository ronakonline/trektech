import React, { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const initialState = {
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissions, setSubmissions] = useState<(typeof formData)[]>([]);

  const handleChange = (
    e: any
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);

      // Save to list
      setSubmissions((prev) => [...prev, formData]);

      toast.success("Form submitted successfully!", { position: "top-center" });

      setFormData(initialState);
    }
  };

  const fields = [
    { id: "fullName", label: "Name", type: "text" },
    { id: "companyName", label: "Company Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "phone", label: "Phone No", type: "tel" },
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
                    href="mailto:info@trektech.co.in"
                    className="text-decoration-none text-dark"
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
                    href="tel:+919904899942"
                    className="text-decoration-none text-dark"
                  >
                    +91 99048 99942
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6">
            <form
              className="formPage bg-white p-4 shadow"
              onSubmit={handleSubmit}
            >
              <h3 className="skyblue">Contact Us</h3>

              {fields.map(({ id, label, type }) => (
                <div className="mb-3" key={id}>
                  <label htmlFor={id} className="form-label fw-bold">
                    {label}
                  </label>
                  <input
                    type={type}
                    className={`form-control ${errors[id] && "is-invalid"}`}
                    id={id}
                    value={(formData as any)[id]}
                    onChange={handleChange}
                  />
                  {errors[id] && (
                    <div className="invalid-feedback">{errors[id]}</div>
                  )}
                </div>
              ))}

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5 py-2 w-100"
                  style={{ backgroundColor: "#00aaff", border: "none" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default ContactForm;
