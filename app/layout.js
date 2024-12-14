import { Geist_Mono } from 'next/font/google'
 
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/StairTransition";

export const geistMono = Geist_Mono({
	subsets: ['latin'],
	variable: '--font-geist-mono',
	weight: ["100","200","300","400","500","600","700","800"],
});

export const metadata = {
  title: "samson portfolio",
  description: "web developer and freelancer",
  icons: {
    icon: '/favicon.png',
  }, 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={`${geistMono.variable} font-geistSans antialiased`}
      >
        <StairTransition />
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
