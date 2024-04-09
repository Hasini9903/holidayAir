"use client";

import { useEffect, useState } from "react";
import HeaderSerch from "../components/HeaderSerch";
import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Header6() {
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
        className={`header -type-7 js-header  ${addClass ? "-is-sticky" : ""}`}
      >
        <div className="header__container container">
          <div className="headerMobile__left">
            <button
              className="header__menuBtn js-menu-button"
              onClick={() => setMobileMenuOpen(true)}
            >
              <i className="icon-main-menu text-white"></i>
            </button>
          </div>

          <div className="header__left xl:d-none text-white">
            <HeaderSerch white={true} />
          </div>

          <div className="header__center">
            <div className="header__logo">
              <Link href="/" className="header__logo">
                <Image
                  width="167"
                  height="32"
                  src="/img/general/logo-light.svg"
                  alt="logo icon"
                />
              </Link>
            </div>
          </div>

          <div className="headerMobile__right">
            <button
              onClick={() => pageNavigate("/tour-list-1")}
              className="d-flex"
            >
              <i className="icon-search text-white text-18"></i>
            </button>

            <button
              onClick={() => pageNavigate("/login")}
              className="d-flex ml-20"
            >
              <i className="icon-person text-white text-18"></i>
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
              className="button -sm -dark-1 bg-white rounded-200 ml-30"
            >
              Log in
            </Link>

            <button
              className="header__menuBtn ml-30 js-menu-button"
              onClick={() => setMobileMenuOpen(true)}
            >
              <i className="icon-main-menu text-white"></i>
            </button>
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
