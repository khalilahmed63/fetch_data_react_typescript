/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Table } from "@mantine/core";
import axios from "axios";

export default function HomePage(props: any) {
  const fetchRecordsAPI = process.env.REACT_APP_API_RECORDS;

  const [record, setRecord] = useState<any>([]);
  const [page, setPage] = useState<any>(1);
  const [roll, setRoll] = useState<any>("admin");

  let obj = { name: "khalil" };
  let obj2 = obj;
  obj2.name = "ahmed";

  const myGreeting = () => {
    alert(obj.name);
  };

  const myTimeout = setTimeout(myGreeting, 3000);

  clearTimeout(myTimeout);

  const fetchRecord = async () => {
    try {
      const response = await axios.get(`${fetchRecordsAPI}?page=${page}`);
      setRecord(response?.data);
      console.log(response, response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecord();
  }, [page]);

  return (
    <div>
      <h1 className="text-2xl text-center p-4">Record with Pagination</h1>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>body</th>
            <th>email</th>
            <th>id</th>
            <th>name</th>
            <th>post_id</th>
          </tr>
        </thead>
        <tbody>
          {record?.map((item: any) => (
            <tr key={item.id}>
              <td>{item.body}</td>
              {roll === "admin" ? (
                <td>{item.email}</td>
              ) : (
                <td>*********{item.email.slice(item.email.indexOf("@")+1)}</td>
              )}
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.post_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="flex justify-center items-center mt-2">
        <Button
          variant="default"
          disabled={page <= 1}
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
          className="mr-4"
        >
          Previous
        </Button>
        <Button
          variant="default"
          disabled={page >= 10}
          onClick={() => {
            if (page < 10) setPage(page + 1);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
