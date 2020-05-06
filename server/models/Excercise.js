const List = [
    {workout: "Squats"}
];
function remove(i){
    List.splice(i,1);
    return true;
    };


function addExercise(newex) {
    List.push({workout:newex});
    return true;
};



module.exports = {
    List,
    remove,
    addEx
    
    
}