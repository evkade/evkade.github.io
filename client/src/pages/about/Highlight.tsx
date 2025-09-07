import { JSX } from "react";

export type HighlightItem = {
  icon: JSX.Element;
  title: string;
  description: string;
};

type HighlightProps = {
  highlight: HighlightItem;
  index: number;
};

function Highlight({ highlight, index }: HighlightProps) {
  return (
    <div
      className="highlight-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="highlight-icon">{highlight.icon}</div>
      <h3 className="highlight-title">{highlight.title}</h3>
      <p className="highlight-description">{highlight.description}</p>
    </div>
  );
}

export default Highlight;
