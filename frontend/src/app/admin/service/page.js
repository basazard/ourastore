"use client";
import { useEffect, useState } from "react";
import AdminNavbar from "../components/navbar";
import { Button } from "@nextui-org/react";
import { toast } from "react-toastify";
import { EditModal } from "../components/editModal";

export default function AdminService() {
  const baseUrl = process.env.NEXT_PUBLIC_BE_API_URL;
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchServices();
  }, []);

  async function fetchServices() {
    try {
      const res = await fetch(`${baseUrl}/services`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const data = await res.json();
      setServices(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchCategories() {
    try {
      const res = await fetch(`${baseUrl}/categories`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      const data = await res.json();
      setCategories(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function addService(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const form_object = {};
    formData.forEach((value, key) => {
      form_object[key] = value;
    });
    try {
      const res = await fetch(`${baseUrl}/services`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(form_object),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message, {
          isLoading: false,
          autoClose: 1000,
        });
        return;
      }
      toast.success(data.message, {
        isLoading: false,
        autoClose: 1000,
      });
      fetchServices();
    } catch (err) {
      console.log(err);
    } finally {
      e.target.reset();
    }
  }

  async function deleteService(serviceName) {
    try {
      const res = await fetch(`${baseUrl}/services/${serviceName}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message, {
          isLoading: false,
          autoClose: 1000,
        });
        return;
      }

      toast.success(data.message, {
        isLoading: false,
        autoClose: 1000,
      });
      fetchServices();
    } catch (err) {
      console.log(err);
    }
  }

  async function updateService(e, serviceName) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const form_object = {};
    formData.forEach((value, key) => {
      form_object[key] = value;
    });
    try {
      const res = await fetch(`${baseUrl}/services/${serviceName}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify(form_object),
      });

      const data = await res.json();

      console.log(data);

      if (!res.ok) {
        toast.error(data.message, {
          isLoading: false,
          autoClose: 1000,
        });
        return;
      }
      toast.success(data.message, {
        isLoading: false,
        autoClose: 1000,
      });
      fetchServices();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AdminNavbar>
      <div className="text-secondary-foreground">
        <div className="flex flex-col gap-4">
          <form className="flex flex-col gap-4" onSubmit={addService}>
            <div>
              <span className="text-4xl font-bold text-primary">
                Service Form
              </span>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                  <span bg>Fill a service name</span>
                  <input
                    type="text"
                    placeholder="Service name"
                    required
                    className="w-full p-2 rounded-lg text-sm
                 bg-muted font-extralight text-secondary-foreground
                  border-2 border-transparent focus:border-primary focus:outline-none"
                    name="serviceName"
                  ></input>
                </div>
                <div className="flex flex-col gap-2">
                  <span bg>Fill a service owner</span>
                  <input
                    type="text"
                    placeholder="Service owner"
                    required
                    className="w-full p-2 rounded-lg text-sm
                 bg-muted font-extralight text-secondary-foreground
                  border-2 border-transparent focus:border-primary focus:outline-none"
                    name="serviceOwner"
                  ></input>
                </div>
                <div className="flex flex-col gap-2">
                  <span bg>Pick category</span>
                  <select
                    className="w-full p-2 rounded-lg text-sm bg-muted border-2 
              border-transparent focus:border-primary focus:outline-none"
                    name="catgId"
                    required
                  >
                    {categories.map((category, index) => (
                      <>
                        <option value={category.id} key={index}>
                          {category.name}
                        </option>
                      </>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <Button
                type="submit"
                radius="sm"
                className="bg-primary text-secondary-foreground"
              >
                Add Service
              </Button>
            </div>
          </form>
          <div className="grid grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-muted rounded-lg p-4">
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <span className="text-xl font-bold">
                      {service.category.name}
                    </span>
                    <span>{service.name}</span>
                    <span className="text-sm">{service.owner}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <EditModal
                      name="Service"
                      formField={EditServiceForm}
                      handler={(e) => updateService(e, service.name)}
                      value1={service.name}
                      value2={service.owner}
                      categories={categories}
                    />
                    <Button
                      onClick={() => deleteService(service.name)}
                      isIconOnly
                      color="danger"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#FFFFFF"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminNavbar>
  );
}

function EditServiceForm({ value1, value2, categories }) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="p-2 rounded-lg text-sm bg-muted font-extralight text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
        type="text"
        placeholder="Service name"
        name="newServiceName"
        defaultValue={value1}
      ></input>
      <input
        className="p-2 rounded-lg text-sm bg-muted font-extralight text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
        type="text"
        placeholder="Service order"
        name="newServiceOwner"
        defaultValue={value2}
      ></input>
      <select
        className="w-full p-2 rounded-lg text-sm bg-muted border-2 
              border-transparent focus:border-primary focus:outline-none
              text-secondary-foreground"
        name="newCatgId"
        required
      >
        {categories.map((category, index) => (
          <>
            <option value={category.id} key={index}>
              {category.name}
            </option>
          </>
        ))}
      </select>
    </div>
  );
}
