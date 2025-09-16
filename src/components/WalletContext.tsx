"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface WalletContextType {
	address: string | null;
	name: string | null;
	connected: boolean;
	connect: (address: string, name: string) => void;
	disconnect: () => void;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
	const [address, setAddress] = useState<string | null>(null);
	const [name, setName] = useState<string | null>(null);
	const [connected, setConnected] = useState(false);
	const [isInitialized, setIsInitialized] = useState(false);

	// Cargar estado desde localStorage al inicializar
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const savedAddress = localStorage.getItem('wallet_address');
			const savedName = localStorage.getItem('wallet_name');
			const savedConnected = localStorage.getItem('wallet_connected') === 'true';

			if (savedAddress && savedName && savedConnected) {
				setAddress(savedAddress);
				setName(savedName);
				setConnected(savedConnected);
			}
			setIsInitialized(true);
		}
	}, []);

	const connect = (address: string, name: string) => {
		setAddress(address);
		setName(name);
		setConnected(true);
		
		// Persistir en localStorage
		if (typeof window !== 'undefined') {
			localStorage.setItem('wallet_address', address);
			localStorage.setItem('wallet_name', name);
			localStorage.setItem('wallet_connected', 'true');
		}
	};

	const disconnect = () => {
		setAddress(null);
		setName(null);
		setConnected(false);
		
		// Limpiar localStorage
		if (typeof window !== 'undefined') {
			localStorage.removeItem('wallet_address');
			localStorage.removeItem('wallet_name');
			localStorage.removeItem('wallet_connected');
		}
	};

	// No renderizar hasta que se haya inicializado
	if (!isInitialized) {
		return null;
	}

	return (
		<WalletContext.Provider
			value={{ address, name, connected, connect, disconnect }}
		>
			{children}
		</WalletContext.Provider>
	);
}

export function useWalletContext() {
	const context = useContext(WalletContext);
	if (context === undefined) {
		throw new Error("useWalletContext must be used within a WalletProvider");
	}
	return context;
}