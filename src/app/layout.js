import "./globals.css";
import { Inter, Roboto, Poppins } from 'next/font/google'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: "Title App",
   description: "Description app",
};

export default function RootLayout({ children }) {
   return (
      <html
         lang="en"
         suppressHydrationWarning={true}
      >
         <body
            suppressHydrationWarning={true}
            className={`${inter.className} body-class`}
         >
            <div className="container">

            <Navbar/>
            {children}
            <Footer/>
            </div>
         </body>
      </html>
   );
}
