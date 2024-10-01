import Link from "next/link";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownSection,
} from "@nextui-org/react";
import {
  DropdownIcon,
  HomeDropdownIcon,
  LogoutIcon,
  SearchIcon,
  SettingIcon,
  UserIcon,
} from "./navbarIcon";
import Image from "next/image";
import ouraCoin from "../assets/payment/oura-coin.webp";

export function NavbarItem({ icon: Icon, label, href }) {
  return (
    <div className="group sm:flex gap-1 items-center border-b-2 border-transparent hover:border-primary h-full hidden">
      <Icon />
      <Link href={href}>
        <span className="font-light text-sm text-secondary-foreground group-hover:text-primary">
          {label}
        </span>
      </Link>
    </div>
  );
}

export function NavbarSearch() {
  return (
    <>
      <button className="border border-border/50 px-3 py-2 rounded-lg flex items-center gap-1 bg-transparent hover:bg-muted/50 duration-500">
        <SearchIcon />
        <span className="hidden sm:block text-secondary-foreground font-light text-sm">
          Search
        </span>
      </button>
    </>
  );
}

export function NavbarLanguage() {
  return (
    <>
      <button className="border border-border/50 px-3 py-2 rounded-lg flex flex-row-reverse items-center gap-1 bg-transparent hover:bg-muted/50 duration-500">
        <DropdownIcon />
        <span className="text-secondary-foreground font-light text-sm">ID</span>
      </button>
    </>
  );
}

export function NavbarAuthenticated({ handler, username }) {
  return (
    <Dropdown className="bg-background">
      <DropdownTrigger>
        <Button radius="sm" className="bg-muted text-secondary-foreground">
          <div className="flex flex-row items-center gap-1">
            <UserIcon />
            <DropdownIcon />
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        itemClasses={{
          base: [
            "text-secondary-foreground",
            "data-[hover=true]:bg-muted",
            "data-[hover=true]:text-secondary-foreground",
          ],
        }}
      >
        <DropdownItem>
          <span className="text-xs font-light">
            Telah masuk sebagai <span className="block">{username}</span>
          </span>
        </DropdownItem>
        <DropdownSection
          classNames={{
            divider: "bg-muted",
          }}
          showDivider
        ></DropdownSection>
        <DropdownItem
          startContent={<Image className="h-4 w-4" src={ouraCoin} />}
        >
          <span className="text-xs font-light">0 Oura Coin</span>
        </DropdownItem>
        <DropdownItem startContent={<HomeDropdownIcon />}>
          <span className="text-xs font-light">Dashboard</span>
        </DropdownItem>
        <DropdownItem startContent={<SettingIcon />}>
          <span className="text-xs font-light">Pengaturan</span>
        </DropdownItem>
        <DropdownItem
          startContent={<LogoutIcon />}
          className="hover:bg-background/50"
          onClick={handler}
        >
          <span className="text-xs font-light">Keluar</span>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export function NavbarNotAuthenticated() {
  return (
    <div className="hidden sm:flex flex-row gap-2 items-center">
      <Link
        className="border border-border/50 px-3 py-2 rounded-lg items-center bg-transparent hover:bg-muted/50 duration-500"
        href="/sign-in"
      >
        <span className="text-secondary-foreground font-light text-sm">
          Masuk
        </span>
      </Link>
      <Link
        className="bg-primary px-3 py-2 rounded-lg items-center hover:bg-primary/50 duration-500"
        href="/sign-up"
      >
        <span className="text-secondary-foreground font-light text-sm">
          Daftar
        </span>
      </Link>
    </div>
  );
}
