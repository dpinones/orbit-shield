export default function TestnetBanner() {
  return (
    <div className="glow-cyan bg-black/30 backdrop-blur-sm py-4 px-6 text-center relative overflow-hidden">
      <div className="flex items-center justify-center space-x-3">
        <div className="w-4 h-4 bg-cyan-400 transform rotate-45"></div>
        <p className="text-sm font-bold uppercase tracking-wider text-white">
          CLICK HERE TO RECEIVE ASSETS FOR THE BLEND TEST NETWORK
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
    </div>
  );
}
