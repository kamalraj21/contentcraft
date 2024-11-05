const ProgressBar = ({ progress, timeRemaining }) => {
    return (
      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-violet-100">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="font-medium text-violet-900">Progress: {progress}%</span>
          <span className="text-slate-600">Est. time remaining: {timeRemaining}</span>
        </div>
        <div className="h-2 bg-violet-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-violet-400 to-pink-400 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          >
          </div>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;