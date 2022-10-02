import styled from 'styled-components';

const Styles = styled.div `
  table {
    font-family:Bahnschrift;
    background-color: #fff;
    width: 100%;
    border-spacing: 0;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 5px solid #281034;
      border-right: 5px solid #281034;
      :last-child {
        border-right: 0;
      }
    }
  }
`
export default Styles;
