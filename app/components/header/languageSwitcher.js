import { usePathname, Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useState } from "react";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale(); // Correct way to get current locale
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="w-[80px] h-8 border-none bg-transparent focus:ring-0 focus:ring-offset-0 cursor-pointer"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        {locale ? locale.toUpperCase() : "LANG"}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg z-50">
          {routing.locales.map((loc) => (
            <Link
              key={loc}
              href={pathname}
              locale={loc}
              className="block px-4 py-2 text-black hover:bg-[#DE3101] hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              {loc.toUpperCase()}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}