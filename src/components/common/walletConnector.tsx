import { ConnectButton } from "@mysten/dapp-kit";
// import "@mysten/dapp-kit/dist/index.css";

const WalletConnector: React.FC = () => {
  return (
    <div className="p-4">
      {/* ConnectButton already handles wallet connection logic */}
      <ConnectButton className="btn btn-primary" />
    </div>
  );
};

export default WalletConnector;
