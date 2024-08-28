import { Link } from "react-router-dom";
import style from "./ComicsCart.module.scss";

export const ComicsCart = () => {
  
  return (
    <Link to="ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB">
      <img
        className={style.img}
        src="http://i.annihil.us/u/prod/marvel/i/mg/8/04/58e69de9d1fed.jpg"
        alt=""
      />
      <h3 className={style.title}>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</h3>
      <p className={style.price}>9.99$</p>
    </Link>
  );
};
