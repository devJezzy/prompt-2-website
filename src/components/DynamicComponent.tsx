import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

interface DynamicComponentProps {
  filePath?: string;
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ filePath }) => {
  const [Component, setComponent] = useState<React.FC<any> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    if (filePath) {
      import(`@/components/collection/${filePath}`)
        .then((module) => {
          if (isMounted) {
            setComponent(() => module.default);
          }
        })
        .catch((err) => {
          console.error("Failed to load component", err);
          setError("Failed to load component");
        });
    }

    return () => {
      isMounted = false;
    };
  }, [filePath]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!Component) {
    return <div>Loading...</div>;
  }

  // Set display name after component is loaded
  Component.displayName = `DynamicComponent_${filePath}`;

  return (
    <div>
      <Component />
    </div>
  );
};

export default DynamicComponent;
  