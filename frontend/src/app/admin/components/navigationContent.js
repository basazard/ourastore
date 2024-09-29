import Link from "next/link";

export function NavigationContent({ href, navbarIcon: NavbarIcon, label }) {
  return (
    <>
      <Link
        href={href}
        className="p-2 flex flex-row gap-2 items-center rounded-md bg-transparent hover:bg-primary duration-500 ease-in-out"
      >
        <NavbarIcon />
        <span>{label}</span>
      </Link>
    </>
  );
}

export function DashboardIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#FFFFFF"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
      </svg>
    </>
  );
}

export function CategoryIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#FFFFFF"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z" />
      </svg>
    </>
  );
}

export function ServiceIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#FFFFFF"
      >
        <rect fill="none" height="24" width="24" />
        <path d="M10,13c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S9.45,13,10,13 M10,11c-1.66,0-3,1.34-3,3s1.34,3,3,3s3-1.34,3-3 S11.66,11,10,11L10,11z M18.5,9l1.09-2.41L22,5.5l-2.41-1.09L18.5,2l-1.09,2.41L15,5.5l2.41,1.09L18.5,9z M21.28,12.72L20.5,11 l-0.78,1.72L18,13.5l1.72,0.78L20.5,16l0.78-1.72L23,13.5L21.28,12.72z M16.25,14c0-0.12,0-0.25-0.01-0.37l1.94-1.47l-2.5-4.33 l-2.24,0.94c-0.2-0.13-0.42-0.26-0.64-0.37L12.5,6h-5L7.2,8.41C6.98,8.52,6.77,8.65,6.56,8.78L4.32,7.83l-2.5,4.33l1.94,1.47 C3.75,13.75,3.75,13.88,3.75,14s0,0.25,0.01,0.37l-1.94,1.47l2.5,4.33l2.24-0.94c0.2,0.13,0.42,0.26,0.64,0.37L7.5,22h5l0.3-2.41 c0.22-0.11,0.43-0.23,0.64-0.37l2.24,0.94l2.5-4.33l-1.94-1.47C16.25,14.25,16.25,14.12,16.25,14z M14.83,17.64l-1.73-0.73 c-0.56,0.6-1.3,1.04-2.13,1.23L10.73,20H9.27l-0.23-1.86c-0.83-0.19-1.57-0.63-2.13-1.23l-1.73,0.73l-0.73-1.27l1.49-1.13 c-0.12-0.39-0.18-0.8-0.18-1.23c0-0.43,0.06-0.84,0.18-1.23l-1.49-1.13l0.73-1.27l1.73,0.73c0.56-0.6,1.3-1.04,2.13-1.23L9.27,8 h1.47l0.23,1.86c0.83,0.19,1.57,0.63,2.13,1.23l1.73-0.73l0.73,1.27l-1.49,1.13c0.12,0.39,0.18,0.8,0.18,1.23 c0,0.43-0.06,0.84-0.18,1.23l1.49,1.13L14.83,17.64z" />
      </svg>
    </>
  );
}

export function AssetIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#FFFFFF"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
      </svg>
    </>
  );
}

export function ItemIcon() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#FFFFFF"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
      </svg>
    </>
  );
}
