import Header from '@/components/Header';
// import TestnetBanner from '@/components/TestnetBanner';
import PoolCard from '@/components/PoolCard';
import UserPositions from '@/components/UserPositions';
import SuppliedPositions from '@/components/SuppliedPositions';
import AssetsToSupply from '@/components/AssetsToSupply';

export default function Home() {
  // Mock data - en una aplicación real esto vendría de APIs o estado
  const poolData = {
    poolName: "TestnetV2 Pool",
    version: "V2",
    status: "Active",
    borrowCapacity: "$37.80",
    backstopBalance: "$0"
  };

  const userPositions = {
    netAPY: "0.00%",
    borrowCapacity: "$37.80"
  };

  const suppliedAssets = [
    {
      symbol: "XLM",
      balance: "100.00",
      apy: ""
    }
  ];

  const assetsToSupply = [
    {
      symbol: "XLM",
      walletBalance: "$799.93",
      apy: "0.00%",
      marketSize: "$96.39K"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Header />
      {/* <TestnetBanner /> */}
      
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Pool Information */}
          <PoolCard {...poolData} />
          
          {/* User Positions */}
          <UserPositions {...userPositions} />
          
          {/* Supplied Positions */}
          <SuppliedPositions assets={suppliedAssets} />
          
          {/* Assets to Supply */}
          <AssetsToSupply assets={assetsToSupply} />
        </div>
      </main>
    </div>
  );
}
