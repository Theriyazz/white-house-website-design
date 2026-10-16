// Single source of truth for store facts used across the demo.
// Everything marked UNVERIFIED must be confirmed with the client before launch
// (see research/White-House-User-Research.md, section 9).

export const site = {
  name: "White House",
  nameGu: "વ્હાઈટ હાઉસ",
  tagline: "Tradition Looks Good on You",
  founded: 1993, // UNVERIFIED
  years: 33, // UNVERIFIED
  rating: 4.0, // UNVERIFIED
  reviews: 282, // UNVERIFIED
  phoneDisplay: "+91 99740 57575",
  phoneHref: "tel:+919974057575",
  whatsappNumber: "919974057575",
  hours: "Open daily · 10:00 AM to 9:00 PM", // UNVERIFIED
  instagram: "https://www.instagram.com/whitehouseshop_vadodara/",
  facebook: "https://www.facebook.com/whitehouseshopvadodara/",
  outlets: [
    {
      id: "raopura",
      name: "Raopura",
      nameGu: "રાવપુરા",
      landmark: "Near Raopura Tower",
      address: "Main Road, Raopura, Vadodara 390001",
      note: "Old-city flagship. Two-wheeler parking outside; cars park at Nyay Mandir.",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=White+House+Raopura+Tower+Vadodara",
    },
    {
      id: "alkapuri",
      name: "Alkapuri",
      nameGu: "અલકાપુરી",
      landmark: "Alkapuri outlet",
      address: "Alkapuri, Vadodara (address to be confirmed)", // UNVERIFIED
      note: "Easier car parking. Ideal for family fittings.",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=White+House+Alkapuri+Vadodara",
    },
  ],
} as const;

const GREETING = "નમસ્તે White House 🙏";

/** WhatsApp chat with the store, pre-filled. */
export function whatsappLink(message = "I'd like to know more about your wedding collection.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(`${GREETING} ${message}`)}`;
}

/** WhatsApp share sheet (no recipient) so a shopper can forward an item to family. */
export function shareLink(productName: string, price: string) {
  const text = `જુઓ તો: ${productName}, starting at ${price}, at White House, Raopura. કેવું લાગે છે?`;
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}
