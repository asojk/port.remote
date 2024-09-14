import { ComponentType } from 'react';

interface ScrabbleProps {
  /* Add prop types here */
}

declare module '../assets/Scrabble.jsx' {
  const Scrabble: ComponentType<ScrabbleProps>;
  export default Scrabble;
}
