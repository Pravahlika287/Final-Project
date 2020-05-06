const dietList = [
    {food:"avocado" , calorie:"120"}
];
const p1 = [
    {diettotal:0},
]
function add300(){
    this.p1+=300;
    return true
};

function add500(){
    this.p1 +=500;
    return true
};


function addF(food,calorie) {
    dietList.push({food:food,calorie:calorie});
    return true;
};
function remove(i){
    dietList.splice(i,1);
    return true;
    };



module.exports = {
    dietList,remove,addF
    
    
}