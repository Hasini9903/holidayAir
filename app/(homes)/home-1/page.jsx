import ArticlesThree from "@/components/homes/articles/ArticlesThree";
import Banner from "@/components/homes/banners/Banner";
import BannerOne from "@/components/homes/banners/BannerOne";
import DestinationsOne from "@/components/homes/destinations/DestinationsOne";
import FeaturesOne from "@/components/homes/features/FeaturesOne";
import Hero1 from "@/components/homes/heros/Hero1";
import TestimonialOne from "@/components/homes/testimonials/TestimonialOne";
import TourTypeOne from "@/components/homes/tourTypes/TourTypeOne";
import Tour1 from "@/components/homes/tours/Tour1";
import TourSlderOne from "@/components/homes/tours/TourSlderOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";

export default function Home() {
  return (
    <main>
      <Header1 />
      <Hero1 />
      <FeaturesOne />
      <DestinationsOne />
      <Tour1 />
      <Banner />
      <TourTypeOne />
      <TourSlderOne />
      <TestimonialOne />
      <BannerOne />
      <ArticlesThree />
      <FooterOne />
    </main>
  );
}
