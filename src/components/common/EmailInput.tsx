"use client";

import React, { useState } from "react";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Here, you can add your logic to subscribe to the newsletter
    // using the email value
    console.log(`Subscribing to the newsletter with email: ${email}`);
  };

  return (
    <div className="flex  items-center">
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        className="px-4 py-2 border bg-transparent border-gray-800 rounded-l-md focus:outline-none "
      />
      <button
        onClick={handleSubscribe}
        className="px-4 py-2 bg-primary/10 text-primary rounded-r-md hover:bg-primary/20 focus:outline-none"
      >
        Subscribe
      </button>
    </div>
  );
};

export default NewsletterSubscription;
