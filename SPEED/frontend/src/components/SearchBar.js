//import React, {useState} from 'react';

const SearchBar = ({search, setSearch}) => {

    /* useState 1st argument is variable, 2nd is function that is passed a value to assign to 1st*/
    //const [search, setSearch] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        console.log(search)
    }
    return (
        <div>
            <form onClick={handleClick}>
                <input
                    type="text"
                    required
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder=" Search for an Article ...">
                </input>

            </form>
        </div>
    )
}

export default SearchBar;