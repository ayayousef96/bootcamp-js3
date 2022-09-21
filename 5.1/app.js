function countryToLiveIn(language, isIsland, population,country){
    if((!isIsland) && (language=="English") && (population < 50000000) && (country)){
        return true;
    }
    return false;
}
function main(){
    if(countryToLiveIn("Hebrew",false,9000000,"Israel")){
        console.log("You should live in Israel!");
    }
    else{
        console.log("Isreal does not meet your criteria");

    }
}
main();