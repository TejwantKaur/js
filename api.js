// promise + async + await
// async function getfacts(){
//     try{
//     let res = await fetch(url) 
//     // jdo tak fetch ni hunda wait kero, then next kmm
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url)
//     let data2 = await res2.json();
//     console.log(data2.fact);

//     }
//     catch(e){
//         console.log(e);
//     }
//     console.log("Bye");
// }

// fetch(url)
//     .then(res => {
//         // console.log(res);
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("Data1=",data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log("Data2=",data2.fact);

//     })
//     .catch((err)=>{
//         console.log(err)
//     });

