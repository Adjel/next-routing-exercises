"use client";
import React from "react";
import { useRouter } from "next/navigation";
import ToastProvider from "../../../../components/ToastProvider";
import ToastShelf from "../../../../components/ToastShelf/ToastShelf";

const route = "/exercises/02-flash-messages";

function ContactPage() {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    router.push(`${route}`);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
