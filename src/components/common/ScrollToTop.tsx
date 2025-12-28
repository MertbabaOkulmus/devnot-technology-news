"use client";
import UseSticky from "@/hooks/UseSticky";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const { sticky }: { sticky: boolean } = UseSticky();
  const [showScroll, setShowScroll] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll((prev) => {
        if (!prev && window.pageYOffset > 400) return true;
        if (prev && window.pageYOffset <= 400) return false;
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button
        onClick={scrollTop}
        className={`scroll-top scroll-to-target ${sticky ? "open" : ""}`}
      >
        <i className="fas fa-angle-up"></i>
      </button>
    </>
  );
};

export default ScrollToTop;