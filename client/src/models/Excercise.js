import myFetch from "./myFetch";

export default {



    State: {},
    Init() {
        myFetch('/excercise')
                         .then(x=> { 
                this.State = x;
                                  console.log(x);
     })
    },
    async addEx(newex) {
        await myFetch("/excercise/addEx",{newex})
},
    
async remove(i) {
    await myFetch("/excercise/remove",{i})         
},

}