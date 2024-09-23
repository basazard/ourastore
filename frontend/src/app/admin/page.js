"use client";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/authContext";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import AdminNavbar from "./components/navbar";

export default function AdminHome() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const { authenticated, role } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div></div>;
  }

  return (
    <AdminNavbar>
      <div className="text-secondary-foreground">gatau taruh apa</div>
    </AdminNavbar>
  );
}
