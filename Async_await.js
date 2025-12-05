function getUserDetails(user_name,callSubjects)
{
    return new Promise((res,rej)=>{
        console.log("Called api using",user_name);
        setTimeout(() => {
            res({userId:'6215'});
        }, 2000);
    })
}
function getSubjects(user_id,callMarks)
{
    return new Promise((res,rej)=>{
        console.log("Called api using",{user_id});
        setTimeout(() => {
            res({subjectId:'OS'});
        }, 2000);
    })
}
function getMarks(subject_id)
{
    return new Promise((res,rej)=>{
        console.log('Called api Using');
        setTimeout(()=>{
            res({Marks: 99});
        },2000)
    })
}

const call=async (user_name)=>{
    const result=await getUserDetails(user_name);
    console.log(result);
    const result1=await getSubjects(result.userId);
    console.log(result1);
    const result2=await getMarks(result1.subjectId);
    console.log(result2);
}

call('Sagar');