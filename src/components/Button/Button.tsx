import style from "./Button.module.scss";

interface Props {
  text: string;
  isGray?: boolean;
  isCenter?: boolean;
  href?: string;
  onClick?: () => any;
}

export const Button: React.FC<Props> = ({
  text,
  isGray,
  isCenter,
  href,
  onClick,
}) => {
  return (
    <a
      href={href}
      className={`${style.button} ${isGray ? style.gray : null} ${
        isCenter ? style.center : null
      }`}
      target="_blank"
      onClick={onClick}
    >
      {text}
    </a>
  );
};
