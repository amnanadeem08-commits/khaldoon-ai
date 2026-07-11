import { NextResponse } from "next/server";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message?: string;
  /** @deprecated legacy field */
  interest?: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const company = (body.company || "").trim();
  const projectType = (body.projectType || body.interest || "").trim();
  const budget = (body.budget || "").trim();
  const message = (body.message || "").trim();

  if (name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please enter your name." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }
  if (message.length < 10) {
    return NextResponse.json({ ok: false, error: "Please add a short project description." }, { status: 400 });
  }

  const formspreeId = process.env.FORMSPREE_FORM_ID;
  const web3Key = process.env.WEB3FORMS_ACCESS_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;
  const resendTo = process.env.RESEND_TO_EMAIL || contactEmail;

  const payload = {
    name,
    email,
    company,
    projectType,
    budget,
    message,
    _subject: `Khaldoon AI inquiry — ${projectType || "general"}`,
  };

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "n/a"}`,
    `Project type: ${projectType || "n/a"}`,
    `Budget: ${budget || "n/a"}`,
    "",
    message,
  ].join("\n");

  try {
    if (formspreeId) {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        return NextResponse.json({ ok: false, error: "Delivery failed. Please try again shortly." }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    }

    if (web3Key) {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: web3Key,
          subject: payload._subject,
          from_name: "Khaldoon AI Website",
          ...payload,
        }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (!res.ok || !json.success) {
        return NextResponse.json({ ok: false, error: "Delivery failed. Please try again shortly." }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    }

    if (resendKey && resendTo) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || "Khaldoon AI <onboarding@resend.dev>",
          to: [resendTo],
          reply_to: email,
          subject: payload._subject,
          text,
        }),
      });
      if (!res.ok) {
        return NextResponse.json({ ok: false, error: "Delivery failed. Please try again shortly." }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    }

    if (contactEmail) {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(contactEmail)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...payload,
          message: text,
        }),
      });
      if (!res.ok) {
        return NextResponse.json({ ok: false, error: "Delivery failed. Please try again shortly." }, { status: 502 });
      }
      return NextResponse.json({ ok: true });
    }

    console.info("[contact]", payload);
    return NextResponse.json({ ok: true, stored: "local-log" });
  } catch {
    return NextResponse.json({ ok: false, error: "Unable to reach the mail service." }, { status: 502 });
  }
}
