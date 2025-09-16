interface AssetToSupply {
  symbol: string;
  walletBalance: string;
  apy: string;
  marketSize: string;
}

interface AssetsToSupplyProps {
  assets: AssetToSupply[];
}

export default function AssetsToSupply({ assets }: AssetsToSupplyProps) {
  return (
    <div className="glow-purple bg-black/20 backdrop-blur-sm p-8 border-0 relative circuit-pattern">
      <h3 className="text-glow-pink text-xl font-bold mb-6 uppercase tracking-wider">ASSETS TO SUPPLY</h3>
      
      <div className="space-y-6">
        {assets.map((asset, index) => (
          <div key={index} className="flex items-center justify-between glow-blue bg-black/30 backdrop-blur-sm p-6 border-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">{asset.symbol}</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg">{asset.symbol}</p>
                <p className="text-glow-purple text-sm uppercase tracking-wider">Wallet Balance: {asset.walletBalance}</p>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <div className="text-right">
                <p className="text-gray-400 text-sm uppercase tracking-wider">APY</p>
                <p className="text-white font-bold text-lg">{asset.apy}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm uppercase tracking-wider">Market size</p>
                <p className="text-glow-purple font-bold text-lg">{asset.marketSize}</p>
              </div>
              <button className="glow-blue bg-black/30 hover:bg-black/50 text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 cypherpunk-btn">
                SUPPLY
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
