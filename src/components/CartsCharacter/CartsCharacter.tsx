import { Button } from "../Button/Button";
import { CartCharacter } from "../CartCharacter/CartCharacter";
import style from "./CartsCharacter.module.scss";

export const CartsCharacter = () => {
  return (
    <div className={style.wrap}>
      <ul className={style.ul}>
        <CartCharacter />
        <CartCharacter />
        <CartCharacter />
        <CartCharacter />
        <CartCharacter />
      </ul>
      <Button text="LOAD MORE" />
    </div>
  );
};
