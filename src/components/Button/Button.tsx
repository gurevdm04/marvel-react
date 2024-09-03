import style from "./Button.module.scss";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  isgray?: boolean;
  iscenter?: boolean;
}

export const Button: React.FC<Props> = ({
  isgray = false,
  iscenter = false,
  ...props
}) => {
  return (
    <a
      className={`${style.button} ${isgray ? style.gray : ""} ${
        iscenter ? style.center : ""
      }`}
      {...props}
    >
      {props.text}
    </a>
  );
};
