import style from "./DescriptionBlock.module.scss";
import { Button } from "../Button/Button";

export const DescriptionBlock = () => {
  return (
    <div className={style.wrap}>
      <div className={style.header}>
        <div>
          <img
            className={style.img}
            src="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"
            alt=""
          />
        </div>
        <div>
          <h3 className={style.title}>LOKI</h3>
          <Button text="HOMEPAGE" />
          <Button text="WIKI" isgray />
        </div>
      </div>
      <p className={style.text}>
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
      </p>
      <h4 className={style.listHeader}>Comics:</h4>
      <ul className={style.list}>
        <li className={style.item}>
          All-Winners Squad: Band of Heroes (2011) #3
        </li>{" "}
        <li className={style.item}>
          All-Winners Squad: Band of Heroes (2011) #3
        </li>{" "}
        <li className={style.item}>
          All-Winners Squad: Band of Heroes (2011) #3
        </li>{" "}
        <li className={style.item}>
          All-Winners Squad: Band of Heroes (2011) #3
        </li>{" "}
        <li className={style.item}>
          All-Winners Squad: Band of Heroes (2011) #3
        </li>
      </ul>
    </div>
  );
};
