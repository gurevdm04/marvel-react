import { Link } from "react-router-dom";
import style from "./ComicsCart.module.scss";

interface Props {
  img: string;
  title: string;
  price: number;
  id: number;
}

export const ComicsCart: React.FC<Props> = ({ id, img, price, title }) => {
  return (
    <Link to={String(id)}>
      <img className={style.img} src={img} alt={title} />
      <h3 className={style.title}>{title}</h3>
      <p className={style.price}>{price != 0 ? `${price}$` : "---"}</p>
    </Link>
  );
};
