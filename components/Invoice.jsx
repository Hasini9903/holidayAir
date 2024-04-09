'use client'

import React from "react";
import Link from "next/link";
const handlePrintClick = () => {
  window.print();
};
export default function Invoice() {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-accent-1-05">
      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-10 col-lg-11">
            <div className="d-flex justify-end">
              <button onClick={()=>handlePrintClick()}  className="button -md -dark-1 bg-accent-1 text-white">
                Print
                <i className="icon-print text-20 ml-10"></i>
              </button>
            </div>

            <div className="bg-white rounded-4 mt-50">
              <div className="layout-pt-lg layout-pb-lg px-50 md:px-20">
                <div className="row justify-between">
                  <div className="col-auto">
                    <Link href='/'>
                   
                    <svg
                      width="128"
                      height="42"
                      viewBox="0 0 128 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M58.9139 30.8956C57.6434 30.8956 56.5983 30.7172 55.7787 30.3604C54.959 29.9827 54.3545 29.3845 53.9651 28.566C53.5963 27.7475 53.4119 26.6876 53.4119 25.3864V17.4846H51.2295V14.0216H53.4119V10.2439H57.4385V14.0216H61.3729V17.4846H57.4385V24.7253C57.4385 25.6697 57.6024 26.3518 57.9303 26.7716C58.2787 27.1703 58.9139 27.3697 59.836 27.3697C60.4508 27.3697 61.0655 27.3382 61.6803 27.2753V30.7382C61.2909 30.7802 60.8811 30.8117 60.4508 30.8326C60.0409 30.8746 59.5286 30.8956 58.9139 30.8956Z"
                        fill="#EB662B"
                      />
                      <path
                        d="M71.8393 31.0845C70.3639 31.0845 69.0012 30.7802 67.7512 30.1715C66.5217 29.5419 65.5381 28.5975 64.8004 27.3382C64.0627 26.058 63.6938 24.4524 63.6938 22.5216V21.892C63.6938 20.0661 64.0627 18.5445 64.8004 17.3272C65.5381 16.1099 66.5217 15.1969 67.7512 14.5883C69.0012 13.9587 70.3639 13.6439 71.8393 13.6439C73.3147 13.6439 74.6672 13.9587 75.8967 14.5883C77.1467 15.1969 78.1405 16.1099 78.8782 17.3272C79.6159 18.5445 79.9848 20.0661 79.9848 21.892V22.5216C79.9848 24.4105 79.6159 25.995 78.8782 27.2753C78.1405 28.5345 77.1467 29.4894 75.8967 30.1401C74.6672 30.7697 73.3147 31.0845 71.8393 31.0845ZM71.8393 27.5586C72.618 27.5586 73.3045 27.3802 73.8987 27.0234C74.5135 26.6456 74.995 26.079 75.3434 25.3234C75.6917 24.5679 75.8659 23.6339 75.8659 22.5216V21.892C75.8659 20.8636 75.6917 20.0031 75.3434 19.3105C74.995 18.6179 74.5135 18.0932 73.8987 17.7364C73.3045 17.3587 72.618 17.1698 71.8393 17.1698C71.0606 17.1698 70.3639 17.3587 69.7491 17.7364C69.1549 18.0932 68.6836 18.6179 68.3352 19.3105C67.9869 20.0031 67.8127 20.8636 67.8127 21.892V22.5216C67.8127 23.6549 67.9869 24.5994 68.3352 25.3549C68.6836 26.0895 69.1549 26.6456 69.7491 27.0234C70.3639 27.3802 71.0606 27.5586 71.8393 27.5586Z"
                        fill="#EB662B"
                      />
                      <path
                        d="M88.4871 31.0845C86.6018 31.0845 85.1777 30.5388 84.2146 29.4475C83.2514 28.3351 82.7699 26.6246 82.7699 24.316V14.0216H86.7965V23.7494C86.7965 25.0086 87.0322 25.9635 87.5035 26.6142C87.9953 27.2438 88.8149 27.5586 89.9625 27.5586C90.7822 27.5586 91.4379 27.3802 91.9297 27.0234C92.442 26.6666 92.8211 26.2049 93.067 25.6382C93.3129 25.0716 93.4358 24.4419 93.4358 23.7494V14.0216H97.4932V30.7067H93.7432V28.2197C93.3539 28.9962 92.7289 29.6678 91.8682 30.2345C91.0281 30.8012 89.901 31.0845 88.4871 31.0845Z"
                        fill="#EB662B"
                      />
                      <path
                        d="M101.204 30.7067V14.0216H104.893V16.5087C105.118 16.026 105.425 15.5747 105.815 15.155C106.204 14.7352 106.686 14.3784 107.259 14.0846C107.833 13.7908 108.468 13.6439 109.165 13.6439C109.554 13.6439 109.882 13.6649 110.149 13.7068C110.436 13.7488 110.62 13.7908 110.702 13.8328V17.5161C110.497 17.4321 110.231 17.3587 109.903 17.2957C109.595 17.2118 109.175 17.1698 108.643 17.1698C107.823 17.1698 107.157 17.3482 106.645 17.705C106.153 18.0617 105.794 18.534 105.569 19.1216C105.343 19.6883 105.231 20.3074 105.231 20.979V30.7067H101.204Z"
                        fill="#EB662B"
                      />
                      <path
                        d="M112.528 30.7067V27.716L120.95 17.4846H112.836V14.0216H126.053V17.0124L117.631 27.2438H126.36V30.7067H112.528Z"
                        fill="#EB662B"
                      />
                      <path
                        d="M7.57227 37.2806L32.1382 38.2689C28.4884 40.8434 24.1229 42.1384 19.6947 41.9602C15.2665 41.7821 11.0136 40.1404 7.57227 37.2806Z"
                        fill="url(#paint0_linear_143_20788)"
                      />
                      <path
                        d="M35.9841 34.7275C35.343 35.4917 34.6488 36.2073 33.9068 36.8688L5.92333 35.7433C5.22431 35.0342 4.58333 34.2675 4.00684 33.451L19.9955 34.0893L35.9841 34.7275Z"
                        fill="url(#paint1_linear_143_20788)"
                      />
                      <path
                        d="M40.5408 25.3936C39.9413 28.2521 38.7634 30.9502 37.0831 33.3137L3.00167 31.9411C1.877 30.0654 1.05347 28.017 0.5625 25.8741L12.7182 16.8284L23.2924 26.8212L31.7491 17.954L40.5408 25.3936Z"
                        fill="url(#paint2_linear_143_20788)"
                      />
                      <path
                        d="M20.4917 0C15.0581 0.00363614 9.84799 2.21598 6.00581 6.15111C2.16364 10.0862 0.00355025 15.4224 0 20.9875C0 21.4267 0.0134021 21.8523 0.0402062 22.2778L12.9598 12.6556L23.1856 22.319L31.5216 13.5753L40.9835 21.5777V20.9875C40.9835 15.4213 38.8245 10.083 34.9816 6.1471C31.1386 2.21118 25.9265 0 20.4917 0ZM8.56391 12.0654C8.03113 12.0654 7.51031 11.9036 7.06731 11.6004C6.62432 11.2973 6.27904 10.8664 6.07515 10.3622C5.87127 9.85811 5.81792 9.30337 5.92186 8.76818C6.0258 8.23299 6.28236 7.74138 6.6591 7.35553C7.03584 6.96968 7.51583 6.70691 8.03837 6.60046C8.56092 6.494 9.10256 6.54864 9.59479 6.75746C10.087 6.96628 10.5077 7.31991 10.8037 7.77362C11.0997 8.22733 11.2577 8.76075 11.2577 9.30643C11.2577 10.0382 10.9739 10.7399 10.4687 11.2573C9.96354 11.7747 9.27836 12.0654 8.56391 12.0654Z"
                        fill="url(#paint3_linear_143_20788)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_143_20788"
                          x1="11.5642"
                          y1="37.985"
                          x2="12.9557"
                          y2="44.6476"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EB662B" />
                          <stop offset="1" stopColor="#F28555" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_143_20788"
                          x1="9.20315"
                          y1="33.9636"
                          x2="9.78619"
                          y2="38.9565"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EB662B" />
                          <stop offset="1" stopColor="#F28555" />
                        </linearGradient>
                        <linearGradient
                          id="paint2_linear_143_20788"
                          x1="7.05898"
                          y1="19.3011"
                          x2="16.2009"
                          y2="39.5929"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EB662B" />
                          <stop offset="1" stopColor="#F28555" />
                        </linearGradient>
                        <linearGradient
                          id="paint3_linear_143_20788"
                          x1="6.65981"
                          y1="3.34773"
                          x2="21.1822"
                          y2="27.7556"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#EB662B" />
                          <stop offset="1" stopColor="#F28555" />
                        </linearGradient>
                      </defs>
                    </svg> </Link>
                  </div>

                  <div className="col-xl-4">
                    <div className="row justify-between items-center">
                      <div className="col-auto">
                        <div className="text-26 fw-600">Invoice #</div>
                      </div>

                      <div className="col-auto">
                        <div className="text-18 fw-500">0043128641</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row justify-between pt-50">
                  <div className="col-auto">
                    <div className="text-15">Invoice date:</div>
                    <div className="text-15 fw-500 lh-15">03/10/2022</div>
                  </div>

                  <div className="col-xl-4">
                    <div className="text-15">Due date:</div>
                    <div className="text-15 fw-500 lh-15">03/10/2022</div>
                  </div>
                </div>

                <div className="row justify-between pt-50">
                  <div className="col-auto">
                    <div className="text-20 fw-500">Supplier</div>
                    <div className="text-15 fw-500 mt-20">Jobio LLC</div>
                    <div className="text-15 mt-10">
                      2301 Ravenswood Rd Madison,
                      <br /> WI 53711
                    </div>
                  </div>

                  <div className="col-xl-4">
                    <div className="text-20 fw-500">Customer</div>
                    <div className="text-15 fw-500 mt-20">John Doe</div>
                    <div className="text-15 mt-10">
                      329 Queensberry Street, North Melbourne VIC 3051,
                      Australia.
                    </div>
                  </div>
                </div>

                <div className="row pt-50">
                  <div className="col-12">
                    <table className="table col-12">
                      <thead className="bg-light-1">
                        <tr>
                          <th className="fw-500">Description</th>
                          <th className="fw-500">Price</th>
                          <th className="fw-500">VAT (20%)</th>
                          <th className="fw-500">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Standard Plan</td>

                          <td>$443.00</td>

                          <td>$921.80</td>

                          <td>$9243</td>
                        </tr>

                        <tr>
                          <td>Extra Plan </td>

                          <td>$413.00</td>

                          <td>$912.80</td>

                          <td>$5943</td>
                        </tr>

                        <tr>
                          <td className="text-18 fw-500">Total Due</td>
                          <td></td>
                          <td></td>
                          <td className="text-18 fw-500">$9,750</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="border-1-top py-40">
                <div className="row x-gap-60 y-gap-10 justify-center">
                  <div className="col-auto">
                    <a href="#" className="text-14">
                      www.tourz.com
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="#" className="text-14">
                      invoice@tourz.com
                    </a>
                  </div>
                  <div className="col-auto">
                    <a href="#" className="text-14">
                      (123) 123-456
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
