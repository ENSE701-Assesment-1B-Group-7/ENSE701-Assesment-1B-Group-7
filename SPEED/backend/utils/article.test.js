//const submit = require("./liveArticleTest/articlesubmission.test");
const submitTest = require("./liveArticleTest/articlesubmission.test")
const fetchTest = require("./liveArticleTest/articlefetch.test");
const deleteTest = require("./liveArticleTest/articledeletetest.test");
const dummydata = require("./dummydata/articles");

//import submitTest from "./liveArticleTest/articlesubmission.test";
//import fetchTest from "./liveArticleTest/articlefetch.test";
//import deleteTest from "./liveArticleTest/articledeletetest.test";

function getID(title)
{
    return fetchTest(title, true)
    .then(res => {
        data = res[0];
        return data._id;
    });
}

const testData = {
    title: "internalTestTitle",
    authors: "testBunchOfAuthors",
    pubyear: "TestIn2000",
}

/*  This function is inelegant because I don't understand async, but I'll explain it.
    Steps:
        1) Submit testdata
        2) Get the id for the testdata
        3) delete the test data
        4) fetch the dest data and expect to fail to retrieve it
    This tests the LIVE website, but not the functions in the backend
*/

function deleteDataCheck()
{
    console.log("delete Data Check");
    id = "";
    submitTest(testData).then(r => {
        getID(testData.title)
        .then (res => {
            id = res;
            deleteTest(id)
            .then(
                fetchTest(testData.title, false)
                .then(e => {
                    console.log("deleted " + testData.title + ":" + id + " successfully")
                }))
            });
        })
    }

// Simple check to make sure dummy data exists. Will break if there isn't any
function checkDummyData()
{
    for (let e = 0; e < dummydata.length; e++)
    {
        fetchTest(dummydata[e].title, true)
        .then(e => {console.log(e)});
    }
}

// Placeholder script for submitting dummy data to MongoDB
function addDummyData()
{
    for (let e = 0; e < dummydata.length; e++)
    {
        submitTest(dummydata[e]);
    }
}

deleteDataCheck();
checkDummyData();