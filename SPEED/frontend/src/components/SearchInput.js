import { response } from "express";
import React, {useEffect, useState}  from "react";
import {useParams} from 'react-router-dom';

function SearchDatabase(){
    const 
}






const [search, setSearch] = useState("");

const getSearch = () => {
    fetch("https://ense701-assesment-1b-group-7.herokuapp.com/api/articles/0")
    .then((response) => response.json())
    .then((data) => {
        setSearch()
    })
}