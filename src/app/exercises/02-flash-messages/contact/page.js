"use client";
import React from "react";

const route = "/exercises/02-flash-messages";

function handleSubmit() {}

function ContactPage() {
  return (
    <main>
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" required={true} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
