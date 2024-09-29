"use client";

import { useEffect, useState } from "react";

import { fetchData } from "../utils/fetchData";
import { Spinner } from "@nextui-org/react";
import { ServiceCard } from "../components/serviceCard";
import { CategoryNavigation } from "../components/categoryNavigation";

export default function Category() {
  const [categoryState, setCategoryState] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [loadingService, setLoadingService] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      fetchServiceByCategory(categoryState);
    }
  }, [categories]);

  async function fetchServiceByCategory(index) {
    setLoadingService(true);
    const services = await fetchData(`services/${categories[index].id}`);
    setServices(services.data);
    setLoadingService(false);
    setAnimate(true);
  }

  async function fetchCategories() {
    try {
      const categories = await fetchData("categories");
      setCategories(categories.data);
    } catch (err) {
      console.log(err);
    }
  }

  const changeCategory = (index) => {
    setAnimate(false);
    setCategoryState(index);
    fetchServiceByCategory(index);
  };

  return (
    <div className="px-4 sm:px-20">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-row gap-4 overflow-x-auto">
          {categories.map((category, index) => (
            <CategoryNavigation
              key={category.id}
              category={category}
              index={index}
              navHandler={() => changeCategory(index)}
              categoryState={categoryState}
            />
          ))}
        </div>
        {loadingService ? (
          <div className="flex justify-center">
            <Spinner />
          </div>
        ) : (
          <>
            {services.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                <>
                  {services.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      index={index}
                      animate={animate}
                      service={service}
                    />
                  ))}
                </>
              </div>
            ) : (
              <div></div>
            )}
          </>
        )}
        <div className="text-center">
          <button className="bg-secondary px-4 py-2 hover:bg-secondary/80 rounded-lg">
            <span className="text-secondary-foreground text-xs">
              Tampilkan lainnya...
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
