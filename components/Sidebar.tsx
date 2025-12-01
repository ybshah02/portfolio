"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navigationData from "@/data/navigation.json";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 top-0 h-full flex flex-col pt-32">
      <ul className="flex flex-col gap-4 ml-48 pl-8">
        {navigationData.map((item) => {
          const isActive = pathname === item.path;
          return (
            <li key={item.id}>
              <Link
                href={item.path}
                className={`text-sm font-light tracking-wide transition-colors ${
                  isActive
                    ? "text-gray-800"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

