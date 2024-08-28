import style from "./CharactersPage.module.scss";

import { RandomInfoBlock } from "../../components/RandomInfoBlock/RandomInfoBlock";
import { CartsCharacter } from "../../components/CartsCharacter/CartsCharacter";
import { DescriptionBlock } from "../../components/DescriptionBlock/DescriptionBlock";

export const CharactersPage = () => {
  return (
    <>
      <RandomInfoBlock />
      <main className={style.main}>
        <CartsCharacter />
        <DescriptionBlock />
      </main>
    </>
  );
};
