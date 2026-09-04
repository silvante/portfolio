"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import {MenuIcon, MoveRight, X} from "lucide-react";
import Nav from "@/app/(components)/Nav";
import Link from "next/link";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center p-2 lg:hidden"
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>

      {/* Mobile sidebar */}
      <Dialog open={open} onClose={setOpen} className="lg:hidden">
        {/* Backdrop */}
        <div className="fixed inset-0 z-50 bg-black/30" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white px-5 py-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X />
            </button>
          </div>

            {/* Navigation */}
            <nav className="mt-8 flex flex-col">
                <Link className="px-4 py-4" href="/" onClick={() => setOpen(false)}>
                    Bosh sahifa
                </Link>

                <Link className="px-4 py-4" href="/info" onClick={() => setOpen(false)}>
                    Batafsil
                </Link>

                <Link className="px-4 py-4" href="/projects" onClick={() => setOpen(false)}>
                    Loyihalar
                </Link>

                <Link
                    href="/contacts"
                    onClick={() => setOpen(false)}
                    className="base_btn flex! w-fit items-center gap-2 mt-5"
                >
                    Bog'lanish
                    <MoveRight />
                </Link>
            </nav>
        </DialogPanel>
      </Dialog>
    </>
  );
}