import Form from "../components/Form"; 

const SubmitArticle = () =>  {
     return (
      <div className="PageText">
        <h1>Submit Article</h1>
            <p>Anyone can submit an article of interest, sll submissions will be reviewed by out moderators 
                for relevance to software engineering practices. Once a decision has been made and you will be 
                notified.</p>
            <div className="submissionForm">
                
                <Form />
                
            </div>
        
        </div>
    );
}
 
export default SubmitArticle;