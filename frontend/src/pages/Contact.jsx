import "./Contact.css";
import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("success");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must have at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name should only contain letters and spaces";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters long";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const showPopupMessage = (type, title, message) => {
    setPopupType(type);
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!validateForm()) {
      showPopupMessage(
        "error",
        "Validation Error",
        "Please check the form for errors and try again."
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      showPopupMessage(
        "success",
        "Message Sent Successfully!",
        "Thank you for reaching out. I'll get back to you soon."
      );

      setSuccess("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      showPopupMessage(
        "error",
        "Failed to Send Message",
        error.message || "Something went wrong. Please try again."
      );

      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contactSection" id="contact">
      {showPopup && (
        <div className="popupOverlay">
          <div className="popupContent">
            <div className={`popupIcon ${popupType}`}>
              {popupType === "success" ? "✓" : "✗"}
            </div>
            <h3>
              {popupType === "success"
                ? "Message Sent Successfully!"
                : "Failed to Send Message"}
            </h3>
            <p>
              {popupType === "success"
                ? "Thank you for reaching out. I'll get back to you soon."
                : "Please check the form for errors and try again."}
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="popupCloseBtn"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="contactHeader">
        <h2>Contact Me</h2>
        <p>
          Have a project idea, internship opportunity, or just want to connect?
          Feel free to reach out.
        </p>
      </div>

      <div className="contactContainer">
        <div className="contactInfo">
          <h3>Let's Connect</h3>

          <p>
            I'm always interested in discussing web development, collaborations,
            internships, and new opportunities.
          </p>

          <div className="infoItem">
            <FaEnvelope />
            <span>xaayush977@gmail.com</span>
          </div>

          <div className="infoItem">
            <FaMapMarkerAlt />
            <span>Kathmandu, Nepal</span>
          </div>

          <div className="socialLinks">
            <a
              href="https://github.com/Aayush-uxx"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/aayush-chaudhary-13941332a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <form className="contactForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="errorText">{errors.name}</span>}
          </div>

          <div className="formGroup">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="errorText">{errors.email}</span>}
          </div>

          <div className="formGroup">
            <textarea
              rows="6"
              placeholder="Write your message..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "error" : ""}
            ></textarea>
            {errors.message && (
              <span className="errorText">{errors.message}</span>
            )}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="successMsg">{success}</p>}
          {error && <p className="errorMsg">{error}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
