import { DM_Sans } from "next/font/google";
import { getSite } from "@/lib/getSite";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export async function generateMetadata() {
  const site = await getSite();

  const title = site.seo.metaTitle || "Lumio - HRIS Modern";
  const description =
    site.seo.metaDescription ||
    "Kelola karyawan, absensi, cuti, dan laporan perusahaan dengan lebih mudah bersama Lumio.";

  return {
    metadataBase: new URL("https://https://lumio-roan.vercel.app/"),

    title,
    description,

    openGraph: {
      title,
      description,
      siteName: "Lumio",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Lumio - Kelola Tim Kerja dengan Lebih Mudah",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function RootLayout({ children }) {
  const site = await getSite();

  return (
    <html lang="id">
      <body
        className={dmSans.className}
        style={{
          "--warna-utama": site.warnaUtama,
          "--warna-aksen": site.warnaAksen,
        }}
      >
        {children}
      </body>
    </html>
  );
}
