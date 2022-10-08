import React, {useState} from 'react';


const Form = () => {

    /* useState 1st argument is variable, 2nd is function that is passed a value to assign to 1st*/
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pubYear, setPubYear] = useState('');
    const [claimBenifit, setClaimBenifit] = useState('');
    const [language, setLanguage] = useState('');
    const [source, setSource] = useState('');
    const [authorAffiliations, setAuthorAffiliations] = useState('');
    const [isbn, setISBN] = useState('');

    /* When form is submitted function is called and artile is assigned values from form*/
    const handleSubmit = (e) => {
        e.preventDefault();
        const article = { title, author, pubYear, claimBenifit, 
                        language, source, authorAffiliations, isbn};
        
        /* Check output */
        console.log(article);

        /* POST request */ 
        fetch('http://localhost:3000/SEPractice', {
            method: 'POST',
            headers: {"Content-Type": "application/JSON"},
            body: JSON.stringify(article)
        }).then(
            console.log("New Article Added")
        )
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
                    onChange={(e) => setAuthor(e.target.value)}
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
                    onChange={(e) => setClaimBenifit(e.target.value)}
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
                
                {/*Test that value is being assigned*/} 
                <p>{title}</p>
                <p>{author}</p>

            </form>
        </div>
    )
}

export default Form;