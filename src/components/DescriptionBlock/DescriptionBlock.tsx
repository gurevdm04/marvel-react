import style from "./DescriptionBlock.module.scss";
import { Button } from "../Button/Button";
import { selectCharacters } from "../../store/getCharactersSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import { useEffect, useState } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";
import { Grid } from "react-loader-spinner";

const Loader = (props: any) => (
  <ContentLoader
    speed={2}
    width={375}
    height={190}
    viewBox="0 0 375 190"
    backgroundColor="#cbc8c8"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="100" ry="100" width="40" height="40" />
    <rect x="49" y="12" rx="0" ry="0" width="326" height="16" />
    <rect x="0" y="53" rx="0" ry="0" width="375" height="35" />
    <rect x="0" y="105" rx="0" ry="0" width="375" height="35" />
    <rect x="0" y="155" rx="0" ry="0" width="375" height="35" />
  </ContentLoader>
);

export const DescriptionBlock = () => {
  const [data, setData] = useState({
    name: "",
    description: "",
    thumbnail: "",
    comics: [],
    homepage: "",
    wiki: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "succeeded">(
    "idle"
  );

  const dispatch = useAppDispatch();
  const { selectedCharacter } = useSelector(selectCharacters);

  useEffect(() => {
    if (selectedCharacter != "none") {
      setStatus("loading");
      axios
        .get(
          `https://gateway.marvel.com:443/v1/public/characters/${selectedCharacter}?apikey=81f0460a514bf19cffa4a097acf2dae6`
        )
        .then((result) => {
          const res = result.data.data.results[0];

          setData({
            name: res.name,
            description: res.description,
            thumbnail: res.thumbnail.path + "." + res.thumbnail.extension,
            comics: res.comics.items,
            homepage: res.urls[0].url,
            wiki: res.urls[1].url,
          });
          setStatus("succeeded");
        });
    }
  }, [selectedCharacter, dispatch]);
  return (
    <aside className={style.wrap}>
      {status === "idle" && (
        <>
          <>
            <h3 className={style.title}>
              Please select a character to see information
            </h3>
            <Loader />
          </>
        </>
      )}
      {status === "loading" && (
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
      )}
      {status === "succeeded" && (
        <>
          <div className={style.header}>
            <div>
              <img className={style.img} src={data.thumbnail} alt="" />
            </div>
            <div>
              <h3 className={style.title}>{data.name}</h3>
              <Button text="HOMEPAGE" href={data.homepage} target="_blank" />
              <Button text="WIKI" isgray href={data.wiki} target="_blank" />
            </div>
          </div>
          <p className={style.text}>{data.description}</p>
          {data.comics.length ? (
            <>
              <h4 className={style.listHeader}>Comics:</h4>
              <ul className={style.list}>
                {data.comics.map(
                  (item: { name: string; resourceURI: string }) => (
                    <li key={item.name} className={style.item}>
                      {item.name}
                    </li>
                  )
                )}
              </ul>
            </>
          ) : null}
        </>
      )}
    </aside>
  );
};
