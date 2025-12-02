"use client";

import personalData from "@/data/personal.json";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Footer() {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";
  
  const [currentTime, setCurrentTime] = useState(() => {
    return new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  });

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    // Update every second
    const interval = setInterval(updateTime, 1000);
    
    // Also update immediately on mount to ensure accuracy
    updateTime();

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { name: "X", url: personalData.socialLinks.x },
    { name: "GitHub", url: personalData.socialLinks.github },
    { name: "LinkedIn", url: personalData.socialLinks.linkedin },
    { name: "Substack", url: personalData.socialLinks.substack },
  ];

  return (
    <footer className={`${isProjectsPage ? "relative" : "fixed bottom-0"} left-0 right-0 flex justify-between items-center pb-8 mt-8`}>
      <div className="ml-48 pl-8 text-sm text-gray-400 font-light">
        {personalData.location} {currentTime}
      </div>
      <div className="flex gap-4 text-sm text-gray-400 font-light pr-[8vw]">
        {socialLinks.map((link, index) => (
          <span key={link.name}>
            {index > 0 && " "}
            {link.url ? (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-600 transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <span>{link.name}</span>
            )}
          </span>
        ))}
      </div>
    </footer>
  );
}

