const sections = [
  
  {
    title: "For Travellers",
    links: [
      { id: 9, text: "Flights", href: "#" },
      { id: 10, text: "Hotels", href: "#" },
      { id: 11, text: "Flights + Hotels", href: "#" },
      { id: 12, text: "Attraction", href: "#" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { id: 1, text: "About Us", href: "/about" },
      { id: 3, text: "Contact Us", href: "/contact" },
      // { id: 4, text: "Travel Guides", href: "#" },
      { id: 5, text: " Privacy Policy", href: "#" },
      { id: 6, text: "Terms & Conditions", href: "#" },
      { id: 7, text: "FAQ", href: "#" },
      { id: 8, text: "Payment Options", href: "#" },
    ],
  },
];

export default function FooterLinks() {
  return (
    <>
      {sections.map((elm, i) => (
        <div key={i} className="col-lg-3 col-6">
          <h4 className="text-20 fw-500">{elm.title}</h4>

          <div className="y-gap-10 mt-20">
            {elm.links.map((elm2, i2) => (
              <a key={i2} className="d-block fw-500" href={elm2.href}>
                {elm2.text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
