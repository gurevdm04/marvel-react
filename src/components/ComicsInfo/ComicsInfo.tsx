import { useNavigate } from "react-router-dom";
import style from "./ComicsInfo.module.scss";

export const ComicsInfo = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className={style.wrap}>
      <div>
        <img
          className={style.img}
          src="http://i.annihil.us/u/prod/marvel/i/mg/8/04/58e69de9d1fed.jpg"
          alt=""
        />
      </div>
      <div>
        <h3 className={style.title}>X-Men: Days of Future Past</h3>
        <p className={style.text}>
          Re-live the legendary first journey into the dystopian future of 2013
          - where Sentinels stalk the Earth, and the X-Men are humanity's only
          hope...until they die! Also featuring the first appearance of Alpha
          Flight, the return of the Wendigo, the history of the X-Men from
          Cyclops himself...and a demon for Christmas!?
        </p>
        <p className={style.page}>144 pages</p>
        <p className={style.language}>Language: en-us</p>
        <p className={style.price}>9.99$</p>
      </div>
      <div>
        <p className={style.link} onClick={handleBackClick}>
          Back to all
        </p>
      </div>
    </div>
  );
};
