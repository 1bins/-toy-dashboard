import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-pretendard'
})

export const metadata: Metadata = {
  title: "Toy Dashboard",
  description: "토이프로젝트 - 대시보드 만들기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
