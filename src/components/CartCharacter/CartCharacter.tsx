import style from "./CartCharacter.module.scss";

export const CartCharacter = () => {
  return (
    <li className={`${style.list} {style.active}`}>
      <img
        className={style.img}
        src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
        alt=""
      />
      <h3 className={style.title}>ABYSS</h3>
    </li>
  );
};
