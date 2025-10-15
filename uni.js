let btn = document.querySelector("button");
let url = "http://universities.hipolabs.com/search?name="

btn.addEventListener("click", async()=>{
    console.log("button was clicked");

    let country = document.querySelector("input").value;
    console.log(country);

    // country = "nigeria";

    let colArr = await getColleges(country);
    console.log(colArr);
    show(colArr);
});

function show(arr){
    let list= document.querySelector("#list");
    list.innerText = "";
    for(c of arr){
        console.log(c.name);
        let li = document.createElement("li");
        li.innerText = c.name;
        list.append(li);
    }
}

async function getColleges(country) {
    try{
        let res = await axios.get(url+country);
        return (res.data);
    }
    catch(e){
        console.log(e)
    }
    
}