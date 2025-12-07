const ChristmasLights = () => {
  const colors = ['#ff0000', '#00ff00', '#ffff00', '#0099ff', '#ff6600', '#ff00ff'];
  const lightsCount = 30;

  return (
    <div className="absolute bottom-0 left-0 right-0 translate-y-full pointer-events-none z-40 overflow-hidden">
      {/* Wire */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-green-900" />
      
      {/* Lights */}
      <div className="flex justify-between px-2">
        {Array.from({ length: lightsCount }).map((_, i) => {
          const color = colors[i % colors.length];
          const delay = (i * 0.15) % 2;
          
          return (
            <div key={i} className="flex flex-col items-center">
              {/* Wire to bulb */}
              <div className="w-[1px] h-2 bg-green-900" />
              {/* Bulb */}
              <div
                className="w-3 h-4 rounded-full animate-twinkle"
                style={{
                  backgroundColor: color,
                  boxShadow: `0 0 8px ${color}, 0 0 12px ${color}`,
                  animationDelay: `${delay}s`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChristmasLights;
