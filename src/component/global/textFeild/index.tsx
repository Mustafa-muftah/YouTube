import "./TextFeild.scss";
import { useAction } from "../../../appState/Hooks/useAction";
import { useTypeSelector } from "../../../appState/Hooks/useTypedSelector";
import "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from '@fortawesome/free-solid-svg-icons'




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
          data-testid={"text-feild"}
          value={value}
          onChange={(e) => search(e.target.value)}
          type="text"
          required
          placeholder="Search"
        />
        {value.length > 0 ? (
          <button
            data-testid={"remove-button"}
            onClick={() => search("")}
            className="textFeild__wrapper removeBtn"
          ></button>
        ) : (
          ""
        )}
        <button  data-testid={"search-button"} className="textFeild__wrapper submit" onClick={handleClick}>
            <FontAwesomeIcon icon={faSearch as IconProp} />
        </button>
      </div>
    </>
  );
};
