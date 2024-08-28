import { Button } from "../Button/Button";
import style from "./RandomInfoBlock.module.scss";

export const RandomInfoBlock = () => {
  return (
    <div className={style.wrap}>
      <div className={style.randomInfo}>
        <div>
          <img
            className={style.img}
            src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
            alt=""
          />
        </div>
        <div>
          <h2 className={style.title}>THOR</h2>
          <p className={style.text}>
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
          </p>
          <div className={style.btns}>
            <Button text="HOMEPAGE" />
            <Button text="WIKI" isGray />
          </div>
        </div>
      </div>
      <div className={style.getRandomInfo}>
        <img src="/public/decoration.png" alt="decoration" />
        <p className={style.textInversion}>
          Random character for today! Do you want to get to know him better?
        </p>
        <p className={style.textInversion}>Or choose another one</p>
        <Button text="TRY IT" />
      </div>
    </div>
  );
};
