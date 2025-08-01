import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {routing, Locale} from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Event Horizon",
  description: "Build The Future",
};

export default async function RootLayout({ 
  children,
  params,
}) { 
  const {locale} = await params;
  const messages = await getMessages(locale);
  
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
