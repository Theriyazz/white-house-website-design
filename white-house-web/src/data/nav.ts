export type MenuLink = { label: string; href?: string; tag?: string };
export type MenuColumn = { title: string; links: MenuLink[] };
export type MenuTile = { slot: string; kicker: string; title: string; href: string; tone: string };
export type MenuItem = {
  id: string;
  label: string;
  href: string;
  columns?: MenuColumn[];
  tiles?: MenuTile[];
};

const C = "#collection";

export const menu: MenuItem[] = [
  {
    id: "men",
    label: "Men",
    href: C,
    columns: [
      {
        title: "Shop by product",
        links: [
          { label: "Sherwani" },
          { label: "Indo-Western" },
          { label: "Jodhpuri Suit" },
          { label: "Kurta Set" },
          { label: "Kurta Jacket Set" },
          { label: "Nehru Jacket" },
          { label: "Blazer" },
        ],
      },
      {
        title: "Shop by occasion",
        links: [
          { label: "Wedding", href: "#occasions" },
          { label: "Reception", href: "#occasions" },
          { label: "Sangeet & Garba", href: "#occasions" },
          { label: "Engagement", href: "#occasions" },
          { label: "Navratri", href: "#occasions", tag: "Season" },
          { label: "Diwali & Festive", href: "#occasions" },
        ],
      },
      {
        title: "Accessories",
        links: [
          { label: "Safa" },
          { label: "Mojdi" },
          { label: "Mala" },
          { label: "Brooch" },
          { label: "Dupatta & Stole" },
          { label: "Pocket Square" },
        ],
      },
    ],
    tiles: [
      { slot: "menu-groom", kicker: "I'm the", title: "Groom", href: "#groom", tone: "#5a3a1e" },
      { slot: "menu-guest", kicker: "I'm attending", title: "A Wedding", href: C, tone: "#8a4a22" },
    ],
  },
  {
    id: "wedding",
    label: "Wedding",
    href: "#occasions",
    columns: [
      {
        title: "By function",
        links: [
          { label: "Pithi · પીઠી", href: "#occasions" },
          { label: "Mehendi · મહેંદી", href: "#occasions" },
          { label: "Sangeet & Garba · સંગીત", href: "#occasions" },
          { label: "Lagna · લગ્ન", href: "#occasions" },
          { label: "Reception · રિસેપ્શન", href: "#occasions" },
        ],
      },
      {
        title: "By role",
        links: [
          { label: "The Groom", href: "#groom" },
          { label: "Father of the Groom", href: "#party" },
          { label: "Brothers & Friends", href: "#party" },
          { label: "Little Ones", href: "#party" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Wedding-party coordination", href: "#party", tag: "New" },
          { label: "Alteration & fitting", href: "#tailoring" },
          { label: "Book a fitting", href: "#visit" },
        ],
      },
    ],
    tiles: [
      { slot: "menu-party", kicker: "Dress the", title: "Whole Party", href: "#party", tone: "#6b5330" },
      { slot: "menu-groom", kicker: "The", title: "Groom's Edit", href: "#groom", tone: "#4A0E17" },
    ],
  },
  {
    id: "family",
    label: "Women & Kids",
    href: C,
    columns: [
      {
        title: "Women",
        links: [{ label: "Sarees" }, { label: "Chaniya Choli" }, { label: "Suit Sets" }],
      },
      {
        title: "Kids",
        links: [
          { label: "Kurta Sets" },
          { label: "Mini Sherwani" },
          { label: "Jodhpuri for Boys" },
          { label: "Girls' Festive" },
        ],
      },
      {
        title: "Together",
        links: [
          { label: "Family coordinated sets", href: "#party" },
          { label: "Father & son", href: "#party" },
        ],
      },
    ],
    tiles: [
      { slot: "menu-family", kicker: "Festive", title: "Family Sets", href: "#party", tone: "#7a2a2a" },
    ],
  },
  {
    id: "tailoring",
    label: "Suits & Tailoring",
    href: "#tailoring",
    columns: [
      {
        title: "Suits",
        links: [
          { label: "Made-to-measure suits" },
          { label: "Ready suits" },
          { label: "Tuxedos" },
          { label: "Blazers & Waistcoats" },
        ],
      },
      {
        title: "Our tailoring",
        links: [
          { label: "The cloth", href: "#tailoring" },
          { label: "The hand", href: "#tailoring" },
          { label: "The fit", href: "#tailoring" },
        ],
      },
      {
        title: "Plan your visit",
        links: [
          { label: "Book a fitting", href: "#visit" },
          { label: "Alteration promise", href: "#tailoring" },
          { label: "Raopura & Alkapuri", href: "#visit" },
        ],
      },
    ],
    tiles: [
      { slot: "menu-tailoring", kicker: "Fitted by", title: "Master Tailors", href: "#tailoring", tone: "#2b2620" },
    ],
  },
  { id: "story", label: "Our Story", href: "#story" },
];

export const popularSearches = [
  "Sherwani for groom",
  "Jodhpuri suit",
  "Kurta jacket set",
  "Navratri kurta",
  "Made-to-measure suit",
  "Kids kurta",
];
