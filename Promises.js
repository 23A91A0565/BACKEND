function userDetails(id){
    return new Promise((resolve,reject)=>{
        resolve("23A91A0578")
    })
}
function userSubjects(userRoll){
    return new Promise((resolve,reject)=>{
        resolve("OOPS-JAVA");
    })
}
function userMarks(subjectId){
    return new Promise((resolve,reject)=>{
        resolve("65/100");
    })
}
function userGrade(marks){
    return new Promise((resolve,reject)=>{
        console.log("Done");
        resolve("Success");
    })
}
userDetails("U10").then(result=>{
    console.log(result);
    return userSubjects(result);
}).then(result=>{
        console.log(result);
    return userMarks(result);
}).then(result=>{
        console.log(result);
    return userGrade(result);
}).then(result=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})