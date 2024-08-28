import style from "./Banner.module.scss";

export const Banner = () => {
  return (
    <div className={style.wrap}>
      <img className={style.img} src="/avengers.png" alt="" />
      <p className={style.text}>
        New comics every week!
        <br /> Stay tuned!
      </p>
      <img className={style.img} src="/avengerslogo.png" alt="" />
    </div>
  );
};
