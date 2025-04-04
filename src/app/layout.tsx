import type { Metadata } from "next";
import "./globals.css";
import Header from '@/common/Header';

export const metadata: Metadata = {
  title: "Todo List",
  description: "프론트엔드 단기 심화 과제 제출 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
