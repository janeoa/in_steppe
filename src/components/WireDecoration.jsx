import React from 'react';

import Wire4 from '../assets/Vector.svg?react';
import Wire2 from '../assets/Vector-1.svg?react';
import Wire3 from '../assets/Vector-2.svg?react';
import Wire1 from '../assets/Vector-3.svg?react';

function WireDecoration({ className = '' }) {
  return (
    <div className={`w-full flex justify-center flex-wrap pointer-events-none ${className}`}>
      <Wire1 className="w-full h-auto opacity-80 py-5" />
      <Wire2 className="w-full h-auto opacity-80 py-5" />
      <Wire3 className="w-full h-auto opacity-80 py-5" />
      <Wire4 className="w-full h-auto opacity-80 py-5" />
    </div>
  );
}

export default WireDecoration;
