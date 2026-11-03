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
    { label: "Events", id: "events" },
    { label: "Contact us", id: "contact" },
    // { label: "Announcements", id: "announcements" },
    // { label: "Our Leadership", id: "leadership" },
    // { label: "Pastor’s Corner", id: "pastor" },
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
    logo: "/images/logo.png",
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
        // title: "Category One",
        images: [
          // "/images/people/dovotion/1.jpg",
          // "/images/people/dovotion/2.jpg",
          "/images/people/dovotion/3.jpg",
          "/images/people/dovotion/4.jpg",
          "/images/people/dovotion/5.jpg",
          "/images/people/dovotion/6.jpg",
          "/images/people/dovotion/7.jpg",
          "/images/people/dovotion/8.jpg",
          "/images/people/dovotion/9.jpg",
          "/images/people/dovotion/10.jpg",
          "/images/people/dovotion/11.png",
          "/images/people/dovotion/12.png",
        ],
      },
      {
        // title: "Category Two",
        images: [
          "/images/people/community/1.jpg",
          // "/images/people/community/2.jpg",
          // "/images/people/community/3.jpg",
          // "/images/people/community/4.jpg",
          "/images/people/community/5.jpg",
          "/images/people/community/6.jpg",
          "/images/people/community/7.jpg",
          // "/images/people/community/8.png",
          // "/images/people/community/9.png",
          // "/images/people/community/10.jpg",
          "/images/people/community/11.png",
          "/images/people/community/12.png",
          "/images/people/community/13.png",
          "/images/people/community/14.png",
          "/images/people/community/15.png",
          "/images/people/community/16.png",
        ],
      },
      {
        // title: "Category Three",
        images: [
          // "/images/people/joy/1.jpg",
          "/images/people/joy/2.png",
          "/images/people/joy/3.jpg",
          "/images/people/joy/4.png",
          "/images/people/joy/5.jpg",
          // "/images/people/joy/6.jpg",
          "/images/people/joy/7.png",
          "/images/people/joy/8.jpg",
          "/images/people/joy/9.jpg",
          // "/images/people/joy/10.jpg",
          "/images/people/joy/11.png",
          // "/images/people/joy/12.png",
          "/images/people/joy/13.png",
          "/images/people/joy/14.png",
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
        name: "Min.Faith Akinyode",
        role: "Residence Pastor",
        image: "/images/leadership/leader1.jpg",
      },
      {
        name: "Min.Temitope Adebayo",
        role: "Assistant Residence Pastor",
        image: "/images/leadership/leader2.png",
      },
      {
        name: "Mrs.Oyindamola",
        role: "General Secretary ",
        image: "/images/leadership/leader3.jpg",
      },
    ],
  },

  pastor: {
    title: "Pastor’s Corner",
    name: "Min.Faith Akinyode",
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
    email: "believersbanquetileife@gmail.com",
    phone: "+234 811 334 6664",
    address:
      " FirstWord Resource Centre, Behind Banwill Restaurant, Asherifa, Ile Ife.",
  },

  // platform must be: instagram | x | youtube | facebook | tiktok
  socials: [
    { platform: "instagram", url: "https://www.instagram.com/bbccileife/" },
    {
      platform: "tiktok",
      url: "https://www.tiktok.com/@bbccileife?is_from_webapp=1&sender_device=pc",
    },
    // { platform: "youtube", url: "" },
  ],
};

export default siteContent;
