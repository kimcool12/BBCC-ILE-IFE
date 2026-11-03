// =====================================================================
// SITE CONTENT — the ONLY file you need to edit for text, links, images.
// Images: put files in /public/images/<folder>/ and write the path
// here like "/images/hero/slide1.jpg". Missing images show a gold
// gradient placeholder, so nothing breaks while you fill things in.
// =====================================================================

const siteContent = {
  churchName: "BBCC",
  logo: "/images/logo.png", // shown beside the church name in the top bar

  // Menu items. "id" must match the section id further down.
  nav: [
    { label: "Home", id: "home" },
    { label: "Announcements", id: "announcements" },
    { label: "Events", id: "events" },
    { label: "Our Leadership", id: "leadership" },
    { label: "Pastor’s Corner", id: "pastor" },
    { label: "Contact us", id: "contact" },
  ],

  // Hero: slogan over a slideshow. Add or remove image paths freely (3 slides now).
  hero: {
    slogan: "RAISING KINGDOM LEADERS ",
    slideInterval: 5000, // milliseconds between slides
    images: [
      "/images/hero/slide1.jpg",
      "/images/hero/slide2.jpg",
      "/images/hero/slide3.jpg",
      "/images/hero/slide4.jpg",
    ],
  },

  about: {
    title: "Our Vision ",
    paragraphs: [
      "RAISING KINGDOM LEADERS TO TRANSFORM ALL NATIONS AND BUILDING KINGDOM INSTITUTIONS THAT TRANSFORM ALL NATIONS.",
    ],
  },

  top1: {
    title: "Gallery",
    // Each category is one container with its own slideshow.
    // Add a category = copy one { ... } block. Add a slide = add one path to "images".
    categories: [
      {
        title: "Category One",
        images: [
          "/images/people/category1-1.jpg",
          "/images/people/category1-2.jpg",
          "/images/people/category1-3.jpg",
        ],
      },
      {
        title: "Category Two",
        images: [
          "/images/people/category2-1.jpg",
          "/images/people/category2-2.jpg",
          "/images/people/category2-3.jpg",
        ],
      },
      {
        title: "Category Three",
        images: [
          "/images/people/category3-1.jpg",
          "/images/people/category3-2.jpg",
          "/images/people/category3-3.jpg",
        ],
      },
    ],
    buttonText: "Join Us",
    buttonLink: "#",
  },

  announcements: {
    title: "Announcements",
    items: [
      {
        title: "Announcement title",
        date: "Date here",
        text: "Write your announcement here.",
      },
      {
        title: "Another announcement",
        date: "Date here",
        text: "Write your announcement here.",
      },
    ],
  },

  events: {
    title: "Catch up on our past monthly and annual events 📅",
    viewAllText: "View all events",
    viewAllLink: "#",
    cards: [
      {
        title: "The Legislation",
        subtitle: "Next Conference 2023",
        image: "/images/events/event1.jpg",
        link: "#",
      },
      {
        title: "Sabaoth",
        subtitle: "The Feast 2023",
        image: "/images/events/event2.jpg",
        link: "#",
      },
      {
        title: "INA",
        subtitle: "Worship meetings",
        image: "/images/events/event3.jpg",
        link: "#",
      },
      {
        title: "Butterflies",
        subtitle: "Love Series",
        image: "/images/events/event4.jpg",
        link: "#",
      },
    ],
  },

  leadership: {
    title: "Our Leadership",
    people: [
      {
        name: "Pastor Name",
        role: "Senior Pastor",
        image: "/images/leadership/leader1.jpg",
      },
      {
        name: "Leader Name",
        role: "Assistant Pastor",
        image: "/images/leadership/leader2.jpg",
      },
      {
        name: "Leader Name",
        role: "Youth Leader",
        image: "/images/leadership/leader3.jpg",
      },
    ],
  },

  pastor: {
    title: "Pastor’s Corner",
    name: "Pastor Name",
    image: "/images/pastor/pastor.jpg",
    message: "Write the pastor’s message here.",
  },

  creed: {
    title: "BBCC CHARGE📜",
    lines: [
      "Kings We Are.",
      "Born of God to Overcome the World.",
      "Trained by Jesus to Lead All Nations.",
      "Led of the Spirit to Manifest Kingdom.",
      "And Equipped by the Church to Fulfill our Destinies.",

      "We are Tutored and Mentored to be Change Agents.",
      "Role Models.",
      "Trail Blazers.",
      "And Pace Setters in the World.",
      "We take the Lead everywhere.",
      "And we take our place in God's agenda.",
      "This is why we live.",

      "We Shine as Lights.",
      "We Preserve as Salt.",
      "We Influence as Priests.",
      "We follow as Sheep.",
      "We work as a Team.",
      "We win as Victors.",
      "We love as brothers.",
      "And We Burn as Fire.",

      "We are BBCC.",
      "Raising Kingdom Leaders to Transform all Nations.",
      "Glorreeyyy!!!",
    ],
  },

  contact: {
    title: "Contact us",
    email: "info@yourchurch.org",
    phone: "+234 000 000 0000",
    address: "Your church address here",
  },

  // platform must be: instagram | x | youtube | facebook | tiktok
  socials: [
    { platform: "instagram", url: "#" },
    { platform: "x", url: "#" },
    { platform: "youtube", url: "" },
  ],
};

export default siteContent;
