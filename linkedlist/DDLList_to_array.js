   displayList(head) {
       let curr = head;
       const temp = [];
       if(head == null) return temp;
       while(curr){
           temp.push(curr.data);
           curr = curr.next;
           
       }
       return temp;
        
    }