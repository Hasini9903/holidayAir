import Image from "next/image";

const imageSources = [
  "/img/footer/cards/1.png",
  "/img/footer/cards/2.png",
  "/img/footer/cards/3.png",
  "/img/footer/cards/4.png",
  "/img/footer/cards/5.png",
  "/img/footer/cards/6.png",
];

export default function Paymentcards() {
  return (
    <>
      {imageSources.map((elm, i) => (
        <Image
          style={{ width: "48px", height: "auto" }}
          width={38}
          height={24}
          key={i}
          src={elm}
          alt="image"
        />
      ))}
    </>
  );
}
