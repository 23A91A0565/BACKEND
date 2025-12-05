// http is used for creating a servers
import http from "http";

// server creation
const server=http.createServer((req,res)=>{
    console.log(req.method);
    if(req.url==="/users"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("This message is from backend");
    }
    else if(req.url=="/phani"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("This is phani kumar");
    }
    else{
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify({name:"PHANI"}));
    }
});


// server starting
const port=999;
server.listen(port,()=>{
    console.log("server running at port 999");
})