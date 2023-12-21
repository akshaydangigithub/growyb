import { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import MyAPI, { Item } from "../MyAPI";
import AdminLeadTable from "./AdminLeadTable";

const AllLedsList = () => {
  const [leads, setLeads] = useState([]);
  const [count,setCount] = useState(1);
  let alert = useAlert()
  useEffect(() => {
    let token = Item.getItem('token');
    if (token) {
      MyAPI.get('/admin/leads/all', token)
        .then((res) => {
          console.log(res)
          if (res.data.status) {
            setLeads(res.data.leads);
          } else {
            alert.error(res.message);
          }
        })
    }
  }, [count])

  const reloadData = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <AdminLeadTable reloadData={reloadData}  leads={leads} />
    </div>
  );
};

export default AllLedsList;
