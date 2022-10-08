import React from "react";
 
const Home = () =>  {
    return (
      <div>

        <div className="PageText">
        
          <h1>Welcome to SPEED!</h1>
          
          <h4>What is SPEED?</h4>
          <p>
            Speed is sort for "Software Practice Empirical Evidence Database", 
            we are a resource for finding and submitting all articles to do with
            evidence-based software engineering research. We were started with the 
            hope of supporting budding software engineers and researching so that 
            they have a single accessible resource that isn't behind a pay wall.
          </p>

          <h4> How to use SEED?</h4>
          <p>There are two main ways to use SPEED and everyone has the ability to do both.</p>
          <ul>
            <li>Search:</li>
            <p>
              You can search our entire database of articles using key words, these have been checked
              for relevance and had summarises provided by out analyst. Once you have read the article 
              you can then rate how useful you found the content in relation to software engineering 
                practices.
            </p>
            <li>Submitting:</li>
            <p>
              Anyone can submit an article of interest by going to out submission page. All submissions will
              be reviewed by out moderators for relevance to software engineering practices and you will be notified
              when you submission has been reviewed.
            </p>
          </ul>
        </div>

      </div>
    );
  }
 
export default Home;