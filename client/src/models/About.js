import myFetch from "./myFetch";

export default{
    State: {},
    Init(){
        myFetch("/about") 
        .then(x=> { 
            this.State = x;
            console.log(x);
        });
    }
}