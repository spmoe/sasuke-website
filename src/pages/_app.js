import { ThemeProvider } from "@/contexts/ThemeProvider";
import "@/styles/globals.css";
import "@/styles/style.scss";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
