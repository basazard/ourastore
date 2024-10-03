"use client";
import Image from "next/image";
import logoOuraStore from "../../assets/logo-ourastore.webp";
import { useContext } from "react";
import { AuthContext } from "@/app/context/authContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  AssetIcon,
  CategoryIcon,
  DashboardIcon,
  ItemIcon,
  NavigationContent,
  ServiceIcon,
} from "./navigationContent";
import Link from "next/link";

export default function AdminNavbar({ children }) {
  const { setAuthenticated } = useContext(AuthContext);
  const router = useRouter();
  const adminLogout = () => {
    localStorage.removeItem("accessToken");
    setAuthenticated(false);
    router.push("/sign-in");
    toast.success("Logout successfull", {
      autoClose: 1000,
    });
  };
  return (
    <div className="flex flex-col">
      <div>
        <div className="bg-secondary top-0 text-secondary-foreground">
          <div className="h-auto">
            <div className="px-4 py-2">
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <Link href="/">
                    <Image
                      src={logoOuraStore}
                      className="h-20 w-20 object-contain"
                    />
                  </Link>
                  <span className="font-semibold text-primary">
                    Admin OuraStore
                  </span>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={adminLogout}
                    className="bg-muted p-2 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      enable-background="new 0 0 24 24"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#FFFFFF"
                    >
                      <g>
                        <path d="M0,0h24v24H0V0z" fill="none" />
                      </g>
                      <g>
                        <path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z" />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen">
        <div className="bg-muted pt-4 px-4">
          <div className="flex flex-col gap-4 justify-center font-semibold text-lg text-secondary-foreground">
            <NavigationContent
              href="/admin"
              navbarIcon={DashboardIcon}
              label="Dashboard"
            />
            <NavigationContent
              href="/admin/category"
              navbarIcon={CategoryIcon}
              label="Category"
            />
            <NavigationContent
              href="/admin/service"
              navbarIcon={ServiceIcon}
              label="Service"
            />
            <NavigationContent
              href="/admin/assets"
              navbarIcon={AssetIcon}
              label="Assets"
            />
            <NavigationContent
              href="/admin/item"
              navbarIcon={ItemIcon}
              label="Item"
            />
          </div>
        </div>
        <div className="flex-1 p-6 ">{children}</div>
      </div>
    </div>
  );
}
