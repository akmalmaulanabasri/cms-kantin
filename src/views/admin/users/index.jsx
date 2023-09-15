import axios from "axios";
import CheckTable from "./components/CheckTable";
import { columnsDataCheck } from "./variables/columnsData";
import { useEffect, useState } from "react";
const url = process.env.REACT_APP_BE_URL_LOCAL;

const Tables = () => {
  const [users, setUsers] = useState([]);
  const fetchUser = async () => {
    await axios.get(`${url}/user`).then((res) => {
      setUsers(res.data.data);
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <CheckTable columnsData={columnsDataCheck} tableData={users} />
    </div>
  );
};

export default Tables;
