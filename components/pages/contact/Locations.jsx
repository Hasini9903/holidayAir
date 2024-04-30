const locations = [
  {
    id: 1,
    title: "United Kingdom ",
    address: "130 High Street Barnet EN5 5XQ, United Kingdom ",
    contact1: "  +44 (0) 208 44 00 770",
    contact2: " +44 7534433111    ",
    Mail: " info@holidayair.com  ",
  },
  
  {
    id: 4,
    title: "Asia",
    address: "Tokyo, Japan",
    contact1: "81-800-567-890 ",
    Mail: "asia@tourz.com  ",
  },
];

export default function Locations() {
  return (
    <section className="layout-pt-lg">
      <div className="container">
        <div className="row y-gap-30">
          {locations.map((elm, i) => (
            <div key={i} className="col-lg-6 col-sm-6">
              <div className="px-30 text-center">
                <h3 className="text-30 md:text-24 fw-700">{elm.title}</h3>

                <div className="mt-20 md:mt-10">
                  {elm.address}
                  <br />
                  {elm.contact1}
                  <br />
                  {elm.contact2}
                  <br />
                  {elm.Mail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
