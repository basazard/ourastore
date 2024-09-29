import Link from "next/link";

export function AuthButton({ icon: Icon, label, ...props }) {
  return (
    <>
      <button
        type="submit"
        className="group relative items-center justify-center bg-primary p-2 rounded-md text-sm hover:bg-primary/50 duration-500 ease-in-out"
      >
        <span className="absolute left-2">
          <Icon {...props} />
        </span>
        {label}
      </button>
    </>
  );
}

export function NavigationButton({ icon: Icon, href, label, ...props }) {
  return (
    <>
      <Link
        href={href}
        className="group relative items-center justify-center bg-muted p-2 rounded-md text-sm hover:bg-muted/50 duration-500 ease-in-out"
      >
        <span className="absolute left-2">
          <Icon {...props} />
        </span>
        {label}
      </Link>
    </>
  );
}
