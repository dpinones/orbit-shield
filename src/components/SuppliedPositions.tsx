interface Asset {
  symbol: string;
  balance: string;
  apy?: string;
}

interface SuppliedPositionsProps {
  assets: Asset[];
}

export default function SuppliedPositions({ assets }: SuppliedPositionsProps) {
  return (
    <div className="glow-blue bg-black/20 backdrop-blur-sm p-8 border-0 relative circuit-pattern">
      <h3 className="text-glow-blue text-xl font-bold mb-6 uppercase tracking-wider">YOUR SUPPLIED POSITIONS</h3>
      
      <div className="space-y-6">
        {assets.map((asset, index) => (
          <div key={index} className="flex items-center justify-between glow-purple bg-black/30 backdrop-blur-sm p-6 border-0">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">{asset.symbol}</span>
              </div>
              <div>
                <p className="text-white font-bold text-lg">{asset.symbol}</p>
                <p className="text-gray-400 text-sm uppercase tracking-wider">Balance: {asset.balance}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              {asset.apy && (
                <div className="text-right">
                  <p className="text-gray-400 text-sm uppercase tracking-wider">APY</p>
                  <p className="text-white font-bold text-lg">{asset.apy}</p>
                </div>
              )}
              <button className="glow-purple bg-black/30 hover:bg-black/50 text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 cypherpunk-btn">
                WITHDRAW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
