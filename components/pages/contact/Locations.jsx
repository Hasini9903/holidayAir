const locations = [
  {
    id: 1,
    title: "North America",
    address: "1 Dundas St W Suite 2500 Toronto ON M5G 1Z3, Canada",
    contact: "1-800-453-6744 canada@tourz.com",
  },
  {
    id: 2,
    title: "Australia",
    address: "123 Smith St, Melbourne, VIC 3000, Australia",
    contact: "61-800-123-456 australia@tourz.com",
  },
  {
    id: 3,
    title: "Europe",
    address: "45 Rue du Faubourg Saint-Antoine, 75011 Paris, France",
    contact: "33-800-987-654 europe@tourz.com",
  },
  {
    id: 4,
    title: "Asia",
    address: "Tokyo, Japan",
    contact: "81-800-567-890 asia@tourz.com",
  },
];

export default function Locations() {
  return (
    <section className="layout-pt-lg">
      <div className="container">
        <div className="row y-gap-30">
          {locations.map((elm, i) => (
            <div key={i} className="col-lg-3 col-sm-6">
              <div className="px-30 text-center">
                <h3 className="text-30 md:text-24 fw-700">{elm.title}</h3>

                <div className="mt-20 md:mt-10">
                  {elm.address}
                  <br />
                  <br />
                  {elm.contact}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
