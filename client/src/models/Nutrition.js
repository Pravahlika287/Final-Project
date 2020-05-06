import myFetch from "./myFetch";

export default {



    State: {},
    Init() {
        myFetch('/nutrition')
                         .then(x=> { 
                this.State = x;
                                  console.log(x);
     })
    },
    async addF(newfood) {
        await myFetch("/nutrition/addF")
},
    
async remove(i) {
    await myFetch("/nutrition/remove")         
},

}