import style from "./Button.module.scss";

interface Props {
  text: string;
  isGray?: boolean;
  isCenter?: boolean;
  href?: string;
}

export const Button: React.FC<Props> = ({ text, isGray, isCenter, href }) => {
  return (
    <a
      href={href}
      className={`${style.button} ${isGray ? style.gray : null} ${
        isCenter ? style.center : null
      }`}
    >
      {text}
    </a>
  );
};
