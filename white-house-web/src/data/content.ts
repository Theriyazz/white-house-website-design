// Demo content. Prices, stories and reviews are illustrative placeholders
// until the client supplies real ones.
//
// Voice: a family shop talking across the counter. Every section opens with a
// Gujarati line (the feeling) and an English headline (the meaning), so the
// page reads for parents, grooms, guests and relatives abroad alike.

export const heroSlides = [
  {
    id: "groom",
    slot: "hero-groom",
    tone: "#3a2413",
    role: "Shop as a Groom",
    gu: "વરરાજા પધારે છે",
    lines: ["Your Father Ties the Safa.", "We Do the Rest."],
    sub: "Sherwanis, Jodhpuris and Indo-western, measured and fitted by the tailors Vadodara's grooms have trusted since 1993.",
    cta: "See the Groom Collection",
    href: "#groom",
    alt: "A father tying a safa on his son, the groom, while his mother watches from the doorway",
  },
  {
    id: "guest",
    slot: "hero-guest",
    tone: "#5b3a22",
    role: "Shop as a Wedding Guest",
    gu: "જાનૈયાનો ઠાઠ",
    lines: ["You Dance in Your Brother's", "Jaan Only Once."],
    sub: "Kurta sets, jackets and bandhgalas for every function, Pithi to Reception, with room left over for the chandlo.",
    cta: "Shop by Occasion",
    href: "#occasions",
    alt: "Friends dancing at the front of a baraat with family behind them",
  },
  {
    id: "festive",
    slot: "hero-festive",
    tone: "#4A0E17",
    role: "Shop for Festive",
    gu: "તહેવારનો રંગ",
    lines: ["Nine Nights of Garba.", "One Morning of Saal Mubarak."],
    sub: "Mirror-work kurtas for the garba ground, silks for Diwali, and matching sets for the little ones.",
    cta: "See the Collection",
    href: "#collection",
    alt: "A family of five in festive clothes on haveli steps at Diwali",
  },
] as const;

// Gujarati names follow the wording families print on a kankotri.
export const occasions = [
  { slot: "occasion-pithi", name: "Pithi", gu: "પીઠી", note: "Kurta sets from ₹1,999", tone: "#b8862b" },
  { slot: "occasion-mehendi", name: "Mehendi", gu: "મહેંદી", note: "Printed jackets from ₹2,999", tone: "#2f5d46" },
  { slot: "occasion-sangeet", name: "Sangeet & Garba", gu: "સંગીત સંધ્યા", note: "Mirror-work from ₹2,499", tone: "#2a2f5e" },
  { slot: "occasion-lagna", name: "Lagna", gu: "હસ્તમેળાપ", note: "Sherwanis from ₹14,999", tone: "#6d1420" },
  { slot: "occasion-reception", name: "Reception", gu: "સત્કાર સમારંભ", note: "Indo-western from ₹7,499", tone: "#2b2a2c" },
] as const;

export const groomMinis = [
  { slot: "groom-sherwani", name: "Sherwani", price: "₹14,999" },
  { slot: "groom-jodhpuri", name: "Jodhpuri", price: "₹8,999" },
  { slot: "groom-indowestern", name: "Indo-Western", price: "₹7,499" },
] as const;

export const partyRoles = [
  { slot: "party-groom", role: "The Groom", gu: "વરરાજા", piece: "Sherwani & safa", price: "₹14,999" },
  { slot: "party-father", role: "Father of the Groom", gu: "પપ્પા", piece: "Silk bandhgala", price: "₹8,999" },
  { slot: "party-brothers", role: "Brothers & Friends", gu: "ભાઈ-ભાઈબંધ", piece: "Kurta jacket sets", price: "₹3,999" },
  { slot: "party-kids", role: "Little Ones", gu: "ટાબરિયાં", piece: "Mini kurta sets", price: "₹1,999" },
] as const;

export const partySteps = [
  { n: "01", title: "Send the date and the headcount", body: "One WhatsApp message: your functions, and who needs dressing." },
  { n: "02", title: "We lay out the colours", body: "Coordinated options for every man in the family, inside your budget." },
  { n: "03", title: "One visit, everyone measured", body: "Come together once. Alterations happen in the shop before pickup." },
] as const;

export type Product = {
  id: string;
  name: string;
  price: string;
  category: "Groom" | "Wedding Guest" | "Festive" | "Suits" | "Kids";
  badge?: "Bestseller" | "New";
};

export const productTabs = ["All", "Groom", "Wedding Guest", "Festive", "Suits", "Kids"] as const;

export const products: Product[] = [
  { id: "01", name: "Ivory Zari Sherwani", price: "₹14,999", category: "Groom", badge: "Bestseller" },
  { id: "02", name: "Maroon Velvet Sherwani", price: "₹18,999", category: "Groom" },
  { id: "03", name: "Midnight Jodhpuri Suit", price: "₹8,999", category: "Wedding Guest", badge: "New" },
  { id: "04", name: "Sage Indo-Western Set", price: "₹7,499", category: "Wedding Guest" },
  { id: "05", name: "Silk Kurta & Nehru Jacket", price: "₹3,999", category: "Festive", badge: "Bestseller" },
  { id: "06", name: "Mirror-Work Navratri Kurta", price: "₹2,499", category: "Festive", badge: "New" },
  { id: "07", name: "Made-to-Measure Three-Piece", price: "₹11,999", category: "Suits" },
  { id: "08", name: "Kids Kurta Jacket Set", price: "₹1,999", category: "Kids" },
];

