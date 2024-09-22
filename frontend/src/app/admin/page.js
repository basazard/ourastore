"use client";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/authContext";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminNavbar from "./components/navbar";
import { EditModal } from "./components/editModal";
import { Button } from "@nextui-org/react";

export default function AdminHome() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const { authenticated, role } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const baseUrl = process.env.NEXT_PUBLIC_BE_API_URL;

  useEffect(() => {
    if (!authenticated || role !== "ADMIN") {
      router.push("/");
      toast.warning("Unauthorized Access", {
        autoClose: 1000,
      });
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
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
    };
    fetchCategories();
  }, []);

  async function deleteCategory(categoryName) {
    try {
      const res = await fetch(`${baseUrl}/categories/${categoryName}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
      const data = await res.json();
      setCategories(
        categories.filter((category) => category.name !== categoryName)
      );
      toast.success(data.message, {
        isLoading: false,
        autoClose: 1000,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function updateCategory(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newName = formData.get("name");
    console.log(newName);
    // try {
    //   const res = await fetch(`${baseUrl}/categories/${newName}`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ newName }),
    //     method: "PUT",
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
  }
  if (loading) {
    return <div></div>;
  }

  return (
    <AdminNavbar>
      <div className="text-secondary-foreground">
        <div className="flex flex-col gap-4">
          <span className="text-primary font-semibold text-4xl">
            Categories
          </span>
          <div className="grid grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-muted p-4 rounded-lg">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <span>{category.name}</span>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <EditModal
                      name="category"
                      categoryName={category.name}
                      handler={updateCategory}
                    />
                    <Button
                      onClick={() => deleteCategory(category.name)}
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
