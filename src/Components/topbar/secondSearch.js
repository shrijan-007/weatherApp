import './secondSearch.css';
import { useState } from 'react';
import searchbtn from '../../icons/search-interface-symbol.png'
const SecondSearch = ({setSearchValue})=>{
    const [data,setData] = useState("");
    const getData = (x)=>{
        setData(x.target.value);

        
    }
    const handleSearch = ()=>{
        setSearchValue(data);
    }

    return(
        <div className="second-search-container">
            <input type="text" value={data} onChange = {getData} className = 'search-bar' onKeyDown={(e) => e.key === 'Enter' && handleSearch()}/>
            <button type='submit' className='search-btn' onClick={handleSearch} >
                <img src={searchbtn} alt="search" />
            </button>
        </div>
    );
}
export default SecondSearch;