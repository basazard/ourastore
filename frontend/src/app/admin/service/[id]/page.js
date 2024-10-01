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
        <div className="flex flex-col gap-4 text-secondary-foreground">
          <span className="text-primary text-4xl font-bold">
            {service.name} - {service.owner}
          </span>
          <span className="text-2xl font-bold">Instruction</span>
          <div dangerouslySetInnerHTML={{ __html: service.instruction }} />
        </div>
      </AdminNavbar>
    </>
  );
}
