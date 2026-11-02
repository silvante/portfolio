"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { MenuIcon, MoveRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { contacts, navLinks } from "@/app/data";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Menyuni ochish"
        className="flex size-11 items-center justify-center border border-ink transition-colors duration-200 ease-mech hover:bg-ink hover:text-paper"
      >
        <MenuIcon className="size-5" />
      </button>

      <Dialog open={open} onClose={setOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-ink/40 backdrop-blur-sm duration-200 ease-mech data-closed:opacity-0"
        />

        <DialogPanel
          transition
          className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-line bg-paper duration-300 ease-mech data-closed:translate-x-full"
        >
          {/* panel head — mirrors the header rail height */}
          <div className="flex h-20 shrink-0 items-center justify-between border-b border-line px-5">
            <p className="eyebrow">
              <span className="base_bg block size-1.5" />
              Menyu
            </p>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Menyuni yopish"
              className="flex size-11 items-center justify-center border border-ink transition-colors duration-200 ease-mech hover:bg-ink hover:text-paper"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            <ul>
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.id} className="border-b border-line">
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={clsx(
                        "group flex items-baseline gap-4 px-5 py-5 transition-colors duration-200 ease-mech",
                        isActive ? "bg-paper-2" : "hover:bg-paper-2"
                      )}
                    >
                      <span
                        className={clsx(
                          "font-mono text-xs",
                          isActive ? "base_text" : "text-ink-3"
                        )}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span className="font-display text-2xl font-semibold tracking-tight">
                        {link.label}
                      </span>

                      <MoveRight className="ml-auto size-5 shrink-0 self-center text-ink-3 transition-transform duration-200 ease-mech group-active:translate-x-1" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* panel foot */}
          <div className="shrink-0 space-y-4 border-t border-line px-5 py-6">
            <Link
              href="/contacts"
              onClick={() => setOpen(false)}
              className="base_btn w-full"
            >
              Bog&apos;lanish
              <MoveRight className="size-4" />
            </Link>

            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {contacts.map((c) => (
                <a
                  key={c.id}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-link text-sm"
                >
                  {c.name}
                </a>
              ))}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
}
