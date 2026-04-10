// const FloatingShapes = () => {
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
//       {/* Circle */}
//       <span className="absolute top-10 left-10 w-6 h-6 rounded-full bg-white/10 animate-float" />

//       {/* Square */}
//       <span className="absolute top-1/3 right-16 w-5 h-5 bg-white/10 rotate-12 animate-float" />

//       {/* Small circle */}
//       <span className="absolute bottom-20 left-1/4 w-4 h-4 rounded-full bg-white/10 animate-float" />

//       {/* Cross */}
//       <span className="absolute bottom-16 right-1/4 text-white/10 text-xl animate-floatSlow">
//         ✕
//       </span>

//       {/* Location pin */}
//       <span className="absolute top-1/2 left-1/2 text-white/10 text-2xl animate-float">
//         📍
//       </span>

//       {/* Car icon */}
//       <span className="absolute bottom-10 right-10 text-white/10 text-2xl animate-floatReverse">
//         🚗
//       </span>
//     </div>
//   );
// };

// export default FloatingShapes;

const RouteLines = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1000 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 300 C 250 100, 750 100, 950 300"
        stroke="rgba(255, 255, 255, 0.25)"
        strokeWidth="2"
        strokeDasharray="8 12"
        className="animate-route"
      />
      <path
        d="M100 320 C 300 150, 700 150, 900 320"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="2"
        strokeDasharray="6 14"
        className="animate-route"
      />
    </svg>
  );
};

export default RouteLines;
