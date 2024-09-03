import style from "./ComicsPage.module.scss";
import { Banner } from "../../components/Banner/Banner";
import { ComicsCarts } from "../../components/ComicsCarts/ComicsCarts";
import { Button } from "../../components/Button/Button";
import { ComicsInfo } from "../../components/ComicsInfo/ComicsInfo";
import { Route, Routes } from "react-router-dom";

export const ComicsPage = () => {
  return (
    <>
      <Banner />
      <Routes>
        <Route
          path=""
          element={
            <>
              <ComicsCarts />
              <Button text="LOAD MORE" iscenter />
            </>
          }
        />
        <Route path="*" element={<ComicsInfo />} />
      </Routes>
    </>
  );
};
