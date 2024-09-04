import style from "./ComicsCarts.module.scss";
import { ComicsCart } from "../ComicsCart/ComicsCart";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import {
  fetchComics,
  selectComics,
  setOffsetComics,
} from "../../store/getComicsSlice";
import { Button } from "../Button/Button";
import ContentLoader from "react-content-loader";
import { Grid } from "react-loader-spinner";

const MyLoader = (props: any) => (
  <ContentLoader
    speed={2}
    width={225}
    height={415}
    viewBox="0 0 225 415"
    backgroundColor="#b03b3b"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="225" height="415" />
  </ContentLoader>
);

export const ComicsCarts = () => {
  const dispatch = useAppDispatch();
  const comics = useSelector(selectComics);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const loadMore = () => {
    dispatch(setOffsetComics());
  };

  useEffect(() => {
    if (!isFirstRender) {
      dispatch(fetchComics(comics.offset));
    }
  }, [comics.offset]);

  useEffect(() => {
    if (comics.data.length === 0) {
      dispatch(fetchComics(comics.offset));
    }
    setIsFirstRender(false);
  }, [dispatch, comics.offset]);

  if (comics.status === "failed") return <p>Error: {comics.error}</p>;

  return (
    <>
      <div className={style.wrap}>
        {comics.status === "loading" && comics.offset === 0 ? (
          Array.from({ length: 8 }, (_, index) => <MyLoader key={index} />)
        ) : (
          <>
            {comics.data.map((comics: any, i) => (
              <ComicsCart
                key={i}
                id={comics.id}
                img={comics.thumbnail.path + "." + comics.thumbnail.extension}
                title={comics.title}
                price={comics.prices[0].price}
              />
            ))}
          </>
        )}
      </div>

      {comics.status === "loading" ? (
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
    </>
  );
};
