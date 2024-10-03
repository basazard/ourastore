"use client";
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
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

export default function ServiceDetail() {
  const { service } = useParams();
  const [serviceData, setServiceData] = useState(null);

  useEffect(() => {
    fetchService(service);
  }, []);

  async function fetchService(serviceId) {
    try {
      const service = await fetchData(`services/service/${serviceId}`);
      setServiceData(service.data);
    } catch (err) {
      console.log(err);
    }
  }

  if (!serviceData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="mt-[60px]">
        <Image
          src={mlBanner}
          className="w-full h-[200px] sm:h-auto object-cover"
        />
        <GameHeader
          gameName={serviceData.name}
          gameOwner={serviceData.owner}
          gameUrl={serviceData.imageUrl}
        />
        <div className="px-4 sm:px-20 py-4 sm:py-10 sm:grid sm:grid-cols-3 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <CopyAffiliateLink />
            <HowToTransaction instruction={serviceData.instruction} />
            <div className="hidden sm:block">
              <GameReview />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:col-span-2">
            <AccountInfo />
            <GameItems />
            <NumberOfItems />
            <PaymentOptions />
            <PromoCode />
            <div className="block sm:hidden">
              <GameReview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
