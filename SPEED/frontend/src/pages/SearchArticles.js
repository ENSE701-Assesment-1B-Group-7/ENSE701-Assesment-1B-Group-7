import articles from "../dummydata/articles.js";
import Styles from "../components/table/Tablestylings.js";
import Table from "../components/table/Table.js";
import tableHeaders from "../components/table/TableHeaders";

const SEPractice = () => {
  return (
    <div>
             <Styles>
               <Table
                data={articles}
                columns={tableHeaders}
               />
            </Styles>
    </div>
  );
}

export default SEPractice;  