//import articles from "../dummydata/articles.js";
import Styles from "../components/table/Tablestylings.js";
import Table from "../components/table/Table.js";
import tableHeaders from "../components/table/TableHeaders";
import SearchBar from "../components/SearchBar";

import React, {useState} from 'react';
import {useEffect} from 'react';


const SEPractice = () => {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {

    if(search !== "")
    {
      fetch(`https://ense701-assesment-1b-group-7.herokuapp.com/api/articles/search/${search}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        
        if(!Array.isArray(data))
        {
          console.log("Not an array");
          data = [];
        }
        setArticles(data);
      })
    }
  }, [search]);

  return (
    <div>
             <Styles>
             <SearchBar search={search} setSearch={setSearch}/>

               <Table
                data={articles}
                columns={tableHeaders}
               />

            </Styles>
    </div>
  );
}

export default SEPractice;  