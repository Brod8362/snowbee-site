import React, {useState} from 'react'
   
  
const SearchBar = ({keyword, setKeyword}) => {
  const [searchInput, setSearchInput] = useState("");
  // import data to search from api
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
        <div className="search">

        <input 
        id="search-bar"
        type="text" 
        placeholder="search"
        style={BarStyling}
        value={keyword}
        onChange={(e) =>{ keyword = e.target.value }}
        />
        
        </div>     
         
        
}


export default SearchBar;
