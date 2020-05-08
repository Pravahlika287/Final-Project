import myFetch from "./myFetch";

export default {



    State: {},
    Init() {
        myFetch('/hydrate')
                         .then(x=> { 
                this.State = x;
                                  console.log(x);
     })
    },
    async add3() {
        await myFetch("/hydrate/add3")
},
    async add6() {
        await myFetch("/hydrate/add6")
},
async add15() {
    await myFetch("/hydrate/add15")
},
async add25() {
    await myFetch("/hydrate/add25")
}
}