const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");

const apiKey="tlfTf7oURWGmmgpmtFUHxQ==7CNTdEi7sNRhrb9q";
const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options={
    method:"GET",
    headers:{ "X-Api-Key":apiKey, },
}; 

async function getJoke(){
    try{
        jokeEl.innerText="Updating..";
        btnEl.disabled=true;
        btnEl.innerText="Loading";
        const response=await fetch(apiUrl,options);
        const data=await response.json();
        console.log(data)
    
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";
        jokeEl.innerText=data[0].joke;
    }
    catch(error){
        jokeEl.innerText="An error occured.Try again later";
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke";
        console.log(error);
    }
    

}

btnEl.addEventListener("click",getJoke);

/*const btnEle=document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apiKey="tlfTf7oURWGmmgpmtFUHxQ==7CNTdEi7sNRhrb9q";
const apiURL="https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options={
    method:"GET",
    headers: {  "X-Api-Key": apiKey, },
};

async function getJoke(){
    try{
        jokeEl.innerText="Updating..";
        btnEle.disabled=true;
        btnEle.innerText="Loading..";
        const response=await fetch(apiURL,options);
        const data=await response.json();
        
        btnEle.disabled=false;
        btnEle.innerText="Tell me a joke";
        jokeEl.innerText=data[0].joke;

    }
    catch(error){
        jokeEl.innerText="AN error occured,try again";
        btnEle.disabled=false;
        btnEle.innerText="Tell me a Joke";
        console.log(error);
    }
}

btnEle.addEventListener("click",getJoke);*/