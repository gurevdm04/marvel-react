import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { Button } from "../Button/Button";
import style from "./RandomInfoBlock.module.scss";
import {
  fetchRandomInfo,
  selectRandomInfo,
} from "../../store/getRandomInfoSlice";
import { useEffect } from "react";

import ContentLoader from "react-content-loader";

const Loading = (props: any) => (
  <ContentLoader
    speed={2}
    width={"100%"}
    height={"100%"}
    viewBox="0 0 460 180"
    backgroundColor="#b03b3b"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="9" ry="9" width="180" height="180" />
    <rect x="210" y="0" rx="10" ry="10" width="250" height="25" />
    <rect x="210" y="40" rx="10" ry="10" width="250" height="80" />
    <rect x="210" y="140" rx="10" ry="10" width="100" height="40" />
    <rect x="340" y="139" rx="10" ry="10" width="100" height="40" />
  </ContentLoader>
);

export const RandomInfoBlock = () => {
  const dispatch = useAppDispatch();
  const randomInfoState = useSelector(selectRandomInfo);

  const handleFetchUser = () => {
    dispatch(fetchRandomInfo());
  };

  useEffect(() => {
    dispatch(fetchRandomInfo());
  }, [dispatch]);

  if (randomInfoState.status === "failed") {
    handleFetchUser();
    return <Loading />;
  }

  return (
    <div className={style.wrap}>
      <div className={style.randomInfo}>
        {randomInfoState.status === "succeeded" ? (
          <>
            <div className={style.imgBlock}>
              <img
                className={style.img}
                src={randomInfoState.data?.thumbnail}
                alt=""
              />
            </div>
            <div>
              <h2 className={style.title}>{randomInfoState.data?.name}</h2>
              <p className={style.text}>{randomInfoState.data?.description}</p>
              <div className={style.btns}>
                <Button text="HOMEPAGE" href={randomInfoState.data?.detail} />
                <Button text="WIKI" isgray href={randomInfoState.data?.wiki} />
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
      <div className={style.getRandomInfo}>
        <img src="/public/decoration.png" alt="decoration" />
        <p className={style.textInversion}>
          Random character for today! Do you want to get to know him better?
        </p>
        <p className={style.textInversion}>Or choose another one</p>
        <Button text="TRY IT" onClick={handleFetchUser} />
      </div>
    </div>
  );
};
