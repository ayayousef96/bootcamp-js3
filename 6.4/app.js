const percentageOfWorld1 = (population) => {
    let worldpopulation= 7900000000;
    let percent=((population/worldpopulation)*100).toFixed(1);
    return percent +"%";
}

let pop=[9006398,46754778,273523615,145934462];

function populationPercentages(pop){
    let percentages=[];
    for(i=0;i<pop.length;i++){
        percentages[i]=percentageOfWorld1(pop[i]);
    }
    console.log(percentages);
}

(populationPercentages(pop));