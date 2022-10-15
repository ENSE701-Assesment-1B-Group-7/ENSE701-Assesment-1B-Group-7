const axios = require('axios');

async function deleteTest(id) {
    try {
        await axios.delete('https://ense701-assesment-1b-group-7.herokuapp.com/api/articles/' + id)
        .then(res => {
            data = res.data;
            if (data.mgs === "Article entry deleted successfully")
            {
                console.log("Deleted Successfully");
                console.log(data);
            }
            else
            {
                console.log("Something wrong?");
                console.log(data);
            }
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = deleteTest;