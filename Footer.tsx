import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import Logo from "./ui/Logo";
import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-ink">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-8 px-5 py-12 sm:px-8 lg:flex-row lg:justify-between lg:px-12">
        <Logo />

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2">
            {site.nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="font-sans text-[13px] text-ivory/65 transition-colors hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Don Don on Instagram" className="text-ivory/65 transition-colors hover:text-ivory">
            <Instagram className="h-5 w-5" strokeWidth={1.5} />
          </a>
          <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Don Don on Facebook" className="text-ivory/65 transition-colors hover:text-ivory">
            <Facebook className="h-5 w-5" strokeWidth={1.5} />
          </a>
          <span className="hidden h-4 w-px bg-ivory/15 lg:block" aria-hidden="true" />
          <p className="font-sans text-[11px] text-ivory/45">
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
        </div>
      </div>
      <address className="pb-8 text-center font-sans text-[11px] not-italic text-ivory/35">
        {site.address.display} ·{" "}
        <a href={site.phone.href} className="hover:text-ivory/70">
          {site.phone.display}
        </a>
      </address>
    </footer>
  );
}
