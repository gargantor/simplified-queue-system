import React from 'react'
import PrintAble from '../components/Printable';
import Counter from "../handlers/counter";

const PrintPage = () => {
    const printOrder = () => {
        Counter.addQueue();
        /*const printDiv = document.getElementById('printme');
        if(printDiv){
            //const printableElements = printDiv.innerHTML;
            //console.log(printableElements);
            //const orderHtml = '<html><head><title></title></head><body>' + printableElements + '</body></html>'
            //const oldPage = document.body.innerHTML;
            //document.body.innerHTML = orderHtml;
            window.print();
            window.location.reload();
            //document.body.innerHTML = oldPage            
        }*/
    }
    
  return (
    <div>
        <div className="card print-page">
            <div className="card">
                <div className="cardHeader">Print Ticket</div>
                <div className="cardBody">
                    <button className="print-button" onClick={printOrder}>Print</button>
                </div>
            </div>      
        </div>
        <PrintAble printableId='printme'/>
    </div>
  )
}

export default PrintPage
