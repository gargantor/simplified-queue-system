import React, { useState } from 'react'
import { Link } from "react-router-dom";
import PrintAble from '../components/Printable';
import Counter from "../handlers/counter";

const DeskPage = () => {
  const [queue, setQueue] = useState(Counter.getQueue() || 0);
  const [processed, setProcessed] = useState(Counter.getProccessed() || 0)
  let statusReady = true;   
  const handleNext = () => {
    setQueue(Counter.getQueue());
    if(queue > processed){
      statusReady = false;
      setProcessed(Counter.addProccessed());
    }else{
      alert("all completed");
    }

  }
  const printOrder = () => {
    setQueue(Counter.addQueue());
    const printDiv = document.getElementById('printme');
    if(printDiv){        
        //window.print();
        window.location.reload();        
    }
  }
  const resetTicket = () => {
    setQueue(Counter.getQueue());
    setProcessed(Counter.getProccessed());
    if(processed >= queue){
      var confirm = window.confirm("Are you sure you want to reset counter ?");
      if (confirm) {
        Counter.resetTicket();
        setQueue(0);
        setProcessed(0);
        
      }

    }else{
      alert("You cannot reset counter before all queue processed");      
    }
  }
  return (
    <div>
        <nav className="navbar">
          <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to={'/desk'}>Desk</Link>
          </li>
            <li className="nav-item">
          <Link  className="nav-link" to={'/print'}>Print</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to={'/monitor'}>Monitor</Link>
          </li>
          </ul>
          
          
          
        </nav>
        <div className="desk-page">
          <p>Ticket Counter: {queue}</p>
          <p>Current Queue: {processed}</p>
          <p>Queue Left: {queue - processed}</p>
          <p>
            <button onClick={printOrder}>Print</button>
            <button onClick={handleNext}>Next Queue</button>
          </p>
          <p>
            <button className="reset-button" onClick={resetTicket} >Reset Counter</button>
          </p>
        </div>
        <PrintAble printableId='printme'/>        
    </div>
  )
}

export default DeskPage
