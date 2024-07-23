// pages/_app.tsx
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { TripProvider } from "@/context/TripContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TripProvider>
      <Component {...pageProps} />
    </TripProvider>
  );
}

export default MyApp;
