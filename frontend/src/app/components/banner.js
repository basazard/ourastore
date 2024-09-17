import Image from "next/image";
import banner from "../assets/footer.webp";

export default function Footer() {
  return (
    <div className="py-[5rem]">
      <Image src={banner} />
    </div>
  );
}
