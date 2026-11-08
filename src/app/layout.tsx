import type { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { SITE } from '@/data/site';
import { EnquiryListProvider } from '@/lib/enquiry-list';
import { Header } from '@/components/features/header';
import { Footer } from '@/components/features/footer';
import { MobileDock } from '@/components/features/mobile-dock';
import { EnquiryDrawer } from '@/components/features/enquiry-drawer';
import { Toast } from '@/components/features/toast';

const geist = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Scott's Gadgets | iPhones, iPads, Macs and gaming",
    template: "%s | Scott's Gadgets",
  },
  description:
    'Browse iPhones, iPads, Macs and gaming consoles, then message Scott on WhatsApp for the price, condition and availability.',
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    images: [{ url: '/products/iphone-18-pro-max.jpg', width: 1200, height: 1200, alt: 'iPhone 18 Pro Max' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#f5f6f7',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="min-h-dvh">
        <a
          href="#main"
          className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <EnquiryListProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
          <MobileDock />
          <EnquiryDrawer />
          <Toast />
        </EnquiryListProvider>
      </body>
    </html>
  );
}
