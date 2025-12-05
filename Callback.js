function fun1(id,callback){
    console.log("fun1",id);
    callback(65);
}
function fun2(id,callback){
    console.log("fun2",id)
    callback(12);
}
function fun3(id){
    console.log("fun3",id);
}


fun1(45,function(id){   // we passing function as argument for another function
    fun2(id,function(id){ // same here
        fun3(id);
    })
});