const dietList = [
    {food:"avocado" , calorie:120}
];

const List=[
    Cholestrol,copper,iodine,iron,fat,fibers,vitamins,minerals
]



function addF(food,calorie) {
    dietList.push({food:food,calorie:calorie});
    return dietList;
}
function remove(i){
    this.dietList.splice(i,1);
    return true;
    };



module.exports = {
    dietList,remove,addF,List
    
    
}
