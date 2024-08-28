import style from "./ComicsCarts.module.scss";
import { ComicsCart } from "../ComicsCart/ComicsCart";

export const ComicsCarts = () => {
  return (
    <div className={style.wrap}>
      <ComicsCart />
      <ComicsCart />
      <ComicsCart />
      <ComicsCart />
      <ComicsCart />
      <ComicsCart />
      <ComicsCart />
      <ComicsCart />
    </div>
  );
};
