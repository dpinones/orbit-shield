import { useWalletContext } from "../../components/WalletContext";
import {
	FREIGHTER_ID,
	LOBSTR_ID,
	WalletNetwork,
} from "@creit.tech/stellar-wallets-kit";
import { useState } from "react";
import { kit } from "./wallet-kit.constant";

export const useWallet = () => {
	const walletState = useWalletContext();
	const [isConnecting, setIsConnecting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const connectWallet = async (walletId: string) => {
		try {
			setIsConnecting(true);
			setError(null);

			kit.setWallet(walletId);

			const { address } = await kit.getAddress();

			const walletName =
				walletId === FREIGHTER_ID
					? "Freighter"
					: walletId === LOBSTR_ID
						? "LOBSTR"
						: "Unknown Wallet";

			walletState.connect(address, walletName);

			return { success: true, address };
		} catch (error: unknown) {
			const errorMessage =
				(error as Error)?.message || "Error connecting wallet";
			setError(errorMessage);
			console.error("Error connecting wallet:", error);
			return { success: false, error: errorMessage };
		} finally {
			setIsConnecting(false);
		}
	};

	const disconnectWallet = async () => {
		try {
			setError(null);
			// Intentar desconectar del kit si está disponible
			try {
				await kit.disconnect();
			} catch (kitError) {
				console.warn("Kit disconnect failed:", kitError);
			}
			// Siempre desconectar del contexto local
			walletState.disconnect();
			return { success: true };
		} catch (error: unknown) {
			const errorMessage =
				(error as Error)?.message || "Error disconnecting wallet";
			setError(errorMessage);
			console.error("Error disconnecting wallet:", error);
			// Aún así, desconectar del contexto local
			walletState.disconnect();
			return { success: false, error: errorMessage };
		}
	};

	const signTransaction = async (xdr: string) => {
		try {
			setError(null);
			if (!walletState.address) {
				throw new Error("No wallet connected");
			}

			const { signedTxXdr } = await kit.signTransaction(xdr, {
				address: walletState.address,
				networkPassphrase: WalletNetwork.TESTNET,
			});

			return { success: true, signedTxXdr };
		} catch (error: unknown) {
			const errorMessage =
				(error as Error)?.message || "Error signing transaction";
			setError(errorMessage);
			console.error("Error signing transaction:", error);
			return { success: false, error: errorMessage };
		}
	};

	return {
		connectWallet,
		disconnectWallet,
		signTransaction,
		isConnecting,
		error,
		isConnected: walletState.connected,
		walletAddress: walletState.address,
		walletName: walletState.name,
	};
};
