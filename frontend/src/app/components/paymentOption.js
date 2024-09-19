import Image from "next/image";
import ouraCoin from "../assets/payment/oura-coin.webp";

export default function PaymentOptions() {
  const numberOfBestSeller = [1, 2, 3];
  return (
    <div className="text-secondary-foreground bg-card rounded-md">
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-row items-center justify-center h-10 w-10 rounded-tl-md bg-primary">
          <span>4</span>
        </div>
        <div>
          <span className="text-sm">Pilih Pembayaran</span>
        </div>
      </div>
      <div className="bg-muted rounded-b-md p-4">
        <div className="flex flex-col gap-4">
          {numberOfBestSeller.map((value, index) => (
            <div className="bg-card-foreground py-2 px-4 rounded-md">
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                  <Image src={ouraCoin} className="w-10 h-10" />
                  <span className="text-secondary">Oura Coin</span>
                </div>
                <div className="pr-10">
                  <span className="text-xs text-red-400">Max. Rp 0</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
