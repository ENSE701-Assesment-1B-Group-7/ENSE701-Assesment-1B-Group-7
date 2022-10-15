const axios = require('axios');

async function editTest(id, importdata) {
    try {
        return await axios.put('https://ense701-assesment-1b-group-7.herokuapp.com/api/articles/' + id, importdata)
        .then(res => {
            data = res.data;
            if (data.msg === 'Updated successfully')
            {
                //console.log("Updated successfully");
            }
            else
            {
                //console.log("Something wrong with edit?");
            }
            return data;
        })
        .catch(err => {
            console.log(err);
        })
        ;
    } catch (e) {
        console.log(e);
    }
}

module.exports = editTest;