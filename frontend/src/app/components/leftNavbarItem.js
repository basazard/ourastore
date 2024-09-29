import Link from "next/link";
import { ArrowRightIcon } from "./navbarIcon";

export function LeftNavbarItem({ label, href }) {
  return (
    <>
      <Link href={href}>
        <div className="group flex flex-row justify-between px-2 py-2 bg-transparent hover:bg-muted text-secondary-foreground rounded-lg">
          <span>{label}</span>
          <ArrowRightIcon className="text-transparent group-hover:text-secondary-foreground" />
        </div>
      </Link>
    </>
  );
}
