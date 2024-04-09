import ModalVideo from "react-modal-video";

export default function ModalVideoComponent({ isOpen, setIsOpen, videoId }) {
  return (
    <ModalVideo
      channel="youtube"
      isOpen={isOpen}
      videoId="L61p2uyiMSo"
      onClose={() => setIsOpen(false)}
    />
  );
}
