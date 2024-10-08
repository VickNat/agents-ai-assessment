import HRManagerLayouts from '@/components/agents/hr-manager/HRManagerLayouts';
import React, { ReactNode } from 'react';

interface HRManagerLayoutProps {
  children: ReactNode;
}

const HRManagerLayout: React.FC<HRManagerLayoutProps> = ({ children }) => {
  return (
    <div className="co-founder-layout">
      <HRManagerLayouts>
        {children}
      </HRManagerLayouts>
    </div>
  );
};

export default HRManagerLayout;