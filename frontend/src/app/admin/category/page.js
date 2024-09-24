"use client";
import { toast } from "react-toastify";
import AdminNavbar from "../components/navbar";
import { useState, useEffect } from "react";
import { EditModal } from "../components/editModal";
import { DeleteButton } from "../components/deleteButton";
import { AddForm } from "../components/addForm";
import { CategoryForm } from "../components/categoryForm";

export default function AdminCategory() {
  const baseUrl = process.env.NEXT_PUBLIC_BE_API_URL;
  const [categories, setCategories] = useState([]);

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
      const data = await res.json();

      if (!res.ok) {
        toast.update(toastId, {
          render: data.message,
          type: "error",
          isLoading: false,
          autoClose: 1000,
        });
        return;
      }

      toast.update(toastId, {
        render: data.message,
        type: "success",
        isLoading: false,
        autoClose: 1000,
      });
      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
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
      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }

  async function updateCategory(e, category) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newName = formData.get("name");
    try {
      const res = await fetch(`${baseUrl}/categories/${category}`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newName }),
        method: "PUT",
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
      fetchCategories();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AdminNavbar>
      <div className="text-secondary-foreground">
        <div className="flex flex-col gap-4">
          <AddForm formContent={CategoryForm} handler={addCategory} />
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <span>{category.name}</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                      <EditModal
                        name="Category"
                        handler={(e) => updateCategory(e, category.name)}
                        formField={EditCategoryForm}
                        value={category.name}
                      />
                      <DeleteButton
                        handler={() => deleteCategory(category.name)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminNavbar>
  );
}

function EditCategoryForm({ value }) {
  return (
    <div className="flex flex-col gap-2">
      <input
        className="p-2 rounded-lg text-sm bg-muted font-extralight text-secondary-foreground border-2 border-transparent focus:border-primary focus:outline-none"
        type="text"
        placeholder="Category name"
        name="name"
        defaultValue={value}
      ></input>
    </div>
  );
}
