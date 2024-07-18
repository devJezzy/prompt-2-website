import React from 'react';
import dynamic from 'next/dynamic';

interface DynamicComponentProps {
  filePath?: string;
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ filePath }) => {
  const Component = dynamic(() => import(`@/components/collection/${filePath}`).catch((err) => {
    console.error("Failed to load component", err);
    return () => <div>Failed to load component</div>;
  }));

  return (
    <div>
      <Component />
    </div>
  );
};

export default DynamicComponent;