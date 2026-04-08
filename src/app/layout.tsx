import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/Header";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tharun S | Full Stack Developer & Frontend Specialist | React & Next.js | UI Designer",
  description:
    "Tharun S is a Full Stack Developer skilled in React.js, Next.js, Node.js, TypeScript, REST APIs, and scalable web application development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.variable} antialiased`}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem={false}
        >
          <SmoothScroll>
            <Header />
            {children}
            <SpeedInsights />
          </SmoothScroll>{" "}
        </ThemeProvider>
      </body>
    </html>
  );
}
