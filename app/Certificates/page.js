"use client";
import { useState, useEffect } from "react";
import Certificates from "@/components/Certificates";
import { assets } from "@/public/assets/assets";

export default function CertificatesPage() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  return <Certificates assets={assets} theme={theme}  />;
}