'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function BookingPages() {

  const [bookingStage, setBookingStage] = useState(1)
  return (
    <section className="layout-pt-md layout-pb-lg mt-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="bg-white rounded-12 shadow-2 py-15 px-20">
              <Link href="/login" className="text-accent-1">
                Sign in
              </Link>{" "}
              to book with your saved details or
              <Link href="/register" className="text-accent-1">
                {" "}
                register
              </Link>{" "}
              to manage your bookings on the go!
            </div>

            <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20 mt-30">

              {bookingStage == 1 &&
              <div>
              <h2 className="text-30 md:text-24 fw-700">
                Let us know who you are
              </h2>

              <div className="row y-gap-30 contactForm pt-30">
                <div className="col-12">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      Full Name
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">Email</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      Phone Number
                    </label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">Country</label>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">City</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      Address 1
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      Address 2
                    </label>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      State/Province/Region
                    </label>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      ZIP code/Postal code
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-input ">
                    <textarea required rows="8"></textarea>
                    <label className="lh-1 text-16 text-light-1">
                      Tour Content
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row y-gap-20 items-center justify-between">
                    <div className="col-auto">
                      <div className="text-14">
                        By proceeding with this booking, I agree to tourz Terms
                        of Use and Privacy Policy.
                      </div>
                    </div>

                   
                  </div>
                </div>
                
              </div>
              
              </div>
 }

{bookingStage == 2 &&
              <div >
              <h2 className="text-30 md:text-24 fw-700 mb-30">
                How do you want to pay?
              </h2>

              <div className="tabs -pills-3 js-tabs">
                <div className="tabs__controls row x-gap-10 y-gap-10 js-tabs-controls">
                  <div className="col-auto">
                    <button
                      className="tabs__button fw-500 rounded-200 js-tabs-button is-tab-el-active"
                      data-tab-target=".-tab-item-1"
                    >
                      Credit/Debit Card
                    </button>
                  </div>

                  <div className="col-auto">
                    <button
                      className="tabs__button fw-500 rounded-200 js-tabs-button "
                      data-tab-target=".-tab-item-2"
                    >
                      Digital Payment
                    </button>
                  </div>
                </div>

                <div className="tabs__content pt-30 js-tabs-content">
                  <div className="tabs__pane -tab-item-1 is-tab-el-active">
                    <div className="contactForm">
                      <div className="form-input ">
                        <input type="text" required />
                        <label className="lh-1 text-16 text-light-1">
                          Select payment method *
                        </label>
                      </div>
                    </div>

                    <div className="row y-gap-30 pt-30">
                      <div className="col-lg-6">
                        <div className="row y-gap-30 contactForm">
                          <div className="col-12">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Card holder name *
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Credit/debit card number *
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                Expiry date *
                              </label>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-input ">
                              <input type="text" required />
                              <label className="lh-1 text-16 text-light-1">
                                CVC/CVV *
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-6">
                         <Image
                          width={820}
                          height={500}
                          src="/img/tourSingle/booking/card.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="tabs__pane -tab-item-2">
                    <div className="contactForm">
                      <div className="form-input ">
                        <input type="text" required />
                        <label className="lh-1 text-16 text-light-1">
                          Select payment method *
                        </label>
                      </div>
                    </div>

                    <ul className="ulList mt-20">
                      <li>
                        You have chosen to pay by PayPal. You will be forwarded
                        to the PayPal website to proceed with this transaction.
                      </li>
                      <li>
                        The total amount you will be charged is: $2,338.01
                      </li>
                    </ul>

                    <div className="line mt-30 mb-30"></div>

                    <div className="row y-gap-15 justify-between items-center">
                      <div className="col">
                        <div className="d-flex">
                          <div className="form-checkbox mt-5">
                            <input type="checkbox" name="name" />

                            <div className="form-checkbox__mark">
                              <div className="form-checkbox__icon">
                                <svg
                                  width="10"
                                  height="8"
                                  viewBox="0 0 10 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M9.29082 0.971021C9.01235 0.692189 8.56018 0.692365 8.28134 0.971021L3.73802 5.51452L1.71871 3.49523C1.43988 3.21639 0.987896 3.21639 0.709063 3.49523C0.430231 3.77406 0.430231 4.22604 0.709063 4.50487L3.23309 7.0289C3.37242 7.16823 3.55512 7.23807 3.73783 7.23807C3.92054 7.23807 4.10341 7.16841 4.24274 7.0289L9.29082 1.98065C9.56965 1.70201 9.56965 1.24984 9.29082 0.971021Z"
                                    fill="white"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="text-14 ml-10">
                            Get access to members-only deals, just like the
                            millions of other email subscribers
                          </div>
                        </div>
                      </div>

                      <div className="col-auto">
                        <button className="button -md -dark-1 bg-accent-1 text-white">
                          Complete My Order
                          <i className="icon-arrow-top-right text-16 ml-10"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
}

{bookingStage == 3 &&
              <div >
              <div className="d-flex flex-column items-center text-center">
                <div className="size-80 rounded-full flex-center bg-accent-1 text-white">
                  <i className="icon-check text-26"></i>
                </div>

                <h2 className="text-30 md:text-24 fw-700 mt-20">
                  System, your order was submitted successfully!
                </h2>
                <div className="mt-10">
                  Booking details has been sent to: booking@tourz.com
                </div>
              </div>

              <div className="border-dashed-1 py-30 px-50 rounded-12 mt-30">
                <div className="row y-gap-15">
                  <div className="col-md-3 col-6">
                    <div>Order Number</div>
                    <div className="text-accent-2">13119</div>
                  </div>

                  <div className="col-md-3 col-6">
                    <div>Date</div>
                    <div className="text-accent-2">27/07/2021</div>
                  </div>

                  <div className="col-md-3 col-6">
                    <div>Total</div>
                    <div className="text-accent-2">$40.10</div>
                  </div>

                  <div className="col-md-3 col-6">
                    <div>Payment Method</div>
                    <div className="text-accent-2">Direct Bank Transfer</div>
                  </div>
                </div>
              </div>

              <h2 className="text-30 md:text-24 fw-700 mt-60 md:mt-30">
                Order Details
              </h2>

              <div className="d-flex item-center justify-between y-gap-5 pt-30">
                <div className="text-18 fw-500">
                  Westminster Walking Tour & Westminster Abbey Entry
                </div>
                <div className="text-18 fw-500">$382</div>
              </div>

              <div className="mt-25">
                <div className="d-flex items-center justify-between">
                  <div className="fw-500">Date:</div>
                  <div className="">06 April 2023</div>
                </div>

                <div className="d-flex items-center justify-between">
                  <div className="fw-500">Time:</div>
                  <div className="">10:00 am</div>
                </div>

                <div className="d-flex items-center justify-between">
                  <div className="fw-500">Duration:</div>
                  <div className="">12 Days</div>
                </div>

                <div className="d-flex items-center justify-between">
                  <div className="fw-500">Tickets:</div>
                  <div className="">
                    Adult x2 = $98 - Youth x3 = $383 - Children x6 = $394
                  </div>
                </div>
              </div>

              <div className="line mt-30 mb-30"></div>

              <div className="d-flex item-center justify-between y-gap-5">
                <div className="text-18 fw-500">Service per booking</div>
                <div className="text-18 fw-500">$43</div>
              </div>

              <div className="line mt-30 mb-30"></div>

              <div className="d-flex item-center justify-between y-gap-5">
                <div className="text-18 fw-500">
                  Service per person 1 Adult, 2 Youth, 4 Children
                </div>
                <div className="text-18 fw-500">$125</div>
              </div>

              <div className="line mt-30 mb-30"></div>

              <div className="row justify-end">
                <div className="col-md-4">
                  <div className="d-flex items-center justify-between">
                    <div className="text-18 fw-500">Subtotal</div>
                    <div className="text-18 fw-500">$382</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="text-18 fw-500">Total</div>
                    <div className="text-18 fw-500">$23</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="text-18 fw-500">Amount Paid</div>
                    <div className="text-18 fw-500">$3.482</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="text-18 fw-500">Amount Due</div>
                    <div className="text-18 fw-500">$43.242</div>
                  </div>
                </div>
              </div>
            </div>
}
            <div className="container d-flex items-center justify-between w-100 mt-60" style={{maxWidth:'400px'}} >
           
                      <button onClick={()=>setBookingStage(pre=>pre-1)} className={`button -md -dark-1 bg-accent-1 text-white ${bookingStage == 1 ? 'hiddenButtonBooking ButtonBooking' : 'ButtonBooking'} `} >
                       Previous
                        {/* <i className="icon-arrow-top-right text-16 ml-10"></i> */}
                      </button>

                    
                      <button onClick={()=>setBookingStage(pre=>pre+1)} style={{alignSelf:'end'}}  className={`button -md -dark-1 bg-accent-1 text-white ${bookingStage == 3 ? 'hiddenButtonBooking ButtonBooking' : 'ButtonBooking'} `}>
                        Next
                        <i className="icon-arrow-top-right text-16 ml-10"></i>
                      </button>
                    </div>
            </div>

           

          

         

           
          </div>

          <div className="col-lg-4">
            <div className="pl-50 md:pl-0">
              <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20">
                <h2 className="text-20 fw-500">Your booking details</h2>

                <div className="d-flex mt-30">
                     <Image
                    width={90}
                    height={84}
                    src="/img/tourSingle/booking/1.png"
                    alt="image"
                  />
                  <div className="ml-20">
                    Zipline 18 Platform and ATV Adventure Tour From Phuket
                  </div>
                </div>

                <div className="line mt-20 mb-20"></div>

                <div className="">
                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Date:</div>
                    <div className="">06 April 2023</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Time:</div>
                    <div className="">10:00 am</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Duration:</div>
                    <div className="">12 Days</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Tickets:</div>
                    <div className="">Adult x2 = $98</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500"></div>
                    <div className="">Youth x3 = $383</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500"></div>
                    <div className="">Children x6 = $394</div>
                  </div>
                </div>

                <div className="line mt-20 mb-20"></div>

                <div className="y-gap-15">
                  <div className="d-flex justify-between">
                    <div className="fw-500">Service per booking</div>
                    <div className="">$30.00</div>
                  </div>

                  <div className="d-flex justify-between">
                    <div className="fw-500">
                      Service per person 1 Adult, 2 Youth, 4 Children
                    </div>
                    <div className="">$179.00</div>
                  </div>
                </div>

                <div className="line mt-20 mb-20"></div>

                <div className="">
                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Subtotal</div>
                    <div className="">$382</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Total</div>
                    <div className="">$23</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Amount Paid</div>
                    <div className="">$3.482</div>
                  </div>

                  <div className="d-flex items-center justify-between">
                    <div className="fw-500">Amount Due</div>
                    <div className="">$43.242</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20 mt-30">
                <h2 className="text-20 fw-500">Do you have a promo code?</h2>

                <div className="contactForm mt-25">
                  <div className="form-input ">
                    <input type="text" required />
                    <label className="lh-1 text-16 text-light-1">
                      Promo code
                    </label>
                  </div>
                </div>

                <button className="button -md -outline-accent-1 text-accent-1 mt-30">
                  Apply
                  <i className="icon-arrow-top-right text-16 ml-10"></i>
                </button>
              </div>

              <div className="mt-30">
                <button className="button -md -dark-1 bg-accent-1 text-white col-12">
                  Complete My Order
                  <i className="icon-arrow-top-right text-16 ml-10"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
