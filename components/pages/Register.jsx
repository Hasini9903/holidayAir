"use client";

import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <section className="mt-header layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-6 col-lg-7 col-md-9">
            <div className="text-center mb-60 md:mb-30">
              <h1 className="text-30">Register</h1>
              <div className="text-18 fw-500 mt-20 md:mt-15">
                Let's create your account!
              </div>
              <div className="mt-5">
                Already have an account?{" "}
                <Link href="/login" className="text-accent-1">
                  Log In!
                </Link>
              </div>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="contactForm border-1 rounded-12 px-60 py-60 md:px-25 md:py-30"
            >
              <div className="form-input ">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">Username</label>
              </div>

              <div className="form-input mt-30">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">First Name</label>
              </div>

              <div className="form-input mt-30">
                <input type="text" required />
                <label className="lh-1 text-16 text-light-1">Last Name</label>
              </div>

              <div className="form-input mt-30">
                <input type="email" required />
                <label className="lh-1 text-16 text-light-1">Your Email</label>
              </div>

              <div className="form-input mt-30">
                <input type="email" required />
                <label className="lh-1 text-16 text-light-1">
                  Confirm email
                </label>
              </div>

              <button className="button -md -dark-1 bg-accent-1 text-white col-12 mt-30">
                Register
                <i className="icon-arrow-top-right ml-10"></i>
              </button>

              <div className="relative line mt-50 mb-30">
                <div className="line__word fw-500">OR</div>
              </div>

              <div className="row y-gap-15">
                <div className="col">
                  <button
                    type="submit"
                    className="button -md -outline-blue-1 text-blue-1 col-12"
                  >
                    <i className="icon-facebook mr-10"></i>
                    Continue Facebook
                  </button>
                </div>

                <div className="col">
                  <button className="button -md -outline-red-1 text-red-1 col-12">
                    <i className="icon-google mr-10"></i>
                    Continue Google
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
