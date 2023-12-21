import { useEffect, useState } from "react";
import UserLeadsTable from "./UserLeadsTable";
import MyAPI, { Item } from "./MyAPI";
import { useAlert } from 'react-alert'
import OnGoingUserLeadTable from "./OnGoingUserLeadTable";

const Closed = () => {
  const [leads, setLeads] = useState([]);
  const [count,setCount] = useState(0);
  let alert = useAlert();
  useEffect(() => {
    let token = Item.getItem('token');
    if (token) {
      MyAPI.get('/lead/view/close', token)
        .then((res) => {
          if (res.data.success) {
            setLeads(res.data.data);
          } else {
            alert.info(res.message, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        })
    }else{
      console.log('token not found')
      alert.error('token not found');
    }
  }, [count])

  const reloadData = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{width:'100%'}}>
      <OnGoingUserLeadTable reloadData={reloadData}  leads={leads} />
    </div>
  );
};

export default Closed;