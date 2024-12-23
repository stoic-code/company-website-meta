import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Navbar.module.css";
import { Button } from "../ui/button";

type TMobileNavMenu = {
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
};

export const menus = [
  {
    title: "Home",
    to: "/",
  },

  {
    title: "Services",
    to: "/services",
  },

  {
    title: "Career",
    to: "/careers",
  },

  {
    title: "Blogs",
    to: "/blogs",
  },
  {
    title: "About Us",
    to: "/about",
  },
];

// Mobile navigation
export const MobileMenu: React.FC<TMobileNavMenu> = ({ state, setState }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      {state && (
        <motion.div
          transition={{ duration: 0.3 }}
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -500, opacity: 0 }}
          className="fixed z-[10000] h-screen w-screen bg-white pt-52 xl:hidden"
        >
          <button
            className="absolute right-6 top-4"
            onClick={() => {
              setState(!state);
            }}
          >
            <X size={32} />
          </button>
          <ul className="text-md flex flex-col gap-8 text-center font-semibold">
            {menus.map((m, idx) => (
              <li key={idx}>
                <Link
                  onClick={() => {
                    setState(!state);
                  }}
                  href={m.to}
                  className={`${styles.link} ${pathname === m.to ? styles.active : null
                    } relative pb-1`}
                >
                  {m.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="my-8 flex items-center justify-center">
            <Button asChild>
              <Link
                onClick={() => {
                  setState(!state);
                }}
                href="/contact"
              >
                Get in Touch
              </Link>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
