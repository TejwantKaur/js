function savetoDb(data){
    return new Promise((resolve,reject)=>{
        let speed = Math.floor(Math.random()*10)+1;
        if(speed>4)
            resolve("Success: Data Saved");
        else
            reject("Failure: Weak Connection, Data not Saved");
    });
}

savetoDb("Data1")
    .then((result)=>{
        console.log("data1Saved");
        console.log("Result of Promise: ", result);
        return savetoDb("Data2");
    })
    .then((result)=>{
        console.log("data2Saved");
        console.log("Result of Promise: ", result);
        return savetoDb("Data3");
    })
    .then((result)=>{
        console.log("data3Saved");
        console.log("Result of Promise: ", result);
    })
    .catch((error)=>{
        console.log("Promise Rejected!");
    });

