let apiURL = "https://catfact.ninja/fact";
let btnYes = document.getElementById('yes');
let btnNo = document.getElementById('no');
let bubble = document.getElementsByClassName('bubble')[0]
let catPicture = document.getElementsByClassName('cat-picture')[0]
let bubbleContent = document.getElementsByClassName('bubble-content')[0]
let fact = "";
let lengthOfFact = 0;
let fetchingDataFromApi = async () => {
    try {
        console.log("Getting a Fact ... ")
        bubbleContent.innerText = "Getting a Fact ... ";
        await new Promise((resolve, reject) => {    //Artificical Delay added
            setTimeout(() => {
                resolve();                             //Resolving it so could proceed forward
            }, 500);
        });
        let response = await fetch(apiURL);
        let finalData = await response.json();
        fact = finalData.fact;
        lengthOfFact =  finalData.length;
        displayingFact(fact,lengthOfFact)
        console.log(finalData.length)

    } 
    catch (error) {
        console.log(error)
        bubbleContent.innerText = `${error}`
    }

}
// fetchingDataFromApi()
const displayingFact = (fact,lengthOfFact) => {
    if(lengthOfFact>80){
        bubbleContent.style.fontSize = "1.3rem";
        bubbleContent.innerText = `${fact}`;
        bubble.style.boxShadow = "1px 1px 20px gold"

    }
    else if(lengthOfFact<80){
        bubbleContent.innerText = `${fact}`;
        bubble.style.boxShadow = "1px 1px 20px gold"

    }
}
const notDisplayingFact = () => {
    bubbleContent.innerText = `OK👍👍😔`;
    bubble.style.boxShadow = "0px 0px 0px 0px"

}
const resetFunction = () =>{
    bubbleContent.innerText = `I am MeawooBaksh who tells facts about Meawo specie`
    bubble.style.boxShadow = "1px 1px 20px black"

}
btnYes.addEventListener('click',fetchingDataFromApi)
btnNo.addEventListener('click',notDisplayingFact)
catPicture.addEventListener('click',resetFunction)