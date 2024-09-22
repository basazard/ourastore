"use client";
import { toast } from "react-toastify";
import AdminNavbar from "../components/navbar";
import { Button } from "@nextui-org/react";

export default function AdminCategory() {
  const baseUrl = process.env.NEXT_PUBLIC_BE_API_URL;

  async function addCategory(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    try {
      const res = await fetch(`${baseUrl}/categories`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ name }),
      });

      const toastId = toast.loading("Submitting form...");

      if (!res.ok) {
        const data = await res.json();
        toast.update(toastId, {
          render: data.message,
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
      }

      const data = await res.json();
      toast.update(toastId, {
        render: data.message,
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <AdminNavbar>
      <div className="text-secondary-foreground">
        <form onSubmit={addCategory}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-primary">
                Category Form
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span>Fill Your Category Here</span>
              <input
                className="w-1/3 p-2 rounded-lg text-sm bg-muted font-extralight text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
                type="text"
                placeholder="Category name"
                name="name"
              ></input>
            </div>
            <div>
              <Button
                type="submit"
                radius="sm"
                className="bg-primary text-secondary-foreground"
              >
                Add Category
              </Button>
            </div>
          </div>
        </form>
      </div>
    </AdminNavbar>
  );
}
