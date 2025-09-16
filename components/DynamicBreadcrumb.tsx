"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";


const DynamicBreadcrumb = () => {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const isLast = index === segments.length - 1;

    const label = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return (
      <span key={href} className="flex items-center">
        {!isLast ? (
          <>
            <Link href={href} className="text-blue-600 hover:underline">
              {label}
            </Link>
            <span className="mx-2">/</span>
          </>
        ) : (
          <span className="text-gray-500">{label}</span>
        )}
      </span>
    );
  });

  return (
    <nav aria-label="breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center space-x-1">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
          
        <span className="mx-2">/</span>
        </li>
        {breadcrumbs}
      </ol>
    </nav>
  );
};

export default DynamicBreadcrumb;
