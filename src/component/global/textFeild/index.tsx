import { Dispatch, SetStateAction } from "react";
import "./TextFeild.scss";
import { useAction } from "../../../appState/Hooks/useAction";
import { useTypeSelector } from "../../../appState/Hooks/useTypedSelector";
import "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { isMobileOnly } from "react-device-detect";




export const TextFeild: React.FC = () => {
  const { getYouTubeList , search  } = useAction();
 const value = useTypeSelector(state => state.search.searchInputValue)

  const handleClick = () => {
    getYouTubeList(value);
  };


  return (
    <>
      <div className="textFeild__wrapper">
        <input
          value={value}
          onChange={(e) => search(e.target.value)}
          type="text"
          required
          placeholder="Search"
        />
        {value.length > 0 ? (
          <button
            onClick={() => search("")}
            className="textFeild__wrapper removeBtn"
          ></button>
        ) : (
          ""
        )}
        <button className="textFeild__wrapper submit" onClick={handleClick}>
            <FontAwesomeIcon icon={faSearch as IconProp} />
        </button>
      </div>
    </>
  );
};
