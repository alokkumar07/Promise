Array.prototype.myFilter=function(cb){
    console.log(this); // [1,2,3,4,5]

        let temp=[];
        for(let i=0;i<this.length;i++){
            if(cb(this[i],i,this)) temp.push(this[i]);
        }
        return temp;
}

const nums=[1,2,3,4,5];
const result=nums.myFilter((num,i,arr)=>{
    return num >2;
});
console.log(result); // [2,4,6,8,10]