import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export function NavLink({ href, label }: Props) {
  return (
    <Link className="navLink" href={href}>
      {label}
    </Link>
  );
}


