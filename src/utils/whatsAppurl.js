const phoneNumber = "+923120543653";
const message = "Hello";
// Construct  the WhatsApp URL
const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
  message
)}`;

export{whatsappURL}