"use client";
import React from "react";

interface ShareButtonProps {
  title: string;
  url: string;
}
import { Share2 } from "lucide-react";

const ShareButton: React.FC<ShareButtonProps> = ({ title, url }) => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url,
        });
        console.log("Shared successfully");
      } else {
        throw new Error("Web Share API not supported");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <button onClick={handleShare}>
      <Share2 />
    </button>
  );
};

export default ShareButton;
