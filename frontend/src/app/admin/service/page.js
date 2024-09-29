"use client";
import { useEffect, useState } from "react";
import AdminNavbar from "../components/navbar";
import Link from "next/link";
import { EditModal } from "../components/editModal";
import { DeleteButton } from "../components/deleteButton";
import { AddForm } from "../components/addForm";
import { ServiceForm } from "../components/serviceForm";
import { fetchData, formRequest, deleteRequest } from "@/app/utils/fetchData";
import {
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function AdminService() {
  const pathname = usePathname();
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchServices();
    fetchAssets();
    console.log(pathname);
  }, []);

  async function fetchAssets() {
    try {
      const assets = await fetchData("assets");
      setAssets(assets.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchServices() {
    try {
      const services = await fetchData("services");
      setServices(services.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function fetchCategories() {
    try {
      const categories = await fetchData("categories");
      setCategories(categories.data);
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
      await formRequest("services", form_object, fetchServices, "POST");
    } catch (err) {
      console.log(err);
    } finally {
      e.target.reset();
    }
  }

  async function deleteService(serviceName) {
    try {
      await deleteRequest(`services/${serviceName}`, fetchServices);
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
      await formRequest(
        `services/${serviceName}`,
        form_object,
        fetchServices,
        "PUT"
      );
    } catch (err) {
      console.log(err);
    } finally {
      e.target.reset();
    }
  }

  const columns = [
    {
      key: "Service Name",
      label: "Service Name",
    },
    {
      key: "Service Owner",
      label: "Service Owner",
    },
    {
      key: "Category",
      label: "Category",
    },
    {
      key: "Edit",
      label: "Edit",
    },
    {
      key: "Delete",
      label: "Delete",
    },
  ];

  return (
    <AdminNavbar>
      <div className="text-secondary-foreground">
        <div className="flex flex-col gap-4">
          <AddForm
            formContent={ServiceForm}
            handler={addService}
            categories={categories}
            assets={assets}
          />
          <Table
            classNames={{
              table: "bg-secondary",
              wrapper: "bg-secondary",
              th: "bg-muted",
              tr: "hover:bg-muted",
            }}
          >
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key}>
                  <span className="text-secondary-foreground text-opacity-50">
                    {column.label}
                  </span>
                </TableColumn>
              )}
            </TableHeader>
            <TableBody>
              {services.map((service, index) => (
                <TableRow key={index} className="text-secondary-foreground">
                  <TableCell className="rounded-l-lg">
                    <div className="flex flex-col">
                      <span>{service.name}</span>
                      <Link href={`${pathname}/${service.id}`}>
                        <span className="text-secondary-foreground text-opacity-20 text-xs">
                          More...
                        </span>
                      </Link>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span>{service.owner}</span>
                  </TableCell>
                  <TableCell>
                    <span>{service.category.name}</span>
                  </TableCell>
                  <TableCell>
                    <EditModal
                      name="Service"
                      formField={EditServiceForm}
                      handler={(e) => updateService(e, service.name)}
                      value1={service.name}
                      value2={service.owner}
                      categories={categories}
                    />
                  </TableCell>
                  <TableCell className="rounded-r-lg">
                    <DeleteButton handler={() => deleteService(service.name)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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
