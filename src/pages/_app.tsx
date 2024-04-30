import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/layouts/mainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SuiClientProvider } from "@mysten/dapp-kit";
import dynamic from "next/dynamic";
import { networkConfig } from "../config/networkConfig";
import "@mysten/dapp-kit/dist/index.css";
import { StrictMode } from "react";

const queryClient = new QueryClient();

// 动态导入 WalletProvider，关闭 SSR
const WalletProvider = dynamic(() => import("@mysten/dapp-kit").then(mod => mod.WalletProvider), {
  ssr: false
});

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
