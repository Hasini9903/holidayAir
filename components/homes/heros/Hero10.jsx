"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const tags = [
  {
    id: 1,
    iconClass: "icon-bank text-26",
    label: "Culture",
  },
  {
    id: 2,
    iconClass: "icon-menu-3 text-26",
    label: "Food",
  },
  {
    id: 3,
    iconClass: "icon-mountain text-26",
    label: "Nature",
  },
  {
    id: 4,
    iconClass: "icon-hot-air-balloon-2 text-26",
    label: "Adventure",
  },
];
export default function Hero10() {
  const router = useRouter();
  return (
    <section className="hero -type-10">
      <div className="hero__bg">
        <Image
          width={1920}
          height={862}
          src="/img/hero/10/1.jpg"
          alt="background"
        />
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-9 col-lg-10">
            <div className="hero__content">
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="hero__title text-white"
              >
                Choose a Country For Your <br className="lg:d-none" />
                Next Adventure?
              </h1>

              <div
                data-aos="fade-up"
                data-aos-delay="250"
                className="hero__text text-white mt-20"
              >
                From local escapes to far-flung adventures
              </div>

              <div className="hero__search">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0001 4.29932C7.95277 4.29932 6.28711 5.96498 6.28711 8.01232C6.28711 10.0597 7.95277 11.7253 10.0001 11.7253C12.0475 11.7253 13.7131 10.0597 13.7131 8.01232C13.7131 5.96498 12.0475 4.29932 10.0001 4.29932ZM10.0001 10.162C8.8148 10.162 7.85047 9.19764 7.85047 8.01232C7.85047 6.82701 8.8148 5.86268 10.0001 5.86268C11.1854 5.86268 12.1498 6.82701 12.1498 8.01232C12.1498 9.19764 11.1854 10.162 10.0001 10.162Z"
                    fill="#05073C"
                  />
                  <path
                    d="M10.0006 0C5.58258 0 1.98828 3.59434 1.98828 8.01231V8.23379C1.98828 10.4682 3.2693 13.0719 5.79586 15.9726C7.62742 18.0754 9.4334 19.5416 9.50934 19.603L10.0006 20L10.4918 19.6031C10.5678 19.5417 12.3738 18.0754 14.2053 15.9726C16.7318 13.0719 18.0129 10.4682 18.0129 8.23383V8.01234C18.0129 3.59434 14.4186 0 10.0006 0ZM16.4495 8.23383C16.4495 12.0098 11.5843 16.5807 10.0006 17.9683C8.41648 16.5803 3.55164 12.0095 3.55164 8.23383V8.01234C3.55164 4.45641 6.44465 1.5634 10.0006 1.5634C13.5565 1.5634 16.4495 4.45641 16.4495 8.01234V8.23383Z"
                    fill="#05073C"
                  />
                </svg>

                <input type="text" placeholder="Search destinations" />

                <button onClick={() => router.push("/tour-list-5")}>
                  <i className="icon-search"></i>
                </button>
              </div>

              <div data-aos="fade-up" data-aos-delay="300" className="heroTags">
                <div className="heroTags__title text-white">
                  Or browse the selected type
                </div>

                <div className="heroTags__tags">
                  {tags.map((elm, i) => (
                    <div key={i}>
                      <button>
                        <i className={` ${elm.iconClass} text-26"`}></i>
                        <span>{elm.label}</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
