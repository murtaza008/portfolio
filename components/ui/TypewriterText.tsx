"use client";

import React, { useState, useEffect } from "react";

const roles = [
  "Full Stack Engineer",
  "Frontend Developer",
  "Backend Developer",
];

export default function TypewriterText() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    let timeoutId: NodeJS.Timeout;

    if (isDeleting) {
      timeoutId = setTimeout(() => {
        setCurrentText(role.substring(0, currentText.length - 1));
      }, 20); // Deleting speed
    } else {
      timeoutId = setTimeout(() => {
        setCurrentText(role.substring(0, currentText.length + 1));
      }, 40); // Typing speed
    }

    if (!isDeleting && currentText === role) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <>
      {currentText}
      <span className="inline-block w-0.5 h-4 bg-[#c8a97e] ml-0.5 animate-blink"></span>
    </>
  );
}
