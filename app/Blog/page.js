"use client";
import { useState, useEffect } from "react";
import Blog from "@/components/Blog";
import { assets ,blogPosts } from "@/public/assets/assets";

export default function BlogPage() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  return <Blog assets={assets} theme={theme} posts={blogPosts} />;
}