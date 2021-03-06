export { Stack }

class Stack{
    constructor(){
        this.size = 0;
        this.buffer = 4;
        this.stack = [];
    }

    clear(){
        this.size = 0;
        this.stack = [];
    }

    isEmpty(){
        return  ( this.size === 0 );
    }

    top(){
        return this.stack[this.size-1];
    }

    pop(){
        if(!this.isEmpty()) {
            this.size--;
            return this.stack.pop();
        } else{
            return [-1,''];
        }
    }

    push(type, char){
        
                this.stack.push([type, char]);
            
        
        this.size++;
    }
}