import articles from "../dummydata/articles.js";
import Styles from "../components/table/Tablestylings.js";
import Table from "../components/table/Table.js";
import tableHeaders from "../components/table/TableHeaders";
import SearchBar from "../components/SearchBar";

import React, {useState} from 'react';
//import {useEffect} from 'react';


const SEPractice = () => {
  const [search, setSearch] = useState("");
  
  /*
  // Tried to search articles title, author, pubyear, and isbn
  // if search is included in any of attributes then assign that 
  // array of objects to displayArticle

  var displayArticle;
  
  useEffect(() => {

    if([] !== articles.filter((article) => article.title.includes(search)))
    {
      displayArticle = articles.filter((article) => article.title.includes(search));
    }
    else if ([] !== articles.filter((article) => article.authors.includes(search))) 
    {
      displayArticle = articles.filter((article) => article.authors.includes(search));
    }
    else if ([] !== articles.filter((article) => article.pubyear.includes(search))) 
    {
      displayArticle = articles.filter((article) => article.pubyear.includes(search));
    } 
    else if ([] !== articles.filter((article) => article.isbn.includes(search))) 
    {
      displayArticle = articles.filter((article) => article.isbn.includes(search));
    } 
    else 
    {
      displayArticle = articles;
    }

    console.log(displayArticle);
  })
  */

  /*
  // First attempt to fetch json data from database
  // had issue with Reason: CORS header ‘Access-Control-Allow-Origin’ missing
  // fix is meant to be 
  // app.use(
  //  cors({
  //    origin: "*",
  //    methods: ['GET']
  //  }))

  useEffect(() => {
    fetch("https://ense701-assesment-1b-group-7.herokuapp.com/api/articles/")
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
  }, []);
*/

/*
  // Second attempt same issue as above
  const [data, setData] = useState([]);

  const GetData = () => {
    fetch("https://ense701-assesment-1b-group-7.herokuapp.com/api/articles/")
    .then((responce) => responce.json())
    .then((json) => {
      console.log(json);
      setData(json);
    })
  }

  useEffect(() => {
    GetData();
    console.log(data);
  }, []);
  */


  return (
    <div>
             <Styles>
             <SearchBar search={search} setSearch={setSearch}/>

               <Table
                data={
                  articles.filter((article) => article.title.includes(search))
                }
                columns={tableHeaders}
               />

            </Styles>
    </div>
  );
}

export default SEPractice;  