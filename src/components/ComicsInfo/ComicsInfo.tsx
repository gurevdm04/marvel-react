import { useNavigate } from "react-router-dom";
import style from "./ComicsInfo.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "react-loader-spinner";

export const ComicsInfo = () => {
  const [data, setData] = useState<any>();
  const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=81f0460a514bf19cffa4a097acf2dae6`
      )
      .then((results) => {
        const res = results.data.data.results[0];
        console.log(res);

        setData({
          title: res.title,
          img: res.thumbnail.path + "." + res.thumbnail.extension,
          description: res.textObjects[0]
            ? res.textObjects[0]?.text
            : "no description",
          pageCount: res.pageCount === 0 ? "---" : res.pageCount,
          price: res.prices[0].price,
          language: res.textObjects[0]
            ? res.textObjects[0]?.language
            : "no info",
        });

        setIsLoaded(true);
      });
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className={style.wrap}>
      {isLoaded ? (
        <>
          <div>
            <img className={style.img} src={data.img} alt="" />
          </div>
          <div>
            <h3 className={style.title}>{data.title}</h3>
            <p className={style.text}>{data.description}</p>
            <p className={style.page}>{data.pageCount} pages</p>
            <p className={style.language}>Language: {data.language}</p>
            <p className={style.price}>{data.price}$</p>
          </div>
          <div>
            <p className={style.link} onClick={handleBackClick}>
              Back to all
            </p>
          </div>
        </>
      ) : (
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
    </div>
  );
};
