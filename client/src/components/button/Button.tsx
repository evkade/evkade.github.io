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
    | "link"
    | "icon";
  size?: "default-size" | "sm" | "lg" | "icon";
  icon?: React.ReactNode;
};

function Button({
  label,
  onClick,
  link,
  variant = "default",
  size = "default-size",
  icon,
}: ButtonProps) {
  if (link == null && onClick == null) {
    throw new Error("Defined button with no link or onClick!");
  }
  if (link != null && onClick != null) {
    throw new Error("Defined button with both link and onClick set!");
  }

  const className = `button button-${variant} button-${size}`;

  const content = (
    <>
      {icon && <span className="button-icon-wrapper">{icon}</span>}
      {label}
    </>
  );

  if (link != null) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={className} // <-- use dynamic class
      >
        {content}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
