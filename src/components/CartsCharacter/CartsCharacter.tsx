import { useSelector } from "react-redux";
import {
  fetchCharacters,
  selectCharacters,
  setOffset,
} from "../../store/getCharactersSlice";
import { useAppDispatch } from "../../store/store";
import { Button } from "../Button/Button";
import { CartCharacter } from "../CartCharacter/CartCharacter";
import style from "./CartsCharacter.module.scss";
import { useEffect, useState } from "react";
import { Grid } from "react-loader-spinner";
import ContentLoader from "react-content-loader";

const MyLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={200}
    height={320}
    viewBox="0 0 200 320"
    backgroundColor="#b03b3b"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="100%" height="100%" />
  </ContentLoader>
);

export const CartsCharacter = () => {
  const dispatch = useAppDispatch();
  const characters = useSelector(selectCharacters);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const loadMore = () => {
    dispatch(setOffset());
  };

  useEffect(() => {
    if (!isFirstRender) {
      dispatch(fetchCharacters(characters.offset));
    }
  }, [characters.offset]);

  useEffect(() => {
    if (characters.data.length === 0) {
      console.log("dis");
      dispatch(fetchCharacters(characters.offset));
    }
    setIsFirstRender(false);
  }, [dispatch, characters.offset]);

  if (characters.status === "failed") return <p>Error: {characters.error}</p>;

  return (
    <div className={style.wrap}>
      <ul className={style.ul}>
        {characters.status === "loading" && characters.offset === 0 ? (
          Array.from({ length: 9 }, (_, index) => <MyLoader key={index} />)
        ) : (
          <>
            {characters.data.map((character: any) => (
              <CartCharacter
                key={character.id ? character.id : ""}
                name={character.id ? character.name : ""}
                img={
                  character?.thumbnail.path +
                  "." +
                  character.thumbnail?.extension
                }
              />
            ))}
          </>
        )}
      </ul>

      {characters.status === "loading" ? (
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#9f0013"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass={style.loader}
        />
      ) : (
        <Button onClick={loadMore} text="LOAD MORE" iscenter />
      )}
    </div>
  );
};
