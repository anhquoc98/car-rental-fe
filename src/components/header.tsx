import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/", label: "Trang chủ" },
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/ve-chung-toi", label: "Về chúng tôi" },
  { href: "/tin-tuc", label: "Tin tức" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="container-page flex min-h-20 items-center justify-between gap-4 py-4">
        <Link
          className="inline-flex shrink-0 items-center"
          href="/"
          aria-label="AK Car Rental - Trang chủ"
        >
          <Image
            src="/logo_AK.svg"
            alt="AK Car Rental"
            width={127}
            height={79}
            priority
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav aria-label="Điều hướng chính" className="hidden sm:block">
          <ul className="flex items-center gap-x-6 text-base font-semibold text-brand-blue-dark">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-brand-green" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group relative sm:hidden">
          <summary
            className="flex size-11 cursor-pointer list-none items-center justify-center rounded-lg border border-brand-blue/30 text-brand-blue-dark hover:bg-brand-blue/5 [&::-webkit-details-marker]:hidden"
            aria-label="Mở menu điều hướng"
          >
            <svg
              aria-hidden="true"
              className="size-6 group-open:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              aria-hidden="true"
              className="hidden size-6 group-open:block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </summary>
          <nav
            aria-label="Điều hướng trên điện thoại"
            className="absolute right-0 top-14 z-40 w-64 rounded-xl border border-brand-blue/20 bg-white p-2 shadow-xl"
          >
            <ul className="font-semibold text-brand-blue-dark">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="block rounded-lg px-4 py-3 hover:bg-brand-green-light/15 hover:text-brand-green"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
