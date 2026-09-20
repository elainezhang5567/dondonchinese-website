/**
 * Don Don Chinese Restaurant — site configuration
 *
 * Everything restaurant-specific lives here so it can be updated without
 * touching components. Change a value once and every section picks it up.
 */

/**
 * ORDER_URL — the ONE place to point all "Order Online" buttons.
 * Don Don already has an ordering system; drop its URL in here.
 * Every CTA (navbar, hero, final section) reads this constant.
 */
export const ORDER_URL = "https://www.dondonchineserestaurant.com/menu";

/** Set true if ORDER_URL is on a different domain and should open in a new tab. */
export const ORDER_OPENS_IN_NEW_TAB = false;

export const site = {
  name: "Don Don",
  tagline: "Chinese Restaurant",
  fullName: "Don Don Chinese Restaurant",
  description:
    "Fresh ingredients, made-to-order Chinese favorites, and the dishes you love — Szechuan, Hunan & NY style — in Carnegie, PA. Order online for pickup.",
  url: "https://www.dondonchineserestaurant.com",

  address: {
    street: "146 E Main St",
    city: "Carnegie",
    state: "PA",
    zip: "15106",
    /** Short display string used in the hero and footer */
    display: "146 E Main St, Carnegie, PA 15106",
    mapsUrl: "https://maps.google.com/?q=146+E+Main+St,+Carnegie,+PA+15106",
  },

  phone: {
    display: "(412) 279-5567",
    /** tel: link format */
    href: "tel:+14122795567",
  },

  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  /** Main navigation. Anchor links work on the single-page home; swap for routes later. */
  nav: [
    { label: "Home", href: "#top" },
    { label: "About Us", href: "#story" },
    { label: "Menu", href: "#menu" },
    { label: "Catering", href: "#catering" },
    { label: "Contact", href: "#contact" },
  ],

  /** Link used by "Explore Menu" / "View Full Menu" buttons */
  menuUrl: "https://www.dondonchineserestaurant.com/menu",
  /** "Our Story" copy. Keep the lead to one line; facts are short labels. */
  story: {
    lead: "A family-owned kitchen, and a Carnegie favorite for years.",
    body:
      "Our family cooks every dish the moment you order it — fresh ingredients, made-to-order Szechuan, Hunan and New York–style favorites, and a warm welcome whether you're grabbing takeout or catering a celebration.",
    facts: ["Family-owned", "Made to order", "Carnegie, PA"],
  },
} as const;

/**
 * Menu discovery categories. Images live in /public/images.
 * Replace the placeholder photos with real Don Don photography (square, ≥ 600px).
 */
export const menuCategories = [
  { name: "Appetizers", image: "/images/cat-appetizers.jpg", href: `${site.menuUrl}#appetizers` },
  { name: "Soups", image: "/images/cat-soups.jpg", href: `${site.menuUrl}#soups` },
  { name: "Chicken", image: "/images/cat-chicken.jpg", href: `${site.menuUrl}#chicken` },
  { name: "Beef", image: "/images/cat-beef.jpg", href: `${site.menuUrl}#beef` },
  { name: "Noodles", image: "/images/cat-noodles.jpg", href: `${site.menuUrl}#noodles` },
  { name: "Fried Rice", image: "/images/cat-fried-rice.jpg", href: `${site.menuUrl}#fried-rice` },
];

/**
 * Customer testimonials — real Google reviews, quoted verbatim (an ellipsis marks
 * a trimmed passage). Update here as new reviews come in. The first card in the run
 * is the first entry here. Names are shown as first name + initial for a little privacy.
 */
/**
 * Ratings shown beside the reviews. `logo` is an optional image in /public/images/logos
 * (official DoorDash / Uber Eats marks supplied by the owner, cut out for a dark background);
 * when null the platform name is shown as text. Update `url` to the real listing links.
 */
export const ratingPlatforms = [
  {
    name: "Google",
    rating: "4.8",
    url: "https://www.google.com/maps/search/?api=1&query=Don+Don+Chinese+Restaurant+146+E+Main+St+Carnegie+PA",
    logo: "/images/logos/google.png" as string | null,
    /** The Google mark is an icon only, so the name is shown beside it. */
    showName: true,
  },
  {
    name: "DoorDash",
    rating: "4.8",
    url: "https://www.doordash.com/",
    logo: "/images/logos/doordash.png" as string | null,
    showName: false,
  },
  {
    name: "Uber Eats",
    rating: "4.7",
    url: "https://www.ubereats.com/",
    logo: "/images/logos/ubereats.png" as string | null, // light-on-dark variant
    showName: false,
  },
];

/** Where "Read all reviews" points (the Google listing). */
export const googleReviewsUrl = ratingPlatforms[0].url;

export const reviews = [
  {
    name: "Ian J.",
    rating: 5,
    when: "September 2026",
    text: "Don Dons is the BEST Chinese food in the South Hills & maybe Pittsburgh - hands down! … Please give this place a try! You can't go wrong with Don Dons! 6 stars outta 5!!!!",
  },
  {
    name: "Jason S.",
    rating: 5,
    when: "May 2026",
    text: "The chef was so kind and food was amazing!! Very reasonable prices too. The chicken was the most tender I've ever had and I love that the food was actually spicy.",
  },
  {
    name: "Brady V.",
    rating: 5,
    when: "August 2026",
    text: "Great sesame chicken for a great price and amazing service! I loved the decor.",
  },
  {
    name: "Cicion",
    rating: 5,
    when: "August 2026",
    text: "My go to. Owners are great. Cindy and Sam. Cheap but amazing",
  },
  {
    name: "Carlos P.",
    rating: 5,
    when: "June 2026",
    text: "Great place",
  },
];

/** Hero / section photography. Swap paths here to replace photos. */
export const images = {
  hero: {
    src: "/images/hero-general-tso.jpg",
    alt: "Glossy General Tso's chicken in a black bowl, topped with sesame and scallions, lifted with chopsticks",
  },
  /**
   * "Our Story" mosaic — real family photos. Order: [0] top-left landscape,
   * [1] tall photo on the right, [2] bottom-left landscape.
   */
  story: [
    { src: "/images/family-kids.jpg", alt: "The owners' two children posing outside, arms crossed" },
    { src: "/images/family-harbor.jpg", alt: "The family at the harbor front with the city skyline behind" },
    { src: "/images/family-waterfall.jpg", alt: "The family in front of a waterfall" },
  ],
  cta: {
    src: "/images/cta-dumplings.jpg",
    alt: "Pan-fried pork dumplings with golden crispy bottoms on a dark plate",
  },
  og: "/images/og-image.jpg",
};
