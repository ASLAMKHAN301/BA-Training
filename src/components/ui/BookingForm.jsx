import { useState } from "react";

import { NAVY, STONE } from "../../constants/theme";

import { FormField, FormSelect } from "./index";

import {
  PROGRAM_OPTIONS,
  STATUS_OPTIONS,
} from "../../data/content";

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
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Handle Submit
  const handleSubmit = () => {

    // Existing Data
    const existingData =
      JSON.parse(localStorage.getItem("bookingForms")) || [];

    // Add New Form
    const updatedData = [...existingData, formData];

    // Save
    localStorage.setItem(
      "bookingForms",
      JSON.stringify(updatedData)
    );

    console.log("Saved Data:", updatedData);

    setSubmitted(true);

    // Clear Form
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      program: "",
      status: "",
    });
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
          fontFamily:
            "'Playfair Display', Georgia, serif",
          fontSize: 22,
          fontWeight: 700,
          color: NAVY,
          marginBottom: 6,
          lineHeight: 1.3,
        }}
      >
        {light
          ? "Book Your Free Session"
          : "Book a Free Counselling Session"}
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
          gridTemplateColumns:
            "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 12,
        }}
      >

        <FormField
          label="First Name"
          placeholder="Rahul"
          value={formData.firstName}
          onChange={(e) =>
            handleChange("firstName", e.target.value)
          }
        />

        <FormField
          label="Last Name"
          placeholder="Sharma"
          value={formData.lastName}
          onChange={(e) =>
            handleChange("lastName", e.target.value)
          }
        />

      </div>

      <FormField
        label="Phone / WhatsApp"
        type="tel"
        placeholder="+91 98765 43210"
        value={formData.phone}
        onChange={(e) =>
          handleChange("phone", e.target.value)
        }
      />

      <FormField
        label="Email Address"
        type="email"
        placeholder="rahul@example.com"
        value={formData.email}
        onChange={(e) =>
          handleChange("email", e.target.value)
        }
      />

      <FormSelect
        label="Program of Interest"
        options={PROGRAM_OPTIONS}
        value={formData.program}
        onChange={(e) =>
          handleChange("program", e.target.value)
        }
      />

      <FormSelect
        label="Current Status"
        options={STATUS_OPTIONS}
        value={formData.status}
        onChange={(e) =>
          handleChange("status", e.target.value)
        }
      />

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          background: submitted
            ? "#16A34A"
            : NAVY,
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
        🔒 No spam. No pressure. Your information is
        completely confidential.
      </p>
    </div>
  );
}