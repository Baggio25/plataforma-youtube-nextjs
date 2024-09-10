"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";

export const Header = () => {
  const [title, setTitle] = useState("CodarSe");
  const [drawer, setDrawer] = useState(false);

  const currentPath = usePathname();

  useEffect(() => {
    setTitle(document.title);
    setDrawer(false);
  }, [currentPath]);

  return (
    <nav className="flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-8">
      <button className="sm:hidden" onClick={() => setDrawer(true)}>
        <MdMenu size={24} />
      </button>

      <ul className="flex gap-4 items-center" tabIndex={drawer ? -1 : undefined}>
        <li className="my-2">
          <Link href="/" className="border-2 rounded-md py-2 px-2 font-bold">
            CODARSE
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/"
            data-active={currentPath === "/"}
            className="data-[active=true]:underline"
          >
            Página Inicial
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="/cursos"
            data-active={currentPath === "/cursos"}
            className="data-[active=true]:underline"
          >
            Cursos
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            href="https://blog.codarse.com"
            target="_blank"
            className="flex gap-1 items-center"
          >
            Blog
            <MdOutlineOpenInNew />
          </Link>
        </li>
      </ul>

      <div 
        data-open={drawer} 
        onClick={() => setDrawer(false)}
        tabIndex={drawer ? 0 : -1}
        className="
          bg-gradient-to-r from-background fixed top-0 left-0 bottom-0 right-0 
          transition-transform data-[open=false]:-translate-x-full"
      >
        
        <ul className="flex flex-col p-4 gap-4 w-60 h-full bg-background" onClick={e => e.stopPropagation()}>
          <li >
            <Link
              href="/"
              data-active={currentPath === "/"}
              className="data-[active=true]:underline"
            >
              Página Inicial
            </Link>
          </li>
          <li >
            <Link
              href="/cursos"
              data-active={currentPath === "/cursos"}
              className="data-[active=true]:underline"
            >
              Cursos
            </Link>
          </li>
          <li >
            <Link
              href="https://blog.codarse.com"
              target="_blank"
              className="flex gap-1 items-center"
            >
              Blog
              <MdOutlineOpenInNew />
            </Link>
          </li>
        </ul>
      </div>

      <h1 className="sm:hidden">{title}</h1>
    </nav>
  );
};
