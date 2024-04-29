import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layouts/mainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { networkConfig } from "../config/networkConfig";
import "@mysten/dapp-kit/dist/index.css";
import { StrictMode } from "react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <SuiClientProvider networks={networkConfig} defaultNetwork="devnet">
          <WalletProvider autoConnect>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </WalletProvider>
        </SuiClientProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
