import { Inter } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from '@/components/ui/sonner';



const inter = Inter({ subsets: ['latin'] })
export const metadata = {
  title: "S O L V Y T I X | The Future of Workforce Management",
  description: "Solvytix is a workforce management platform that helps businesses manage their workforce efficiently and effectively.",
  image: "/images/logo.png",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       className={inter.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          
          {children}
          <Toaster richColors/>
        </ThemeProvider>
      </body>
    </html>
  );
}
