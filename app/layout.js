// app/layout.js
import "./globals.css";
import {Poppins ,Fira_Code} from "next/font/google"
import ThemeWrapper from  "@/components/ThemeWrapper"


const poppinsFont = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700"],
});

const firaCodeFont = Fira_Code({ 
  subsets: ["latin"], 
 
});

export const metadata = {
  title: "Rida Portfolio",
  description: "Creative full-stack web developer portfolio",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png", 
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppinsFont.variable} ${firaCodeFont.variable} antialiased`}>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
