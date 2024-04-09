"use client";

import { useEffect, useState } from "react";

import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";
import Menu from "../components/Menu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Header9() {
  const router = useRouter();
  const pageNavigate = (pageName) => {
    router.push(pageName);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [addClass, setAddClass] = useState(false);

  // Add a class to the element when scrolled 50px
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`header -type-10 js-header  ${addClass ? "-is-sticky" : ""}`}
      >
        <div className="header__container">
          <div className="headerMobile__left">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn js-menu-button"
            >
              <i className="icon-main-menu text-white"></i>
            </button>
          </div>

          <div className="header__left">
            <div className="header__logo">
              <Link href="/" className="header__logo">
                <Image
                  width="167"
                  height="32"
                  src="/img/general/logo-light.svg"
                  alt="logo icon"
                />
              </Link>

              <div className="text-white">
                <Menu />
              </div>
            </div>
          </div>

          <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className="icon-search text-18 text-white"></i>
            </button>

            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className="icon-person text-18 text-white"></i>
            </button>
          </div>

          <div className="header__right">
            <div className="text-white">
              <Currency
                parentClass={
                  "headerDropdown -hover-light text-white js-form-dd"
                }
              />
            </div>

            <Link href="/register" className="text-white ml-10">
              Sign up
            </Link>

            <Link
              href="/login"
              className="button -sm -outline-white text-white rounded-200 ml-30"
            >
              Log in
            </Link>
          </div>
        </div>
      </header>
      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}
