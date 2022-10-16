import React, {useState} from 'react';
import axios from 'axios'

const Form = () => {

    /* useState 1st argument is variable, 2nd is function that is passed a value to assign to 1st*/
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [pubyear, setPubYear] = useState('');
    const [claim, setClaim] = useState('');
    const [language, setLanguage] = useState('');
    const [source, setSource] = useState('');
    const [authoraffiliations, setAuthorAffiliations] = useState('');
    const [isbn, setISBN] = useState('');

    /* When form is submitted function is called and artile is assigned values from form*/
    const handleSubmit = (e) => {
        e.preventDefault();

        const article = { title, authors, pubyear, claim, language, source, authoraffiliations, isbn};

        /* Check output */
        console.log(article);

        try{
            axios.post(`https://ense701-assesment-1b-group-7.herokuapp.com/api/articles/`, article)
        .then(res => {
            console.log(res)
        })
    } catch (e) {
        console.log(e);
    }
    }

    return (
        <div>
            <h1>Article Submission Form</h1>
            
            {/* When form is submitted call handleSubmit function*/}
            <form onSubmit={handleSubmit}>
            
                <label id="form">Title</label><br/>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder=" Required ...">
                </input>
            
                <br/>
            
                <label>Author</label><br/>
                <input
                    type="text"
                    required 
                    onChange={(e) => setAuthors(e.target.value)}
                    placeholder=" Required ...">
                </input>
                
                <br/>
                
                <label>Publication Year</label><br/>
                <input
                    type="text"
                    required
                    onChange={(e) => setPubYear(e.target.value)}
                    placeholder=" Required ...">
                </input>

                <br/>

                <label>Claim Benefit</label><br/>
                <input
                    type="text"
                    onChange={(e) => setClaim(e.target.value)}
                    placeholder=" Optional ...">
                </input>

                <br/>

                <label>Language</label><br/>
                <input
                    type="text"
                    onChange={(e) => setLanguage(e.target.value)}
                    placeholder=" Optional ...">
                </input>

                <br/>

                <label>Source</label><br/>
                <input
                    type="text"
                    onChange={(e) => setSource(e.target.value)}
                    placeholder=" Optional ...">
                </input>

                <br/>

                <label>Author Affiliations</label><br/>
                <input
                    type="text"
                    onChange={(e) => setAuthorAffiliations(e.target.value)}
                    placeholder=" Optional ...">
                </input>

                <br/>

                <label>ISBN</label><br/>
                <input
                    type="text"
                    onChange={(e) => setISBN(e.target.value)}
                    placeholder=" Optional ...">
                </input>

                <br/>

                <button>Submit</button><br/>
            </form>
        </div>
    )
}

export default Form;