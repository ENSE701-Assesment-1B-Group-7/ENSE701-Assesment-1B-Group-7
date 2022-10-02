/*Components*/
import Header from "./components/Header";
import Button from "./components/Button";
import Table from "./components/Table";
import TableHeader from "./components/TableHeader";

/* Pages */
import Home from "./pages/Home";
import SearchArticles from "./pages/SearchArticles";
import SubmitArticles from "./pages/SubmitArticle";


// ***************************************************************************
const tableHeaderList = [ // Currently working dummy headings
  "Title",
  "Author",
  "Source",
  "Publication Year",
  "Language",
  "Author Affiliation",
  "ISBN",
  "Rights",
  "Description"
]

const dummyData = [  // Currently working dummy data
  {          
    title: 'Book 1',
    author: 'Author 1',
    source: 'Source 1',
    publication_year: '1999',
    language: 'English',
    author_affiliations: 'NA',
    isbn: '12445-5556-8955',
    rights: 'Reserved',
    description: 'Book 1 description'
  },
  {          
    title: 'Book 2',
    author: 'Author 2',
    source: 'Source 2',
    publication_year: '2000',
    language: 'English',
    author_affiliations: 'NA',
    isbn: '9853-51136-8554',
    rights: 'Reserved',
    description: 'Book 2 description'
  }
]
// ***************************************************************************



function App() {
  return (
      <div className="container">

        {/*Works */}
        <Header />
        <Button text="B1"/>
        <Table list={dummyData} columnHeadings={tableHeaderList}/>
    </div>

  );
}

export default App;
