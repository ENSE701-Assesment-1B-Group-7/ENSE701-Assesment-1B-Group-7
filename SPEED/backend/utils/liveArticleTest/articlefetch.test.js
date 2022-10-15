const axios = require('axios');
const core = require('@actions/core');


async function fetchTest(title, expectedSuccess) {
    try {
        return await axios.get('https://ense701-assesment-1b-group-7.herokuapp.com/api/articles/search/' + title)
        .then(res => {
            data = res.data;
            if (data[0].title === title)
            {
                if(!expectedSuccess)
                {
                    console.log(title);
                    console.log(data);
                    core.setFailed("succeeded on fetch test when expecting fail!");
                }
                else
                {
                    //console.log("Succeeded and failed correctly");
                }
            }
            else
            {
                if (expectedSuccess)
                {
                    console.log(title);
                    core.setFailed("failed on fetch test when expecting success!");
                }
                //console.log("Something wrong with fetch??");
            }
            return data;
        })
    } catch (e) {
        console.log("error on fetch");
        if (!expectedSuccess)
        {
            console.log("error expected");
            return null;
        }
        else
        {
            console.log(e);
            core.setFailed("Failed finding an item that should have been successful!");
        }
    }
}

module.exports = fetchTest;