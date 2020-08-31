var queue = null
var processed = null
class Counter{
    addQueue(){        
        this.getQueue();        
        if(queue && queue > 0){
            queue = queue + 1;            
        }else{
            queue = 1;
        }
        localStorage.setItem("queue", queue);
        return queue;
    }
    getQueue(){
        queue = parseInt(localStorage.getItem("queue"));
        return queue;
    }
    addProccessed(){
        this.getProccessed();
        this.getQueue();
        if((processed && processed > 0) && (processed < queue)){
            processed = processed + 1;            
        }else if(processed === queue){
            console.log("completed");
            alert("completed");
        }else{
            processed = 1;
        }
        localStorage.setItem("processed", processed);
        console.log(processed);
        return processed;

    }
    getProccessed(){
        processed = parseInt(localStorage.getItem("processed"));
        return processed;
    }

    resetTicket(){
        processed = parseInt(localStorage.getItem("processed"));
        queue = parseInt(localStorage.getItem("queue"));
        if(processed >= queue){
            localStorage.removeItem("queue");
            localStorage.removeItem("processed");
        }
        
    }

}

export default new Counter();