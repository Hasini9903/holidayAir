import { weatherData } from "@/data/weather";
import MyComponent from "./Map";

export default function Information() {
  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="text-30 md:text-24">
              What to know before visiting Phuket
            </h2>
          </div>
        </div>

        <div className="row y-gap-20 pt-30">
          <div className="col-lg-8">
            <p>
              Phuket is a shining example of a metropolis at the highest peak of
              modernity and boasts an economy and cultural diversity that’s the
              envy of other global superpowers.
              <br />
              <br />
              Take the opportunity to acquaint yourself with its fascinating
              history chronicled by institutions like the British Museum as well
              as see how far it has come by simply riding the Tube and passing
              by celebrated landmarks like Buckingham Palace, Westminster Abbey,
              and marvels like Big Ben, the London Eye, and the Tower Bridge.
              <br />
              <br />
              You can also immerse yourself in its ever-evolving and impactful
              culture by visiting places like the National Gallery, the Tate
              Modern, West End, Abbey Road, the Royal Albert Hall, Oxford Street
              and the Westfield Shopping Centers, and areas referenced and seen
              in literature and film.
            </p>
          </div>

          <div className="col-lg-4">
            <div className="mapTourSingle2">
              <div className="map__content rounded-12 js-map-single">
                <MyComponent />
              </div>

              <div className="mapTourSingle2__button">
                <button className="button -md -dark-1 bg-white fw-500 col-12">
                  <i className="icon-pin text-20 mr-10"></i>
                  See popular activities on the map
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="line mt-40 mb-40"></div>

        <div className="row y-gap-20">
          <div className="col-12">
            <h3 className="text-20 fw-500">Local weather</h3>
          </div>

          {weatherData.map((elm, i) => (
            <div key={i} className="col-lg-3 col-6">
              <div>{elm.period}</div>

              <div className="d-flex text-20 fw-500 pt-5">
                <span>{elm.high}</span>
                <span className="ml-20">{elm.low}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="line mt-40 mb-40"></div>

        <div className="row y-gap-20">
          <div className="col-12">
            <h3 className="text-20 fw-500">General info</h3>
          </div>

          <div className="col-lg-3 col-6">
            <div>Time Zone</div>
            <div className="fw-500">GMT +00:00</div>
            <div>3 hours behind</div>
          </div>

          <div className="col-lg-3 col-6">
            <div>Currency</div>
            <div className="fw-500">British Pound</div>
            <div>1USD = 0.76GBP</div>
          </div>

          <div className="col-lg-6 col-6">
            <div>Best time to visit</div>
            <div className="row x-gap-20 y-gap-20">
              <div className="col-auto">
                <div className="fw-500">JUN</div>
                <div>The Queen's Birthday</div>
              </div>
              <div className="col-auto">
                <div className="fw-500">DEC</div>
                <div>A colorful Christmas season</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
