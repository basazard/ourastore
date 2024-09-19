import mlBanner from "../assets/banner-games/mobile-legends.webp";
import Image from "next/image";
import Navbar from "../components/navbar";
import GameHeader from "../components/gameHeader";
import CopyAffiliateLink from "../components/copyAffiliateLink";
import AccountInfo from "../components/accountInfoInput";
import HowToTransaction from "../components/howToTransaction";
import GameReview from "../components/gameReview";
import GameItems from "../components/gameItems";
import NumberOfItems from "../components/numberOfItems";
import PaymentOptions from "../components/paymentOption";
import PromoCode from "../components/promoCode";

export default function MobileLegends() {
  return (
    <div>
      <Navbar />
      <div className="mt-[60px]">
        <Image src={mlBanner} classname="w-full" />
        <GameHeader gameName="Mobile Legends" />
        <div className="px-20 py-10 grid grid-cols-3 gap-6">
          <div className="flex flex-col gap-4">
            <CopyAffiliateLink />
            <HowToTransaction />
            <GameReview />
          </div>
          <div className="flex flex-col gap-4 col-span-2">
            <AccountInfo />
            <GameItems />
            <NumberOfItems />
            <PaymentOptions />
            <PromoCode />
          </div>
        </div>
      </div>
    </div>
  );
}
