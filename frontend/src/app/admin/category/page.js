"use client";
import { toast } from "react-toastify";
import AdminNavbar from "../components/navbar";
import { useState, useEffect } from "react";
import { EditModal } from "../components/editModal";
import { DeleteButton } from "../components/deleteButton";
import { AddForm } from "../components/addForm";
import { CategoryForm } from "../components/categoryForm";
import { deleteRequest, fetchData, formRequest } from "@/app/utils/fetchData";
import {
  Table,
  TableBody,
  TableColumn,
  TableRow,
  TableHeader,
  TableCell,
} from "@nextui-org/react";

export default function AdminCategory() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const categories = await fetchData("categories");
      setCategories(categories.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function addCategory(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    try {
      await formRequest("categories", { name }, fetchCategories, "POST");
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteCategory(categoryName) {
    try {
      await deleteRequest(`categories/${categoryName}`, fetchCategories);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateCategory(e, categoryName) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newName = formData.get("name");
    try {
      await formRequest(
        `categories/${categoryName}`,
        { newName },
        fetchCategories,
        "PUT"
      );
    } catch {
      console.log(err);
    }
  }

  const columns = [
    {
      key: "category name",
      label: "Category Name",
    },
    {
      key: "edit",
      label: "Edit",
    },
    {
      key: "delete",
      label: "Delete",
    },
  ];

  return (
    <AdminNavbar>
      <div className="text-secondary-foreground">
        <div className="flex flex-col gap-4">
          <AddForm formContent={CategoryForm} handler={addCategory} />
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
              {categories.map((category, index) => (
                <TableRow key={index} className="text-secondary-foreground">
                  <TableCell className="rounded-l-lg">
                    <span>{category.name}</span>
                  </TableCell>
                  <TableCell>
                    <EditModal
                      name="Category"
                      handler={(e) => updateCategory(e, category.name)}
                      formField={EditCategoryForm}
                      value={category.name}
                    />
                  </TableCell>
                  <TableCell className="rounded-r-lg">
                    <DeleteButton
                      handler={() => deleteCategory(category.name)}
                    />
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
