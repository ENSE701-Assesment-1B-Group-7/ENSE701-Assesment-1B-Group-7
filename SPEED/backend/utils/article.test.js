const submitTest = require("./liveArticleTest/articlesubmission.test")
const fetchTest = require("./liveArticleTest/articlefetch.test");
const deleteTest = require("./liveArticleTest/articledeletetest.test");
const editTest = require("./liveArticleTest/articleedit.test");
const core = require('@actions/core');


const dummydata = require("./dummydata/articles");
const dummydata2 = require("./dummydata/articles2");

let testData = {
    title: "internalTestTitle",
    authors: "testBunchOfAuthors",
    pubyear: "TestIn2000",
}


/*  UNIT TEST FOR LIVE ARTICLE SEARCH/SUBMIT/DELETE

    In this file we call, and retrieve from, the live api on heroku
    It will call and retrieve dummy data from heroku to make sure it's all working correctly

    If heroku is ever down, or we're ever accessing the api/mongodb incorrectly, this unit test should fail!
*/  

function main()
{
    deleteDataCheck();
    checkDummyData();

    // Commented out unless we need to submit more data
    //addDummyData();
}

// Simple check to make sure dummy data exists. Will break if there isn't any
function checkDummyData()
{
    console.log("checking dummy data in a new thread");
    for (let e = 0; e < dummydata2.length; e++)
    {
        fetchTest(dummydata2[e].title, true);
        //.then(e => {console.log(e)});
    }
}

//

/*  This function is inelegant because I don't understand async, but I'll explain it.
    Steps:
        1) Submit testdata
        2) Get the id for the testdata
        3) Edit the test data with more test data
        4) delete the test data
        5) fetch the dest data and expect to fail to retrieve it
    This tests the LIVE website, but not the functions in the backend
*/

function deleteDataCheck()
{
    console.log("delete Data Check");
    id = "";
    submitTest(testData)
    .then(r => {
        getID(testData.title)
        .then (res => {
            id = res;
            testData.pubyear="BackTest";
            editTest(id, testData)
            .then(l => {
                fetchTest(testData.title, true)
                .then (lo => {
                    data = lo[0];
                    if (data.pubyear !== testData.pubyear)
                    {
                        console.log("Did not correctly edit. Failing unit test");
                        core.setFailed("Incorrectly edited! Failing Test");
                    }
                    deleteTest(id)
                    .then(f => {
                        fetchTest(testData.title, false)
                        .then(e => {
                            console.log("deleted " + testData.title + ":" + id + " successfully")
                        })
                    });
    
                });
            });
        });
    });
}


// Used to retrieve the id of 
function getID(title)
{
    return fetchTest(title, true)
    .then(res => {
        data = res[0];
        return data._id;
    });
}

// Placeholder script for submitting dummy data to MongoDB
function addDummyData()
{
    for (let e = 0; e < dummydata2.length; e++)
    {
        submitTest(dummydata2[e]);
    }
}


main()