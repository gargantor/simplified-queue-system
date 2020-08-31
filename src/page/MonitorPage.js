import React, {useEffect, useState} from 'react'
import Counter from "../handlers/counter";

const MonitorPage = () => {  
  const [processed, setProcessed] = useState(Counter.getProccessed());
  useEffect(() => {    
    const interval = setInterval(() => {
      console.log('This will run every second!');
      setProcessed(Counter.getProccessed());
    }, 1000);
    return () => clearInterval(interval);
  }, [processed]);
  return (
    <div className="card monitor-page">
        <div className="cardHeader">
            Ticket Number
        </div>
        <div className="cardBody monitor-number">
        {isNaN(processed) ? "-" : processed}
        </div>
    </div>
  )
}

export default MonitorPage
