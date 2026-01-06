import { Metadata } from "@/node_modules/next/types";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import NavBar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import { menuItemsData } from "./Pages/utils/utils";
import SearchBar from "@/components/SearchBar/SearchBar";

export const metadata: Metadata = {
  title: "Market Price",
  description: "flat,Property,land buy or rent ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavBar MenuData={menuItemsData} />
            <SearchBar />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
