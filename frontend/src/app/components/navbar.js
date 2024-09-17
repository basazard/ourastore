import Image from "next/image";
import logoOurastore from "../assets/logo-ourastore.webp";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div
        className="fixed top-0 left-0 right-0 z-10 bg-secondary 
      border-b border-border/50 backdrop-filter backdrop-blur-lg bg-opacity-70"
      >
        <div className="px-24">
          <div className="h-[60px] justify-between flex flex-row">
            <div className="flex flex-row gap-4 items-center">
              <Image
                src={logoOurastore}
                className="h-9 w-auto"
                alt="logo-ourastore"
              />
              <div className="group flex gap-0.5 items-center border-b-2 border-transparent hover:border-primary h-full">
                <svg
                  className="h-4 w-5 text-white group-hover:text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />
                </svg>
                <Link href="/">
                  <span className="font-light text-sm text-secondary-foreground group-hover:text-primary">
                    Beranda
                  </span>
                </Link>
              </div>
              <div className="group flex gap-0.5 items-center border-b-2 border-transparent hover:border-primary h-full">
                <svg
                  className="h-4 w-5 text-white group-hover:text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="currentColor"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
                <Link href="/invoices">
                  <span className="font-light text-sm text-secondary-foreground group-hover:text-primary">
                    Cek Transaksi
                  </span>
                </Link>
              </div>
              <div className="group flex gap-0.5 items-center border-b-2 border-transparent hover:border-primary h-full">
                <svg
                  className="h-4 w-5 text-white group-hover:text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="currentColor"
                >
                  <rect fill="none" height="24" width="24" />
                  <g>
                    <path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z" />
                  </g>
                </svg>
                <span className="font-light text-sm text-secondary-foreground group-hover:text-primary">
                  Leaderboard
                </span>
              </div>
              <div className="group flex gap-0.5 items-center border-b-2 border-transparent hover:border-primary h-full">
                <svg
                  className="h-4 w-5 text-white group-hover:text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="currentColor"
                >
                  <g>
                    <rect fill="none" height="24" width="24" />
                  </g>
                  <g>
                    <g>
                      <path d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,19H5V5h14V19z" />
                      <rect height="1.5" width="5" x="6.25" y="7.72" />
                      <rect height="1.5" width="5" x="13" y="15.75" />
                      <rect height="1.5" width="5" x="13" y="13.25" />
                      <polygon points="8,18 9.5,18 9.5,16 11.5,16 11.5,14.5 9.5,14.5 9.5,12.5 8,12.5 8,14.5 6,14.5 6,16 8,16" />
                      <polygon points="14.09,10.95 15.5,9.54 16.91,10.95 17.97,9.89 16.56,8.47 17.97,7.06 16.91,6 15.5,7.41 14.09,6 13.03,7.06 14.44,8.47 13.03,9.89" />
                    </g>
                  </g>
                </svg>
                <span className="font-light text-sm text-secondary-foreground group-hover:text-primary">
                  Kalkulator
                </span>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-row gap-2 items-center">
                <button className="border border-border/50 px-3 py-2 rounded-lg flex items-center gap-1 bg-transparent hover:bg-muted/50 duration-500">
                  <svg
                    className="h-4 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                  </svg>
                  <span className="text-secondary-foreground font-light text-sm">
                    Search
                  </span>
                </button>
                <button className="border border-border/50 px-3 py-2 rounded-lg flex flex-row-reverse items-center gap-1 bg-transparent hover:bg-muted/50 duration-500">
                  <svg
                    className="h-4 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="currentColor"
                  >
                    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
                  </svg>
                  <span className="text-secondary-foreground font-light text-sm">
                    ID
                  </span>
                </button>
              </div>
              <div className="flex flex-row gap-2 items-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
