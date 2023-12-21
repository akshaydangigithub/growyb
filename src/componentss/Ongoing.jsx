import { useEffect, useState } from "react";
import UserLeadsTable from "./UserLeadsTable";
import MyAPI, { Item } from "./MyAPI";
import { useAlert } from "react-alert";
import OnGoingUserLeadTable from "./OnGoingUserLeadTable";
import { useNavigate } from "react-router-dom";

const Ongoing = () => {
  let alert = useAlert()
  const [leads, setLeads] = useState([]);
  const [count,setCount] = useState(0);
  let token = Item.getItem('token');
  let navigate = useNavigate();
  useEffect(() => {
    if (token) {
      MyAPI.get('/lead/view/ongoing', token)
        .then((res) => {
          if (res.data.success) {
            setLeads(res.data.data);
          } else {
            alert.info(res.message);
          }
        })
    }else{
      console.log('token not found')
      navigate('/');
    }
  }, [count,token])

  const reloadData = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div style={{width:'100%'}}>
      <OnGoingUserLeadTable reloadData={reloadData}  leads={leads} />
    </div>
  );
};

export default Ongoing;