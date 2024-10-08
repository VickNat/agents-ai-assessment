import SalespersonLayouts from '@/components/agents/salesperson/SalespersonLayouts';
import React, { ReactNode } from 'react';

interface SalesPersonLayoutProps {
  children: ReactNode;
}

const SalesPersonLayout: React.FC<SalesPersonLayoutProps> = ({ children }) => {
  return (
    <div className="co-founder-layout">
      <SalespersonLayouts>
        {children}
      </SalespersonLayouts>
    </div>
  );
};

export default SalesPersonLayout;