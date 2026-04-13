import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MIS職涯個人網站｜鹿島浩市',
  description:
    '以資訊管理學系二年級學生視角整理的個人職涯網站，內容包含自我介紹、職涯測驗結果、理想 MIS 職缺、自傳履歷與未來規劃。',
  keywords: ['MIS', '資訊管理', '個人網站', '履歷網站', '靜宜大學'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
