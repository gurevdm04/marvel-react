import { useSelector } from "react-redux";
import {
  changeSelectedCharacter,
  selectCharacters,
} from "../../store/getCharactersSlice";
import style from "./CartCharacter.module.scss";
import { useAppDispatch } from "../../store/store";

interface Props {
  img: string;
  name: string;
  id: number;
}

export const CartCharacter: React.FC<Props> = ({ name, img, id }) => {
  const dispatch = useAppDispatch();
  const { selectedCharacter } = useSelector(selectCharacters);

  return (
    <li
      onClick={() => {
        dispatch(changeSelectedCharacter(id));
      }}
      className={`${style.list} ${
        selectedCharacter === id ? style.active : ""
      }`}
    >
      <img className={style.img} src={img} alt="" />
      <h3 className={style.title}>{name}</h3>
    </li>
  );
};
