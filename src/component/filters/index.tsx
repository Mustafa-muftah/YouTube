import { useEffect, useState } from "react";
import { isDesktop,  isMobileOnly, isTablet } from "react-device-detect";
import { useAction } from "../../appState/Hooks/useAction";
import { useTypeSelector } from "../../appState/Hooks/useTypedSelector";
import filterIcon from "../../assets/filter.svg";
import "./Filters.scss"
import { videoPublishAfterFilter, videoTypeFilter } from "./filtersHelper";




const Filter:React.FC = () => {

 const [showFilters , setShowFilters] = useState<boolean>(false)
 const {setSearchType , setPublishAfter , getYouTubeList } = useAction()
 const {numberOfResults , searchList , searchInputValue } = useTypeSelector((state => state.search))
 const { searchType , PublishedAfter} = useTypeSelector((state => state.filter))

 useEffect(() => {
  if(searchInputValue.length !== 0){
  getYouTubeList(searchInputValue ,undefined ,searchType , PublishedAfter)
  }

 },[searchType , PublishedAfter ])


 useEffect(()=>{
  if(searchInputValue.length === 0){
    setShowFilters(false)
  }
 },[searchInputValue])

 

  return (
    <div className="filters__containers">
      {( (isDesktop || isTablet) && searchList.length>0 )&& 
       <div className="filter__Wrapper">
        <h3>About {numberOfResults} filtered results</h3>
        <div className="filter__btn">
          <button onClick={() => setShowFilters(!showFilters)} data-testid={"toggle-filter-button"}>
          <img src={filterIcon} alt="filter" />
          <span>Filter</span>
          </button>
        </div>
        </div>
        }
        { (isMobileOnly || showFilters ) &&  
        <>
        <section className="filter__options">
        <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className="select-lists" data-testid="video-type-filter">
        {videoTypeFilter.map((filter) => (
              <option value={filter.value} data-testid={filter.value}>{filter.label}</option>
            ))}
        </select>
        <select value={PublishedAfter}  onChange={(e) => setPublishAfter(e.target.value)} className="select-lists" data-testid="video-publishAfter-filter">
        {videoPublishAfterFilter.map((filter) => (
              <option value={filter.value} data-testid={filter.value}>{filter.label}</option>
            ))}
        </select>
      </section>
      </>       
  }  
    </div>
  );
};

export default Filter;