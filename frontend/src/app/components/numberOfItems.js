"use client";
import { useState } from "react";

export default function NumberOfItems() {
  const [totalCart, setTotalCart] = useState(1);
  const toggleAddCart = () => {
    setTotalCart(totalCart + 1);
  };
  const toggleRemoveCart = () => {
    if (totalCart !== 1) {
      setTotalCart(totalCart - 1);
    }
  };
  return (
    <div className="text-secondary-foreground bg-card rounded-md">
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-row items-center justify-center h-10 w-10 rounded-tl-md bg-primary">
          <span>3</span>
        </div>
        <div>
          <span className="text-sm">Masukkan Jumlah Pembelian</span>
        </div>
      </div>
      <div className="bg-muted rounded-b-md p-4">
        <div className="flex flex-row gap-1">
          <input
            type="number"
            className="w-[90%] rounded-md p-2 text-xs bg-input border-2 border-transparent 
                  focus:border-primary focus:outline-none"
            value={totalCart}
          ></input>
          <button onClick={toggleAddCart} className="bg-primary rounded-md p-2">
            <svg
              className="text-center"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
          <button
            onClick={toggleRemoveCart}
            className={`bg-primary rounded-md p-2 ${
              totalCart === 1 ? "opacity-50" : "opacity-100"
            } transition-all ease-in-out duration-300`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 13H5v-2h14v2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
