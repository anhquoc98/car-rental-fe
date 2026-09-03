import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/data/site";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name + " | Thuê xe ô tô tự lái", template: "%s | " + siteConfig.name },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: ["thuê xe ô tô", "thuê xe tự lái", "cho thuê ô tô"],
  openGraph: { type: "website", locale: "vi_VN", siteName: siteConfig.name, title: siteConfig.name + " | Thuê xe ô tô tự lái", description: siteConfig.description, url: siteConfig.url },
  twitter: { card: "summary_large_image", title: siteConfig.name + " | Thuê xe ô tô tự lái", description: siteConfig.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi" className={beVietnamPro.variable}>
      <body>
        <a className="skip-link" href="#main-content">Chuyển đến nội dung chính</a>
        <Header />
        <main id="main-content" className="min-h-[65vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
