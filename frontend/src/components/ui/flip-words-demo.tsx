import { FlipWords } from "./flip-words";

interface FlipWordsDemoProps {
  staticTextBefore?: string;
  words: string[];
  staticTextAfter?: string;
  className?: string;
  flipWordsClassName?: string;
}

export default function FlipWordsDemo({
  staticTextBefore = "",
  words,
  staticTextAfter = "",
  className = "",
  flipWordsClassName = "",
}: FlipWordsDemoProps) {
  return (
    <p className={`font-extrabold text-2xl tracking-wide ${className}`}>
      {staticTextBefore}{" "}
      <FlipWords 
      words={words} 
      className={`bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 drop-shadow-lg hover:scale-105 transition-transform ${flipWordsClassName}`} 
      />{" "}
      {staticTextAfter}
    </p>
  );
}
