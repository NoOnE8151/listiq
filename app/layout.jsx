import { riot, inter, poppins } from "./fonts/index";
import "./globals.css";

export const metadata = {
  title: {
    default:
      "Listiq – AI E-Commerce Listing Generator for High-Ranking Product Listings",
    template: "%s | Listiq",
  },
  description:
    "Listiq is an AI-powered e-commerce listing platform that generates highly SEO-optimized product titles, descriptions, and tags to improve marketplace visibility and conversions.",

  keywords: [
    "ecommerce listing generator",
    "AI product listing",
    "SEO product description",
    "amazon listing optimization",
    "flipkart listing SEO",
    "product title generator",
    "ecommerce seller tools",
    "marketplace SEO",
  ],

  authors: [{ name: "Listiq Team" }],
  category: "technology",

  alternates: {
    canonical: "https://listiq.ai",
  },

  openGraph: {
    title: "Listiq – AI-Generated SEO Listings for E-Commerce Sellers",
    description:
      "Generate high-ranking e-commerce product listings with AI. Listiq creates SEO-optimized titles, descriptions, and tags that help sellers rank and sell more.",
    url: "https://listiq.ai",
    siteName: "Listiq",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Listiq – AI E-Commerce Listing Generator",
    description:
      "Create SEO-optimized product titles, descriptions, and tags using AI to boost visibility and sales on e-commerce platforms.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} ${riot.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
