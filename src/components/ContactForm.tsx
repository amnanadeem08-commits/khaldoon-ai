"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim(),
      projectType: String(data.get("projectType") || "").trim(),
      budget: String(data.get("budget") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Unable to send your message.");
      }

      setStatus("success");
      setMessage("Thanks — your message was sent. We typically reply within 24–48 hours.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form className="form panel" onSubmit={onSubmit} noValidate>
      <label>
        Name
        <input name="name" required minLength={2} placeholder="Your name" autoComplete="name" />
      </label>
      <label>
        Email
        <input type="email" name="email" required placeholder="you@company.com" autoComplete="email" />
      </label>
      <label>
        Company
        <input name="company" placeholder="Company or team" autoComplete="organization" />
      </label>
      <label>
        Project type
        <select name="projectType" defaultValue="excel">
          <option value="excel">Excel MVP</option>
          <option value="databot">AI DataBot beta</option>
          <option value="dashboard">Business Dashboard Package</option>
          <option value="ai-analytics">AI Analytics Package</option>
          <option value="automation">Automation Package</option>
          <option value="trade">Khaldoon Trade waitlist</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Budget
        <select name="budget" defaultValue="discuss">
          <option value="discuss">Prefer to discuss</option>
          <option value="under-500">Under $500</option>
          <option value="500-1500">$500 – $1,500</option>
          <option value="1500-5000">$1,500 – $5,000</option>
          <option value="5000-plus">$5,000+</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          required
          minLength={10}
          placeholder="What data do you have, and what decision or report do you need?"
        />
      </label>

      <button className="btn btn-primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending…" : "Send message"}
      </button>

      {message && (
        <p className={`form-status ${status === "success" ? "is-success" : "is-error"}`} role="status" aria-live="polite">
          {message}
        </p>
      )}
    </form>
  );
}
