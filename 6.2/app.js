const people = ["Greg", "Mary", "Devon", "James"];
for(i=9;i<people.length;i++){
    console.log(people[i]);
}
people.shift();
people.pop();
//console.log(people);
people.unshift("Matt");
people.push("Aya");
//console.log(people);
for(i=0;i<2;i++){
    console.log(people[i]);
}
let arr2=people.slice(2,4);
let maryinsed=people.indexOf("Mary");
let index=people.indexOf("Foo");
people[0] = "Greg";
people[1]="Mary";
people[2]= "Devon";
people[3]="James";
people.splice(2,1,"Elizabeth","Artie");
//console.log(people);
let withbob=people.concat(['Bob'])
//console.log(withbob);
