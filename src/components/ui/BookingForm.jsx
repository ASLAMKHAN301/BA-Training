import { useState } from "react";

import { NAVY, STONE } from "../../constants/theme";

import { FormField, FormSelect } from "./index";

import { PROGRAM_OPTIONS, STATUS_OPTIONS } from "../../data/content";

export default function BookingForm({ light = false }) {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    program: "",
    status: "",
  });

  // Handle Input Change
  const handleChange = (field, value) => {
  // console.log("Changed:", field, value);

  setFormData((prev) => ({
    ...prev,
    [field]: value,
  }));
};

  // Handle Submit
  const handleSubmit = async (e) => {
  e.preventDefault();

  const formDataToSend = {
    access_key: "08c634fc-7448-4fab-ba9f-d99e4df13f74",
    firstName: formData.firstName,
    lastName: formData.lastName,
    phone: formData.phone,
    email: formData.email,
    program: formData.program,
    status: formData.status,
    subject: "New Booking Form Submission",
  };

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSend),
      }
    );

    const result = await response.json();

    if (result.success) {
      // WhatsApp Message
      const whatsappMessage = `
New Booking Enquiry

Name: ${formData.firstName} ${formData.lastName}
Phone: ${formData.phone}
Email: ${formData.email}
Program: ${formData.program}
Status: ${formData.status}
      `;

      // Replace with admin WhatsApp number
      window.open(
        `https://wa.me/919876543210?text=${encodeURIComponent(
          whatsappMessage
        )}`,
        "_blank"
      );

      setSubmitted(true);

      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        program: "",
        status: "",
      });

      alert("Form submitted successfully!");
    } else {
      alert("Submission failed.");
      console.log(result);
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};

  

  return (
    <div
      style={{
        background: "white",
        borderRadius: 6,
        padding: "32px 24px",
        width: "100%",
        boxSizing: "border-box",
        boxShadow: light
          ? "0 32px 80px rgba(0,0,0,0.3)"
          : "0 24px 64px rgba(0,0,0,0.25)",
      }}
    >
      {/* Heading */}
      <div
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 22,
          fontWeight: 700,
          color: NAVY,
          marginBottom: 6,
          lineHeight: 1.3,
        }}
      >
        {light ? "Book Your Free Session" : "Book a Free Counselling Session"}
      </div>

      <div
        style={{
          fontSize: 13,
          color: STONE,
          marginBottom: 24,
          lineHeight: 1.6,
        }}
      >
        {light
          ? "A career advisor will call you within 24 hours."
          : "Speak with a career advisor in 24 hours. No pressure, no scripts."}
      </div>

      {/* Name Fields */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 12,
        }}
      >
        <FormField
          label="First Name"
          placeholder="Rahul"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
        />

        <FormField
          label="Last Name"
          placeholder="Sharma"
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />
      </div>

      <FormField
        label="Phone / WhatsApp"
        type="tel"
        placeholder="+91 98765 43210"
        value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
      />

      <FormField
        label="Email Address"
        type="email"
        placeholder="rahul@example.com"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <FormSelect
        label="Program of Interest"
        options={PROGRAM_OPTIONS}
        value={formData.program}
        onChange={(e) => handleChange("program", e.target.value)}
      />

      <FormSelect
        label="Current Status"
        options={STATUS_OPTIONS}
        value={formData.status}
        onChange={(e) => handleChange("status", e.target.value)}
      />

      {/* Submit Button */}
      <button
        type="button"
        onClick={handleSubmit}
        style={{
          width: "100%",
          background: submitted ? "#16A34A" : NAVY,
          color: "white",
          border: "none",
          borderRadius: 4,
          padding: "14px 20px",
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
          marginTop: 8,
          transition: "0.3s",
        }}
      >
        {submitted
          ? "✓ We'll be in touch within 24 hours"
          : "Book My Free Session →"}
      </button>

      <p
        style={{
          fontSize: 11,
          color: STONE,
          textAlign: "center",
          marginTop: 12,
          lineHeight: 1.6,
        }}
      >
        🔒 No spam. No pressure. Your information is completely confidential.
      </p>
    </div>
  );
}
