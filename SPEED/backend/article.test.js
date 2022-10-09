const axios = require('axios');

async function test() {
    try {
        axios.get('https://ense701-assesment-1b-group-7.herokuapp.com/api/articles/63433e28b2539843c2e4d0aa')
        .then(res => {
            data = res.data;
            console.assert(data.authors === "Joe Mamma");
        });
    } catch (e) {
        console.log(e);
    }
}

test();