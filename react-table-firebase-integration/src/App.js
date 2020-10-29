
import React, { useEffect, useState, useMemo } from "react";
import TableContainer from './TableContainer';
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  const [data,setData] = useState([])
  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "name.title",
      },
      {
        Header: "First Name",
        accessor: "name.first",
      },
      {
        Header: "Last Name",
        accessor: "name.last",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "City",
        accessor: "location.city",
      },
    ],
    []
  )
  useEffect(() => {
    //Java fetch function to retrieve data from JSON
    const doFetch = async () =>{
      const response = await fetch("https://randomuser.me/api/?results=100")
      const body = await response.json()
      const contacts = body.results
      console.log(contacts)
      setData(contacts)
    }
    doFetch()
  }, []);

  return (
    <Container style={{ marginTop: 100 }}>
    <TableContainer columns={columns} data={data} />
  </Container>
  );
}

export default App;
