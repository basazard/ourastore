"use client";

import { useState } from "react";
import { listTopUpGames, listJokiMLBB } from "../content-list/contentList";
import Image from "next/image";

export default function Category() {
  const [categoryState,setCategoryState] = useState(0);
  const [animate, setAnimate] = useState(true);

  const changeCategory = (index) => {
    setAnimate(false);
    setTimeout(() => {
      setCategoryState(index);
      setAnimate(true);
    }, 100);
    
  }

  const listCategory = [
    {
      name : "Top Up Games",
      listImage : listTopUpGames
    },
    {
      name : "Joki MLBB",
      listImage : listJokiMLBB 
    },
    {
      name : "Joki HOK",
      listImage : []
    },
    {
      name : "Pulsa & Data",
      listImage : []
    },
    {
      name : "Voucher",
      listImage : []
    },
    {
      name : "Tagihan",
      listImage : []
    }
  ]
  return (
    <div className="px-20">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row gap-4">
        {listCategory.map((category,index) => (
          <div key={category.name}>
            <button className={`bg-muted px-3 py-2 rounded-lg hover:bg-primary duration-500 
            ${categoryState === index ? 'bg-primary' : 'bg-muted'}`}
              onClick={() => changeCategory(index)}
            >
              <span className="text-secondary-foreground text-sm">{category.name}</span>
            </button>
          </div>
        ))}
        </div>
        {listCategory[categoryState].listImage.length > 0 ? (
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">                  
            {listCategory[categoryState].listImage.map((value, index) => (
            <div key={index} className={`${animate ? 'animate-slideUp' : ''} transition-all`}
            style={{ animationDelay: `${index * 0.1}s` }}>
              <button>
                <div className="relative group w-[192px] h-[288px]">
                  <div className="absolute z-10 inset-0 bg-muted rounded-2xl opacity-0 transform 
                  group-hover:opacity-40 group-hover:scale-105 duration-500"></div>
                  <Image
                    src={value.image}
                    className="ring-transparent ring-2 ring-offset-2 
                    ring-offset-secondary group-hover:ring-primary rounded-2xl w-full
                    h-full object-cover transform group-hover:scale-105 duration-500 bg-transparent group-hover:bg-black"
                  />    
                  <div className="absolute z-20 bottom-2 left-3 right-2 transform opacity-0 translate-y-4 
                  group-hover:opacity-100 group-hover:translate-y-0 transition-all ease-in-out duration-300">
                    <h1 className="text-secondary-foreground font-semibold text-base text-left truncate">{value.name}</h1>
                    <p className="text-secondary-foreground text-xs font-light text-left">{value.owner}</p>
                  </div>  
                </div>
              </button>
            </div>
            ))}
          </div>
        ) : (
          <div>

          </div>
        )}
        <div className="text-center">
          <button className="bg-secondary px-4 py-2 hover:bg-secondary/80 rounded-lg">
            <span className="text-secondary-foreground text-xs">Tampilkan lainnya...</span>
          </button>
        </div>
      </div>
      
    </div>
  );
}