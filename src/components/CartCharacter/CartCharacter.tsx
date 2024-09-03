import style from "./CartCharacter.module.scss";

interface Props {
  img: string;
  name: string;
}

export const CartCharacter: React.FC<Props> = ({ name, img }) => {
  return (
    <li className={`${style.list} {style.active}`}>
      <img className={style.img} src={img} alt="" />
      <h3 className={style.title}>{name}</h3>
    </li>
  );
};
