const BPTotal = [{BPtotal: 120}];

function add20(){
    this.BPTotal+=20;
    return true;
};

function add40(){
    this.BPTotal +=40;
    return true;
};
module.exports = {
    BPTotal,
    add20,
    add40
    
    
}