interface PoolCardProps {
  poolName: string;
  version: string;
  status: string;
  borrowCapacity: string;
  backstopBalance: string;
}

export default function PoolCard({ 
  poolName, 
  version, 
  status, 
  borrowCapacity, 
  backstopBalance 
}: PoolCardProps) {
  return (
    <div className="glow-blue bg-black/20 backdrop-blur-sm p-8 border-0 relative circuit-pattern">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
        <div className="flex items-center space-x-4 mb-6 lg:mb-0">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full"></div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{poolName}</h2>
            <span className="glow-purple bg-black/30 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
              {version}
            </span>
          </div>
        </div>
        <button className="glow-cyan bg-black/30 hover:bg-black/50 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 cypherpunk-btn">
          EXPLORE POOLS
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">POOL STATUS</p>
          <p className="text-glow-blue font-bold text-xl">{status}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">BORROW CAPACITY</p>
          <p className="text-glow-purple font-bold text-xl">{borrowCapacity}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2 uppercase tracking-wider">Backstop Balance</p>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-glow-purple font-bold text-xl">{backstopBalance}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
