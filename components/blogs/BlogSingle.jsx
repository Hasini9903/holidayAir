import React from "react";
import Reviews from "./Reviews";
import CommentBox from "./CommentBox";
import Map from "../pages/Hotel/Map";
import Image from "next/image";

export default function BlogSingle() {
  return (
    <>
      <section className="layout-pt-md layout-pb-xl">
        <div className="container">
          <div className="row  justify-center">
            <div className="col-lg-10">
              <h2 className="text-30 md:text-24">HOTELS IN LISBON</h2>
              <p className="mt-20">
              This hotel is ideal for a weekend break to Lisbon,being in the city centre within easy access to downtown
              </p>
              <div className="row">
                <div className="col-md-6">
                  <Map/>
                </div>
                <div className="col-md-6 item-center ">
                  <div className=" bg-accent-1-05 rounded-12 px-30 py-30 mt-20">
                    <div className="blockquote__text">
                      
                      <p  className="">PACKAGE </p>
                      <div className="line mt-10 mb-15 w-full"></div>
                    </div>
                    <div className="blockquote__text d-flex item-center">
                      <img src="/img/tourCards/1/location-50.png" alt="Image description" className="mr-10 mt-2 " style={{
                        height: "20px",
                        width: "20px",lineHeight:"normal"}} />
                      <p  className=""> Balcarce , Argentina  </p>
                    </div>
                    <div className="blockquote__text d-flex item-center">
                      <img src="/img/tourCards/1/price-50.png" alt="Image description" className="mr-10 mt-2 " style={{
                        height: "20px",
                        width: "20px",lineHeight:"normal"}} />
                      <p  className=""> £24  </p>
                    </div>
                    <div className="blockquote__text d-flex item-center">
                      <img src="/img/tourCards/1/time-50.png" alt="Image description" className="mr-10 mt-2 " style={{
                        height: "20px",
                        width: "20px",lineHeight:"normal"}} />
                      <p  className="">  6 Days 5 Nights </p>
                    </div>
                  </div>

                  <div className="  bg-accent-1-05 rounded-12 px-30 py-30 mt-20">
                    <div className="blockquote__text d-flex item-center">
                      <img src="/img/tourCards/1/bed-50.png" alt="Image description" className="mr-10 mt-2 " style={{
                        height: "20px",
                        width: "20px",lineHeight:"normal"}} />
                      <p  className=""> 6 Nights Stay at 4 * Hotel </p>
                    </div>
                    <div className="blockquote__text d-flex item-center">
                      <img src="/img/tourCards/1/flight-50.png" alt="Image description" className="mr-10 mt-2 " style={{
                        height: "20px",
                        width: "20px",lineHeight:"normal"}} />
                      <p  className=""> Flight </p>
                    </div>
                    <div className="blockquote__text d-flex item-center">
                      <img src="/img/tourCards/1/car-50.png" alt="Image description" className="mr-10 mt-2 " style={{
                        height: "20px",
                        width: "20px",lineHeight:"normal"}} />
                      <p  className="">Private Transfer </p>
                    </div>
                    <div className="blockquote__text d-flex item-center">
                      <img src="/img/tourCards/1/wine-tour-50.png" alt="Image description" className="mr-10 mt-2 " style={{
                        height: "20px",
                        width: "20px",lineHeight:"normal"}} />
                      <p  className=""> Sightseeing & Tour </p>
                    </div>
                    <div className="blockquote__text d-flex item-center">
                      <img src="/img/tourCards/1/knife-and-fork-64.png" alt="Image description" className="mr-10 mt-2 " style={{
                        height: "20px",
                        width: "20px",lineHeight:"normal"}} />
                      <p  className=""> Breakfast, Lunch & Dinner</p>
                    </div>
                  </div>
                </div>
                
              </div>
             
              

              <ul className="ulList2 mt-20">
                <li>
                  Sed viverra ipsum nunc aliquet bibendum enim facilisis
                  gravida.
                </li>
                <li>
                  At urna condimentum mattis pellentesque id nibh. Laoreet non
                  curabitur
                </li>
                <li>Magna etiam tempor orci eu lobortis elementum.</li>
                <li>
                  Bibendum est ultricies integer quis. Semper eget duis at
                  tellus.
                </li>
              </ul>

              <div className="row y-gap-10 pt-20">
                <div className="col-md-4">
                  <Image
                    width={410}
                    height={350}
                    src="/img/blogSingle/1.png"
                    alt="image"
                    className="rounded-8"
                  />
                  {/* <div className="mt-10">
                    Donec purus posuere nullam lacus aliquam.
                  </div> */}
                </div>

                <div className="col-md-4">
                  <Image
                    width={410}
                    height={350}
                    src="/img/blogSingle/2.png"
                    alt="image"
                    className="rounded-8"
                  />
                  {/* <div className="mt-10">
                    Donec purus posuere nullam lacus aliquam.
                  </div> */}
                </div>
                <div className="col-md-4">
                  <Image
                    width={410}
                    height={350}
                    src="/img/blogSingle/2.png"
                    alt="image"
                    className="rounded-8"
                  />
                  {/* <div className="mt-10">
                    Donec purus posuere nullam lacus aliquam.
                  </div> */}
                </div>
              </div>


              <div className="row y-gap-15 justify-between items-center pt-20">
                <div className="col-auto">
                  <div className="d-flex x-gap-10">
                    <div>
                      <a
                        href="#"
                        className="button -accent-1 size-40 flex-center bg-accent-1-05 rounded-full"
                      >
                        <i className="icon-facebook text-14"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="button -accent-1 size-40 flex-center bg-accent-1-05 rounded-full"
                      >
                        <i className="icon-twitter text-14"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="button -accent-1 size-40 flex-center bg-accent-1-05 rounded-full"
                      >
                        <i className="icon-instagram text-14"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="button -accent-1 size-40 flex-center bg-accent-1-05 rounded-full"
                      >
                        <i className="icon-linkedin text-14"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* <div className="col-auto">
                  <div className="d-flex x-gap-10">
                    <div>
                      <button className="button -accent-1 border-1 text-14 px-15 py-10 rounded-200">
                        Advanture
                      </button>
                    </div>
                    <div>
                      <button className="button -accent-1 border-1 text-14 px-15 py-10 rounded-200">
                        Nature
                      </button>
                    </div>
                    <div>
                      <button className="button -accent-1 border-1 text-14 px-15 py-10 rounded-200">
                        Culture
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>

             
{/* 
              <div className="row y-gap-20">
                <div className="col-auto">
                  <Image
                    width={70}
                    height={70}
                    src="/img/blogSingle/3.png"
                    alt="image"
                  />
                </div>

                <div className="col">
                  <div className="text-18 fw-500">Brooklyn Simmons</div>
                  <div className="lh-15">Medical Assistant</div>
                  <div className="mt-20">
                    Etiam vitae leo et diam pellentesque porta. Sed eleifend
                    ultricies risus, vel rutrum erat commodo ut. Praesent
                    finibus congue euismod. Nullam scelerisque massa vel augue
                    placerat, a tempor sem egestas. Curabitur placerat finibus
                    lacus.
                  </div>
                </div>
              </div> */}

              <div className="line mt-30 mb-30"></div>

              <div className="row y-gap-15 justify-between">
                <div className="col-md-auto">
                  <div className="d-flex">
                    <div className="pt-5">
                      <i className="icon-arrow-left text-16"></i>
                    </div>
                    <div className="ml-20">
                      <div className="text-18 fw-500">Prev</div>
                      {/* <div className="mt-5">
                        5 awesome steps to get rid of
                        <br /> stress and routine
                      </div> */}
                    </div>
                  </div>
                </div>

                <div className="col-auto md:d-none">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="4" height="4" fill="#05073C" />
                    <rect y="8" width="4" height="4" fill="#05073C" />
                    <rect y="16" width="4" height="4" fill="#05073C" />
                    <rect x="8" width="4" height="4" fill="#05073C" />
                    <rect x="8" y="8" width="4" height="4" fill="#05073C" />
                    <rect x="8" y="16" width="4" height="4" fill="#05073C" />
                    <rect x="16" width="4" height="4" fill="#05073C" />
                    <rect x="16" y="8" width="4" height="4" fill="#05073C" />
                    <rect x="16" y="16" width="4" height="4" fill="#05073C" />
                  </svg>
                </div>

                <div className="col-md-auto">
                  <div className="d-flex text-right md:text-left">
                    <div className="mr-20">
                      <div className="text-18 fw-500">Next</div>
                      {/* <div className="mt-5">
                        Happy clients leave positive
                        <br />
                        feedback less often
                      </div> */}
                    </div>
                    <div className="pt-5">
                      <i className="icon-arrow-right text-16"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="line mt-30 mb-30"></div>

              {/* <h2 className="text-30 mt-30">Customer Reviews</h2>

              <Reviews /> */}

              <CommentBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
