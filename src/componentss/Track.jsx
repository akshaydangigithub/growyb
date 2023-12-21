import { useEffect, useState } from "react";
import UserLeadsTable from "./UserLeadsTable";
import MyAPI, { Item } from "./MyAPI";
import { useAlert } from 'react-alert'

const Track = () => {
  const [leads, setLeads] = useState([]);
  const [count,setCount] = useState(0);
  const alert = useAlert()
  useEffect(() => {
    let token = Item.getItem('token');
    if (token) {
      MyAPI.get('/lead/view/all', token)
        .then((res) => {
          if (res.data.success) {
            setLeads(res.data.leads);
          } else {
            alert.info(res.message);
          }
        })
    }
  }, [count])

  const reloadData = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{width:'100%'}}>
      <UserLeadsTable reloadData={reloadData}  leads={leads} />
    </div>
  );
};

export default Track;
