import style from "./Button.module.scss";

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  isgray?: boolean;
  iscenter?: boolean;
  isdisable?: boolean;
}

export const Button: React.FC<Props> = ({
  isgray = false,
  iscenter = false,
  isdisable = false,
  ...props
}) => {
  return (
    <a
      className={`${style.button} ${isgray ? style.gray : ""} ${
        iscenter ? style.center : ""
      } ${isdisable ? style.disabled : ""}`}
      aria-disabled={isdisable}
      role={isdisable ? "button" : undefined}
      {...props}
    >
      {props.text}
    </a>
  );
};
