// src/utils/communication.js

export const callNow = (phone) => {
    window.location.href = `tel:${phone}`;
  };
  
  export const openWhatsApp = (phone, message) => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };
  