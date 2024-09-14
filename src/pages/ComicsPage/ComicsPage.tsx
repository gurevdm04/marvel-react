import style from "./ComicsPage.module.scss";
import { Banner } from "../../components/Banner/Banner";
import { ComicsCarts } from "../../components/ComicsCarts/ComicsCarts";
import { Button } from "../../components/Button/Button";
import { ComicsInfo } from "../../components/ComicsInfo/ComicsInfo";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../../store/store";
import { useSelector } from "react-redux";
import {
  changeSelectedCharacter,
  selectCharacters,
} from "../../store/getCharactersSlice";

export const ComicsPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeSelectedCharacter("none"));
  }, []);
  return (
    <>
      <Banner />
      <Routes>
        <Route path="" element={<ComicsCarts />} />
        <Route path=":id" element={<ComicsInfo />} />
      </Routes>
    </>
  );
};
