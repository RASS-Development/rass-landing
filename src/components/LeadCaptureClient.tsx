"use client";

import React from "react";
import { APPSCRIPT_WEBAPP_URL } from "@/lib/appscript";

export default function LeadCaptureClient() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullname: String(formData.get("fullname") || ""),
      email: String(formData.get("email") || ""),
      contact: String(formData.get("contact") || ""),
      preparationFor: String(formData.get("preparationFor") || ""),
    };

    try {
      const response = await fetch(APPSCRIPT_WEBAPP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Some Apps Script deployments with doPost return empty body; treat non-error status as success
      if (response.ok) {
        alert("Thank you! We'll notify you about the launch.");
        form.reset();
        return;
      }

      const result = await response.json().catch(() => ({}));

      if (result?.result === "success") {
        alert("Thank you! We'll notify you about the launch.");
        form.reset();
      } else {
        alert("Something went wrong while submitting your details. Please try again.");
      }
    } catch (error) {
      alert("Unable to submit right now. Please check your connection and try again.");
      console.error("Lead form submission error", error);
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-800">
          Name
          <input
            type="text"
            name="fullname"
            placeholder="Your full name"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#393186] focus:ring-2 focus:ring-[#393186]/20"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-800">
          Email
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#393186] focus:ring-2 focus:ring-[#393186]/20"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm font-medium text-slate-800">
        Mobile number (optional)
        <input
          type="tel"
          name="contact"
          placeholder="+91 90000 00000"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-[#393186] focus:ring-2 focus:ring-[#393186]/20"
        />
      </label>
      <label className="space-y-2 text-sm font-medium text-slate-800">
        Preparing for
        <div className="grid gap-3 sm:grid-cols-3">
          {["NEET", "JEE", "Both"].map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition hover:border-[#393186]"
            >
              <input type="radio" name="preparationFor" value={option} />
              {option}
            </label>
          ))}
        </div>
      </label>

      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-xl bg-linear-to-r from-[#393186] via-[#393186] to-[#d7b56d] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        Get Notified at Launch
      </button>
    </form>
  );
}
