const phoneNumber = "+923056256473";
const message = "Hello";
// Construct  the WhatsApp URL
const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;

export{whatsappURL}