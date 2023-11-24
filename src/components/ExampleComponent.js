import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ExampleComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.body, color: theme.text }}>
      Content goes here
    </div>
  );
};

export default ExampleComponent;