const List = [
    {workout: "Squats"}
];
function remove(i){
    List.splice(i,1);
    return true;
    };


function addEx(newex) {
    List.push({workout:newex});
    return List;
};



module.exports = {
    List,
    remove,
    addEx
    
    
}