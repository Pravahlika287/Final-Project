const HydrateSum = [{hydratetotal: 0}];

function add3(){
    this.HydrateSum +=3;
    return true;
};

function add6(){
    this.HydrateSum +=6;
    return true;
};
function add15(){
    this.HydrateSum +=15;
    return true;
};

function add25(){
    this.HydrateSum +=25;
    return true;
};

module.exports = {
    HydrateSum,
    add3,
    add6,
    add15,
    add25
}