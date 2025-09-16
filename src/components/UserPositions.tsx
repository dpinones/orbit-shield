interface UserPositionsProps {
  netAPY: string;
  borrowCapacity: string;
}

export default function UserPositions({ netAPY, borrowCapacity }: UserPositionsProps) {
  return (
    <div className="glow-purple bg-black/20 backdrop-blur-sm p-8 border-0 relative circuit-pattern">
      <h3 className="text-glow-pink text-xl font-bold mb-6 uppercase tracking-wider">YOUR POSITIONS</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">Net APY</p>
          <p className="text-glow-blue font-bold text-2xl">{netAPY}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">Borrow Capacity</p>
          <p className="text-glow-purple font-bold text-2xl">{borrowCapacity}</p>
        </div>
      </div>

      <div className="flex items-center justify-between glow-cyan bg-black/30 backdrop-blur-sm p-6 border-0">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-white font-bold uppercase tracking-wider">Claim Pool Emissions</span>
        </div>
        <button className="glow-purple bg-black/30 hover:bg-black/50 text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 cypherpunk-btn">
          ADD BLND Trustline
        </button>
      </div>
    </div>
  );
}
