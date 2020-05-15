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

    async FilteredArray()
    {
       await myFetch("/FilteredArray",$List) 
    },
    async addF(food,calorie) {
        await myFetch("/nutrition/addF",{food,calorie})
},
    
async remove(i) {
    await myFetch("/nutrition/remove",{i})         
},

}