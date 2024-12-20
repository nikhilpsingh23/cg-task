import React from "react";
import "./styles/copy.css";
function CopyrightSection() {
  return (
    <section className="copyright">
      <br />
      <p className="text-black">
        &copy; {new Date().getFullYear()} 1MDM ⚡ by{" "}
        <a
          href="https://www.superlabs.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          SuperLabs
        </a>
      </p>
    </section>
  );
}

export default CopyrightSection;
