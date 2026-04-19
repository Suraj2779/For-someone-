import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "For you 🌸",
  description: "Kuch kehna tha...",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${quicksand.className} select-none antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
