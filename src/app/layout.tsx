import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Provider } from "~/components/ui/provider";
import { Inter } from "next/font/google";
import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = `Convert HTML to PDF or Image Seamlessly with Our TailwindCSS Tool`;
const description = `Effortlessly transform your HTML files into PDFs or images using our advanced tool, designed specifically for TailwindCSS enthusiasts. Experience a smooth conversion process, perfect for developers and designers alike.`;

export const metadata: Metadata = {
  title,
  description,
  keywords: ["tailwindpdf", "tailwindcss", "pdf"],
  applicationName: "tailwindpdf",
  metadataBase: new URL("https://tailwindpdf.com"),

  openGraph: {
    title,
    description,
    url: "https://tailwindpdf.com",
    siteName: "tailwindpdf",
    images: [
      {
        url: "/site-image.png",
        width: 1260,
        height: 600,
      },
    ],
    locale: "en-US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.variable} lang="en" suppressHydrationWarning>
      <head>
        <GoogleAnalytics />
      </head>
      <body>
        <Provider defaultTheme="light" enableSystem={false}>
          {children}
        </Provider>
      </body>
    </html>
  );
}

function GoogleAnalytics() {
  const gaId = "310496417";
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js? 
        id=${gaId}`}
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `,
        }}
      ></Script>
    </>
  );
}
