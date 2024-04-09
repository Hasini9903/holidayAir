"use client";

import Stars from "@/components/common/Stars";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
const images = [
  "/img/tourSingle/2/2.png",
  "/img/tourSingle/2/1.png",
  "/img/tourSingle/2/3.png",
];
export default function Gallery4({ tour }) {
  return (
    <section className="tourSingleHero5">
      <div className="tourSingleHero5__image">
        <div
          className="js-section-slider"
          data-gap="0"
          data-slider-cols="xl-1 lg-1 md-1 sm-1 base-1"
          data-loop
          data-nav-prev="js-slider1-prev"
          data-nav-next="js-slider1-next"
        >
          <div className="swiper-wrapper" style={{ height: "796px" }}>
            <Swiper
              spaceBetween={10}
              className="w-100 overflow-visible"
              style={{ maxWidth: "100%" }}
              loop={true}
              navigation={{
                prevEl: ".js-slider1-prev9",
                nextEl: ".js-slider1-next9",
              }}
              modules={[Navigation, Pagination]}
              slidesPerView={1}
            >
              {images.map((elm, i) => (
                <SwiperSlide key={i}>
                  <div className="swiper-slide">
                    <Image
                      width={850}
                      height={510}
                      src={elm}
                      alt="image"
                      className="img-cover rounded-12"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="navTourSingle">
            <button className="navTourSingle__button bg-white js-slider1-prev js-slider1-prev9">
              <i className="icon-arrow-left text-14"></i>
            </button>

            <button className="navTourSingle__button bg-white js-slider1-next js-slider1-next9">
              <i className="icon-arrow-right text-14"></i>
            </button>
          </div>
        </div>

        <div className="icon">
          <svg
            width="1800"
            height="40"
            viewBox="0 0 1800 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-2.7895e-05 26.1652C-2.7895e-05 26.1652 46.3492 19.8469 88.8889 19.4061C132.063 18.9653 168.889 19.4061 221.587 21.6102C293.333 24.5489 431.746 36.4509 505.397 29.9856C579.048 23.5203 582.222 23.2265 619.683 19.1122C661.587 14.4102 746.667 5.00616 852.063 5.44698C964.444 5.88779 1168.25 29.8387 1252.06 28.6632C1260.95 28.5162 1293.97 27.4877 1318.73 25.7244C1342.86 23.9612 1378.41 20.1408 1426.67 18.8183C1446.98 18.2306 1479.37 17.202 1516.83 17.4959C1526.35 17.6428 1556.83 18.0836 1593.02 19.8469C1629.21 21.6102 1662.86 24.402 1693.33 25.2836C1758.73 26.8999 1800 24.5489 1800 24.5489V40.4182H-2.7895e-05V26.1652ZM144.127 23.8142C148.571 25.2836 156.825 24.402 171.429 24.402C186.032 24.402 210.159 26.1652 208.254 26.0183C206.349 25.8714 188.571 23.8142 170.159 23.2265C151.111 22.4918 140.318 22.3448 144.127 23.8142ZM260.952 27.7815C260.952 27.7815 276.19 28.0754 296.508 29.104C316.825 30.2795 361.905 33.2183 392.381 34.2468C444.444 35.8631 492.698 34.2468 488.254 34.0999C483.175 33.9529 427.302 34.9815 376.508 32.4836C355.556 31.455 317.46 29.2509 297.778 28.5162C276.825 27.6346 260.952 27.7815 260.952 27.7815ZM624.127 27.9285C613.333 28.9571 708.571 21.0224 741.587 18.9653C754.921 18.0836 780.952 16.6143 805.079 16.0265C829.841 15.4388 861.587 15.4388 860.952 15.2918C860.952 14.9979 824.127 14.1163 789.841 15.2918C755.556 16.4673 756.825 16.9081 741.587 17.6428C717.46 18.8183 634.921 26.8999 624.127 27.9285ZM535.873 30.2795C534.603 30.2795 540.952 30.8672 566.349 28.6632C591.746 26.4591 608.889 23.5203 610.159 23.2265C611.429 23.0795 587.936 25.8714 568.254 27.6346C549.206 29.3979 536.508 30.2795 535.873 30.2795ZM3.17458 31.6019C3.8095 31.455 15.238 29.9856 33.6507 27.9285C52.0634 25.8714 77.4603 23.8142 76.1904 23.9612C74.9206 23.9612 53.9683 24.8428 29.2064 27.6346C4.44445 30.4264 2.53965 31.7489 3.17458 31.6019ZM1601.27 23.3734C1600.63 23.6673 1613.33 23.6673 1629.84 25.1367C1646.35 26.606 1664.13 27.4877 1679.37 28.0754C1704.76 29.2509 1753.65 27.9285 1751.11 27.7815C1749.21 27.6346 1699.05 28.2224 1671.75 26.753C1657.78 26.0183 1656.51 26.0183 1635.56 24.402C1614.6 22.7857 1601.9 22.9326 1601.27 23.3734ZM1336.51 26.8999C1333.97 27.0469 1314.29 29.2509 1283.17 30.7203C1252.06 32.3366 1226.67 31.455 1226.67 31.8958C1226.67 32.3366 1233.02 33.2183 1266.03 32.3366C1299.05 31.455 1339.05 26.753 1336.51 26.8999ZM1345.4 30.5734C1344.13 30.4264 1323.81 32.4836 1309.21 33.0713C1294.6 33.5121 1297.14 33.806 1297.14 33.9529C1297.14 34.0999 1304.13 34.2468 1314.29 33.6591C1325.08 32.9244 1346.67 30.7203 1345.4 30.5734ZM1205.71 33.9529C1205.08 33.6591 1183.49 32.7774 1170.16 31.3081C1156.83 29.8387 1158.73 30.4264 1158.1 30.5734C1157.46 30.7203 1163.17 31.7489 1173.33 32.4836C1183.49 33.3652 1206.35 34.2468 1205.71 33.9529ZM1384.76 24.1081C1385.4 23.6673 1382.86 23.3734 1372.7 24.402C1362.54 25.4305 1356.19 26.3122 1358.73 26.1652C1361.27 26.0183 1364.44 25.5775 1374.6 24.9897C1385.4 24.402 1384.13 24.5489 1384.76 24.1081ZM1580.95 22.1979C1582.22 22.1979 1567.62 21.0224 1560 20.8755C1552.38 20.7285 1547.3 20.7285 1547.3 21.1693C1547.3 21.6102 1547.94 21.904 1557.46 21.7571C1567.62 21.6102 1579.68 22.1979 1580.95 22.1979ZM833.651 9.4143C834.286 9.26736 848.889 9.85512 881.27 9.85512C913.016 9.85512 967.619 13.3816 990.476 14.9979C1013.33 16.6143 926.984 9.26736 885.714 8.97349C844.444 8.67961 833.016 9.56124 833.651 9.4143Z"
              fill="white"
            />
            <path
              d="M88.2542 13.9694C88.8891 14.1163 117.461 13.5285 133.969 13.9694C180.318 14.9979 241.905 18.6714 239.365 18.2306C236.826 17.7897 152.381 13.6755 131.429 13.3816C100.318 12.7938 87.6193 13.9694 88.2542 13.9694Z"
              fill="white"
            />
            <path
              d="M356.191 26.0183C357.461 26.1652 384.763 27.4876 416.509 27.7815C448.255 28.0754 497.144 26.8999 494.604 27.0468C492.699 27.1938 457.144 29.6917 410.16 28.8101C363.176 27.9285 354.922 25.8713 356.191 26.0183Z"
              fill="white"
            />
            <path
              d="M501.587 20.7285C502.222 20.8754 488.889 22.1979 481.27 22.3448C473.651 22.4917 468.572 22.3448 468.572 21.904C468.572 21.4632 469.206 21.1693 478.73 21.3162C489.524 21.4632 500.953 20.5815 501.587 20.7285Z"
              fill="white"
            />
            <path
              d="M523.81 24.8428C523.81 24.9898 551.746 23.0796 563.81 21.6102C575.873 20.2878 603.175 17.0551 602.54 17.0551C601.905 16.9082 575.873 19.4061 562.54 20.8755C549.207 22.3449 523.81 24.6959 523.81 24.8428Z"
              fill="white"
            />
            <path
              d="M819.047 1.1859C819.682 1.33284 848.254 0.745088 864.761 1.1859C911.111 2.21447 972.698 5.88792 970.158 5.44711C967.619 5.00629 883.174 0.892027 862.222 0.598151C831.111 0.0103991 818.412 1.03896 819.047 1.1859Z"
              fill="white"
            />
            <path
              d="M1533.97 12.0593C1533.97 12.0593 1526.35 12.5001 1515.56 12.2062C1504.76 11.9123 1478.73 10.8838 1463.49 11.1776C1436.83 11.7654 1416.51 15.145 1419.05 14.998C1421.59 14.998 1446.35 11.7654 1473.65 12.2062C1485.08 12.3531 1506.03 12.9409 1516.19 12.794C1526.35 12.647 1533.97 12.0593 1533.97 12.0593Z"
              fill="white"
            />
            <path
              d="M1320.63 21.904C1319.36 21.757 1307.94 23.0795 1293.33 23.5203C1278.73 23.8141 1280 23.9611 1280 24.255C1280 24.4019 1291.43 24.8427 1301.59 24.255C1311.75 23.5203 1321.9 22.0509 1320.63 21.904Z"
              fill="white"
            />
            <path
              d="M1700.95 21.0223C1700.95 21.1692 1673.65 21.0223 1658.41 20.2876C1643.18 19.5529 1626.67 17.4958 1626.67 17.3488C1626.67 17.2019 1643.81 18.5243 1659.05 19.406C1673.65 20.2876 1700.32 20.8753 1700.95 21.0223Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row x-gap-10 y-gap-10 items-center">
              <div className="col-auto">
                <button className="button -accent-1 text-14 py-5 px-15 bg-white text-accent-1 rounded-200">
                  Bestseller
                </button>
              </div>
              <div className="col-auto">
                <button className="button -accent-1 text-14 py-5 px-15 bg-light-1 rounded-200">
                  Free cancellation
                </button>
              </div>
            </div>

            <h2 className="text-40 sm:text-30 lh-14 text-white mt-20">
              {tour?.title.split(" ").slice(0, 7).join(" ")}

              <br />
              {tour?.title.split(" ").slice(7).join(" ")}
            </h2>

            <div className="row y-gap-20 justify-between items-center pt-20">
              <div className="col-auto">
                <div className="row x-gap-20 y-gap-20 items-center">
                  <div className="col-auto">
                    <div className="d-flex items-center text-white">
                      <div className="d-flex x-gap-5 pr-10">
                        <Stars star={5} font={12} />
                      </div>
                      {tour?.rating} ({tour.ratingCount})
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center text-white">
                      <i className="icon-pin text-16 mr-5"></i>
                      {tour?.location}
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="d-flex items-center text-white">
                      <i className="icon-reservation text-16 mr-5"></i>
                      30K+ booked
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="d-flex x-gap-30 y-gap-10">
                  <a href="#" className="d-flex items-center text-white">
                    <i className="icon-share flex-center text-16 mr-10"></i>
                    Share
                  </a>

                  <a href="#" className="d-flex items-center text-white">
                    <i className="icon-heart flex-center text-16 mr-10"></i>
                    Wishlist
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
