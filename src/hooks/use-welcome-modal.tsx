import { useState, useEffect } from "react";

export const useWelcomeModal = () => {
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
      }
    };

    // Listen for any user interaction
    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('mousemove', handleInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
    };
  }, [hasInteracted]);

  useEffect(() => {
    if (!hasInteracted) return;

    // Check if user has already seen the welcome modal this session
    const hasSeenWelcomeModal = sessionStorage.getItem("welcomeKwstasModalSeen");
    if (!hasSeenWelcomeModal) {
      const timer = setTimeout(() => {
        setShowWelcomeModal(true);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [hasInteracted]);

  const handleWelcomeClose = () => {
    setShowWelcomeModal(false);
  };

  return {
    showWelcomeModal,
    handleWelcomeClose,
  };
};