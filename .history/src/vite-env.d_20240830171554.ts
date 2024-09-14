/// <reference types="vite/client" />

import { ComponentType } from 'react';

// Define the props interface for the Scrabble component if known
// interface ScrabbleProps {
//   // Add prop types here if known
// }

declare module '../assets/Scrabble.jsx' {
  const Scrabble: ComponentType; // or ComponentType<ScrabbleProps> if you have props
  export default Scrabble;
}
