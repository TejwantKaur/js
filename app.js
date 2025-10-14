h1 = document.querySelector("h1");

function changeColor(color, delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("Promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("Color changed");
        },delay);
    });
}

async function demo(){
    try{
        await changeColor("red", 1000);
        await changeColor("green",1000);
        await changeColor("Orange",1000);
        await changeColor("blue",1000);
    } catch(err){
        console.log("error caught", err);
    }
    let a = 5;
    console.log("after promise print 5");
}

function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);
    });
}

async function num(){
    await getNum();
    await getNum();
    await getNum();
    await getNum();
    getNum();
}


// colorChange("red",1000)
//     .then(()=>{
//         console.log("red color Completed");
//         return colorChange("green",1000);
//     })
//     .then(()=>{
//         console.log("green color completed");
//         return colorChange("Orange",1000);
//     })
//     .then(()=>{
//         console.log("Organge color completed");
//         return colorChange("blue",1000);
//     })
//     .then(()=>{
//         console.log("Blue color completed")
//     });

// async function greet(){
//     // throw "404 pg not found";
//     return "hello";
// }

// greet()
//     .then((result) =>{
//         console.log("Promise resolved");
//         console.log("Result was",result);
//     })
//     .catch((err)=>{
//         console.log("Promise rejected with error",err);
//     });

// let demo = async()=>{
//     return 5;
// };



// function savetoDb(data){
//     return new Promise((resolve,reject)=>{
//         let speed = Math.floor(Math.random()*10)+1;
//         if(speed>4)
//             resolve("Success: Data Saved");
//         else
//             reject("Failure: Weak Connection, Data not Saved");
//     });
// }

// savetoDb("Data1")
//     .then((result)=>{
//         console.log("data1Saved");
//         console.log("Result of Promise: ", result);
//         return savetoDb("Data2");
//     })
//     .then((result)=>{
//         console.log("data2Saved");
//         console.log("Result of Promise: ", result);
//         return savetoDb("Data3");
//     })
//     .then((result)=>{
//         console.log("data3Saved");
//         console.log("Result of Promise: ", result);
//     })
//     .catch((error)=>{
//         console.log("Promise Rejected!");
//     });

