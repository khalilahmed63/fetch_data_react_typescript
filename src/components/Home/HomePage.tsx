/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import axios from "axios";

export default function HomePage(props: any) {
  const fetchRecordsAPI = process.env.REACT_APP_API_RECORDS;

  const fetchDevicesCount = async () => {
    try {
      const response = await axios.get(`${fetchRecordsAPI}`);
      console.log(response, response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDevicesCount();
  }, []);

  return <div>HomePageVA</div>;
}
