// add the id's using for loop

var data = {
  "charan": {
    "id": 1
  },
  "amarendra": {
    "id": 2
  },
  "arijith": {
    "id": 3
  },
  "swati": {
    "id": 4
  },
  "keys": [ "charan", "amarendra", "swati", "arijith" ]
}

//First Method

 var sumIds1 = 0;
 for(let i = 0 ; i < data.keys.length; i++) {
   sumIds1 += data[data.keys[i]].id;
   }

//Second Method
var sumIds2 = 0;
for(const property in data)
{
  if(data[property].hasOwnProperty('id')){
    sumIds2 += data[ property ].id;
  }
}

document.getElementById("addIds").innerHTML = sumIds2;

console.log("sum Ids1", sumIds1);
console.log("sum Ids2", sumIds2);
