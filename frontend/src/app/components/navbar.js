"use client";
import Image from "next/image";
import logoOurastore from "../assets/logo-ourastore.webp";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
  NavbarAuthenticated,
  NavbarItem,
  NavbarLanguage,
  NavbarNotAuthenticated,
  NavbarSearch,
} from "./navbarItem";
import {
  CalculatorIcon,
  CrossIcon,
  HamburgerIcon,
  HomeIcon,
  LeaderboardIcon,
  SearchIcon,
} from "./navbarIcon";
import { LeftNavbarItem } from "./leftNavbarItem";

export default function Navbar() {
  const { authenticated, setAuthenticated, username } = useContext(AuthContext);
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthenticated(false);
    router.push("/sign-in");
    toast.success("Logout successfull", {
      autoClose: 1000,
    });
  };

  const openLeftNavbar = () => {
    setHamburgerClicked(true);
  };

  const closeLeftNavbar = () => {
    setHamburgerClicked(false);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-10 bg-secondary 
      border-b border-border/50 backdrop-filter backdrop-blur-lg bg-opacity-70 flex flex-col"
      >
        <div className="sm:px-24 px-4 py-4">
          <div className="h-full justify-between flex flex-row">
            <div className="flex flex-row gap-4 items-center">
              <HamburgerIcon handler={openLeftNavbar} />
              <Image
                src={logoOurastore}
                className="h-9 w-auto"
                alt="logo-ourastore"
              />
              <NavbarItem icon={HomeIcon} label="Beranda" href="/" />
              <NavbarItem
                icon={SearchIcon}
                label="Cek Transaksi"
                href="/invoices"
              />
              <NavbarItem icon={LeaderboardIcon} label="Leaderbord" href="/" />
              <NavbarItem icon={CalculatorIcon} label="Kalkulator" href="/" />
            </div>
            <div className="flex gap-6">
              <div className="flex flex-row gap-2 items-center">
                <NavbarSearch />
                <NavbarLanguage />
              </div>
              {authenticated ? (
                <NavbarAuthenticated handler={logout} username={username} />
              ) : (
                <NavbarNotAuthenticated />
              )}
            </div>
          </div>
        </div>
        {hamburgerClicked ? (
          <>
            <div
              className="fixed inset-0 backdrop-blur-lg bg-opacity-70 h-screen"
              onClick={closeLeftNavbar}
            ></div>
            <div className="fixed top-0 left-0 h-screen w-[80%] z-30 px-4 pt-4 bg-background animate-slideRight">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <Image
                      src={logoOurastore}
                      className="h-9 w-auto"
                      alt="logo-ourastore"
                    />
                  </div>
                  <div>
                    <CrossIcon handler={closeLeftNavbar} />
                  </div>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <LeftNavbarItem label="Beranda" href="/" />
                    <LeftNavbarItem label="Cek Transaksi" href="/invoices" />
                    <LeftNavbarItem label="Kalkulator" href="/" />
                    <LeftNavbarItem label="Leaderbord" href="/" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <LeftNavbarItem label="Masuk" href="/sign-in" />
                    <LeftNavbarItem label="Daftar" href="/sign-up" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
