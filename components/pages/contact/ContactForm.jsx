"use client";

export default function ContactForm() {
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <h2 className="text-30 fw-700 text-center mb-30">
              Leave us your info
            </h2>

            <div className="contactForm">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="row y-gap-30"
              >
                <div className="col-md-6">
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="col-md-6">
                  <input type="text" placeholder="Phone" required />
                </div>
                <div className="col-12">
                  <input type="text" placeholder="Email" required />
                </div>
                <div className="col-12">
                  <textarea placeholder="Message" rows="6" required></textarea>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="button -md -dark-1 bg-accent-1 text-white col-12"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
