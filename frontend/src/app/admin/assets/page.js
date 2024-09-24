"use client";
import { Button } from "@nextui-org/react";
import AdminNavbar from "../components/navbar";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { AddForm } from "../components/addForm";
import { AssetForm } from "../components/assetsForm";

export default function AdminAssets() {
  const [fileName, setFileName] = useState("No file chosen");
  const [assets, setAssets] = useState([]);
  const baseUrl = process.env.NEXT_PUBLIC_BE_API_URL;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  async function fetchAssets() {
    try {
      const res = await fetch(`${baseUrl}/assets`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      const data = await res.json();
      console.log(data);
      setAssets(data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAssets();
  }, []);

  async function addAssets(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const res = await fetch(`${baseUrl}/assets`, {
        method: "POST",
        body: formData,
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
      fetchAssets();
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteAssets(assetId) {
    try {
      const res = await fetch(`${baseUrl}/assets/${assetId}`, {
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
      fetchAssets();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AdminNavbar>
      <div className="text-secondary-foreground">
        <div className="flex flex-col gap-4">
          <AddForm
            formContent={AssetForm}
            handler={addAssets}
            fileName={fileName}
            handleFileChange={handleFileChange}
          />
          <div className="grid grid-cols-3 gap-4">
            {assets.map((asset, index) => (
              <div key={index} className="bg-muted p-4 rounded-lg">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col gap-2">
                    <span className="text-xl font-bold">{asset.assetName}</span>
                    <div className="relative w-20 h-20">
                      <Image
                        src={asset.imageUrl}
                        alt={asset.assetName}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <Button
                      onClick={() => deleteAssets(asset.id)}
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