export const heritageCopy =
  "For three decades, families from across Vadodara have walked up to Raopura Tower before every wedding. Fathers who stood here as grooms now stand behind their sons, telling the tailor exactly how the shoulder should sit. The cloth has changed. The cuts have changed. The promise has not: it will fit on the day.";

export const stories = [
  { slot: "story-01", names: "Harsh", detail: "Vadodara · December 2025", wore: "Ivory sherwani & safa" },
  { slot: "story-02", names: "Parth", detail: "Anand · February 2026", wore: "Ivory sherwani, maroon dupatta" },
  { slot: "story-03", names: "The Shah Family", detail: "Bharuch · January 2026", wore: "Ivory sherwani, chosen with family" },
  { slot: "story-04", names: "Meet & his brothers", detail: "Vadodara · November 2025", wore: "Coordinated sherwanis" },
] as const;

export const categories = [
  { slot: "category-groom", name: "Groom Wear", href: "#groom" },
  { slot: "category-suits", name: "Suits & Blazers", href: "#tailoring" },
  { slot: "category-kurta", name: "Kurtas & Jackets", href: "#collection" },
  { slot: "category-family", name: "Father & Son", href: "#party" },
  { slot: "category-accessories", name: "Accessories", href: "#collection" },
] as const;

export const craft = [
  {
    slot: "craft-cloth",
    n: "01",
    gu: "કાપડ",
    title: "The Cloth",
    body: "Silks from Varanasi, brocades and suiting through Surat. Unroll the bolt yourself, hold it to the daylight, feel the weight. The colour you choose is the colour you wear.",
    point: "Touch every cloth before you decide",
  },
  {
    slot: "craft-hand",
    n: "02",
    gu: "કારીગરી",
    title: "The Hand",
    body: "Zari, resham and mirror work by karigars who have sat at the frame since they were boys. Look closely. Every motif is placed by hand, never printed.",
    point: "Placed by hand, never printed",
  },
  {
    slot: "craft-fit",
    n: "03",
    gu: "ફિટિંગ",
    title: "The Fit",
    body: "Our own tailors take your measure, call you back for a trial, and alter it in the shop. If it does not sit right, it does not leave.",
    point: "Altered in the shop before pickup",
  },
] as const;

// Sample reviews for layout only. Replace with real, permitted quotes.
export const testimonials = [
  {
    quote: "My son looked like a prince, and I did not have to argue about the price. What more does a mother want?",
    name: "Sample review",
    occasion: "Mother of the groom · Vadodara",
    source: "Google Reviews",
  },
  {
    quote: "We drove in from Anand with five people and one afternoon. Everyone was measured, nobody was rushed, and we were home for dinner.",
    name: "Sample review",
    occasion: "Father of the groom · Anand",
    source: "JustDial",
  },
  {
    quote: "I landed twelve days before the wedding. Three outfits were stitched and altered before the sangeet. It felt like I had never left.",
    name: "Sample review",
    occasion: "Cousin of the groom · New Jersey",
    source: "Google Reviews",
  },
] as const;

// "A word from us to you": one short note per kind of visitor, each with the
// action that person is most likely to take (grooms message, parents call).
export const audiences = [
  {
    id: "groom",
    gu: "વરરાજા",
    label: "I'm the groom",
    guLine: "આ દિવસ ફરી નહીં આવે.",
    note: "One morning soon, everyone you love will turn to watch you walk in. Come with a photo, a budget and your date. We will make sure the man they see is the one you pictured.",
    cta: "Book a Fitting",
    action: "whatsapp",
    message: "I'm the groom. My wedding is on ___. I'd like to book a fitting.",
  },
  {
    id: "parents",
    gu: "મમ્મી-પપ્પા",
    label: "We're the parents",
    guLine: "વર્ષોથી જેની રાહ જોઈ, એ દિવસ આવી ગયો.",
    note: "You have pictured this day since he was a boy. Bring everyone along. We will look after each of them, tell you the price before the cloth is cut, and never hurry you.",
    cta: "Call the Shop",
    action: "call",
    message: "",
  },
  {
    id: "brothers",
    gu: "ભાઈ-ભાઈબંધ",
    label: "Brother, cousin or friend",
    guLine: "ભાઈના લગ્નમાં વટ તો પડવો જ જોઈએ.",
    note: "Four functions, four hundred photos, one budget. Tell us what you can spend and we will get you from Pithi to Reception without repeating a look.",
    cta: "Show Me Options",
    action: "whatsapp",
    message: "I need outfits for ___ wedding functions. My budget is around ₹___.",
  },
  {
    id: "outstation",
    gu: "બહારગામથી",
    label: "Coming from out of town",
    guLine: "તમારો ધક્કો નહીં પડે.",
    note: "You are driving an hour or more to reach us. Message first with sizes and budget. We will keep options ready, so one visit is enough and nobody goes home empty-handed.",
    cta: "Tell Us Before You Travel",
    action: "whatsapp",
    message: "We are coming from ___ on ___ with ___ people. We need: ___. Budget: ₹___.",
  },
  {
    id: "nri",
    gu: "પરદેશથી",
    label: "Flying in for the wedding",
    guLine: "દેશ આવો, બધું તૈયાર હશે.",
    note: "Short trip, long list. Send your dates and measurements before you fly. We plan your trials around your landing, so the clothes are done and your time goes to family.",
    cta: "Send My Dates",
    action: "whatsapp",
    message: "I land in Vadodara on ___. The wedding is on ___. I need ___ outfits.",
  },
] as const;
