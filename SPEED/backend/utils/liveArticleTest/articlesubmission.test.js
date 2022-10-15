const axios = require('axios');


async function submitTest(testData) {
    try {
        await axios.post('https://ense701-assesment-1b-group-7.herokuapp.com/api/articles/', testData)
        .then (res => {
            console.log(res.data);
            return res.data;
        })
        .catch(err => {
            console.log("error in createBook");
            console.log(err);
        })
    } catch (e) {
        console.log(e);
    }
}

module.exports = submitTest;