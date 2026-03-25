import { WalletProvider } from '@/components/wallet/wallet-provider';
import { Navbar } from '@/components/layout/navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <WalletProvider>
          <Navbar />
          <main className="min-h-screen bg-background">
            {children}
          </main>
        </WalletProvider>
      </body>
    </html>
  );
}
