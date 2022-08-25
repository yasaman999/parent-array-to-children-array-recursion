let arr0 = [{
    id: 1,
    name: "a1",
    parentId: null
},

{
    id: 2,
    name: "a2",
    parentId: null
},

{
    id: 3,
    name: "a3",
    parentId: 2
},

{
    id: 4,
    name: "a4",
    parentId: 2
},

{
    id: 5,
    name: "a5",
    parentId: 4
}

]

let arr2=[];
let arr1=[].concat(arr0);


for (let i = 0; i < arr1.length; i++) 
{
    arr1[i]["children"]=[];
}

for (let i = 0; i < arr1.length; i++) 
{
    arr1[i]["inserted"]=false;
}



for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].parentId===null) {
        arr2.push(arr1[i]);
        arr1[i]["inserted"]=true;

    }
    
}



function find_child(obj)
{
   
    for (let j = 0; j < arr1.length; j++) {
            
        
        if(!arr1[j].inserted && arr1[j].parentId === obj.id)
        {
            obj.children.push(arr1[j]);
            arr1[j].inserted = true;
            find_child(arr1[j]);
        }
    }
        
    
}
for (let i = 0; i < arr2.length; i++) 
{
    find_child(arr2[i]);
}

console.log(arr2);

// our main array should be as below array : 
// [
//     {
//         id: 1,
//         name: a,
//         children: []
//     },

//     {
//         id: 2,
//         name: a2,
//         children:
//             [
//                 {
//                     id: 3,
//                     name: a3, children: []
//                 },

//                 {
//                     id: 4,
//                     name: a3,
//                     children:
//                         [
//                             {
//                                 id: 5,
//                                 name: a3,
//                                 children: []
//                             }
//                         ]


//                 }
//             ]
//     }
// ]



