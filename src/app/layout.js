import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200", "300","400", "500","600", "700", "800", "900"], // Specify the weights you need
});

export const metadata = {
  title: "Mentora",
  description: "Dynamo Devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
