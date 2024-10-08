import CofounderLayouts from '@/components/agents/co-founder/CofounderLayouts';
import React, { ReactNode } from 'react';

interface CoFounderLayoutProps {
  children: ReactNode;
}

const CoFounderLayout: React.FC<CoFounderLayoutProps> = ({ children }) => {
  return (
    <div className="co-founder-layout">
      <CofounderLayouts>
        {children}
      </CofounderLayouts>
    </div>
  );
};

export default CoFounderLayout;