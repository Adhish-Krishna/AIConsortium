import { useState } from "react";
import "./ShareButton.css";
import { FaShare } from "react-icons/fa6";

const ShareButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Always get the latest URL on click
  const getShareUrl = () => (typeof window !== "undefined" ? window.location.href : "");

  const handleShare = async () => {
    const shareUrl = getShareUrl();
    if (navigator.share && /android/i.test(navigator.userAgent)) {
      try {
        await navigator.share({
          title: document.title,
          url: shareUrl,
        });
      } catch (err) {
        copyToClipboard(shareUrl);
      }
    } else {
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = async (shareUrl: string) => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    } catch (err) {
      const textarea = document.createElement("textarea");
      textarea.value = shareUrl;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000);
    }
  };

  return (
    <div className="share-button-container">
      <button className="share-button-btn" onClick={handleShare} aria-label="Share">
        <FaShare/>
        Share
      </button>
      <div className={`share-button-popup${showPopup ? " show" : ""}`}>Sharable link copied!</div>
    </div>
  );
};

export default ShareButton;