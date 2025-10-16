let btn = document.querySelector("button");
let url = "https://universities.hipolabs.com/search?name=india"

let state = "kerala";

btn.addEventListener("click", async() =>{
    let colArr = await getColleges();
    show(colArr);
});

function show(colArr){
    for(col of colArr){
        console.log(col);
    }
}

async function getColleges(){
    try{
        let res = await axios.get(url);
        // console.log(res.data);
        let clgs = res.data.filter(col=>
            col['state-province'] && col['state-province'].toLowerCase() === state.toLowerCase()
        );
        return clgs;
    }
    catch(e){
        console.log(e);
    }
}