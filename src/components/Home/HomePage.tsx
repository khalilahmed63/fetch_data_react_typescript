/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table } from "@mantine/core";

export default function HomePage(props: any) {
  const fetchRecordsAPI = process.env.REACT_APP_API_RECORDS;

  const [record, setRecord] = useState<any>([]);

  const fetchRecord = async () => {
    try {
      const response = await axios.get(`${fetchRecordsAPI}?page=2`);
      setRecord(response?.data);
      console.log(response, response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecord();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-center p-4">welcome to the new world</h1>
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
              <td>{item.email}</td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.post_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="flex justify-center items-center mt-2">
        <Button variant="default" disabled={true} className="mr-4">Previous</Button>
        <Button variant="default" disabled={false}>Next</Button>
      </div>
    </div>
  );
}
