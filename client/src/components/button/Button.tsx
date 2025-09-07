import "./Button.css";

type ButtonProps = {
  label: string;
  onClick?: () => void;
  link?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default-size" | "sm" | "lg" | "icon";
};

function Button({
  label,
  onClick,
  link,
  variant = "default",
  size = "default-size",
}: ButtonProps) {
  if (link == null && onClick == null) {
    throw new Error("Defined button with no link or onClick!");
  }
  if (link != null && onClick != null) {
    throw new Error("Defined button with both link and onClick set!");
  }

  const className = `button button-${variant} button-${size}`;

  if (link != null) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={className} // <-- use dynamic class
      >
        {label}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
