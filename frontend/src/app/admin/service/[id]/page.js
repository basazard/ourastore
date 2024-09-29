"use client";
import { useParams } from "next/navigation";
import AdminNavbar from "../../components/navbar";
import { useEffect, useState } from "react";
import { fetchData } from "@/app/utils/fetchData";

export default function AdminServiceDetail() {
  const [service, setService] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchService(id);
  });

  async function fetchService(serviceId) {
    try {
      const service = await fetchData(`services/service/${serviceId}`);
      setService(service.data);
    } catch (err) {
      console.log(err);
    }
  }

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AdminNavbar>
        <div className="flex flex-col gap-4">
          <span className="text-primary text-4xl font-bold">
            {service.name} - {service.owner}
          </span>
        </div>
      </AdminNavbar>
    </>
  );
}
