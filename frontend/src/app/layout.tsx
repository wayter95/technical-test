import { AuthProvider } from "@/contexts/auth-context";
import { Header } from '@/components/header'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/globals.css";

const inter = Poppins({ weight: ["400", "500", "600", "700"], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Technical Test',
  description: 'Created by Wayter Paulo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <AuthProvider >
          <>
            <Header />
            {children}
            <ToastContainer position="top-right" autoClose={5000} />
          </>
        </AuthProvider>
      </body>
    </html>
  )
}
