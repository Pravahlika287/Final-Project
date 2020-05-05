import myFetch from "./myFetch";

export default {



    State: {},
    Init() {
        myFetch('/heart')
                         .then(x=> { 
                this.State = x;
                                  console.log(x);
     })
    },
    async add20() {
        await myFetch("/heart/add20")
},
    async add40() {
        await myFetch("/heart/add40")
}
}