import React from 'react';
import './TodoSearch.css'
import { TodoContext } from '../TodoContext/TodoContext';

function TodoSearch(){

    const {
        searchValue , 
        setSearchValue
    } = React.useContext(TodoContext)
    return (
        <input 
        className="TodoSearch"
        value={searchValue}
        placeholder="Cortar cebolla"
        onChange={(event) =>{
            
            setSearchValue(event.target.value);
        }}
        />
    );
}

export { TodoSearch };
