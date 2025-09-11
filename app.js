const employees=[
    { 
        id: 1,
        name: "Alice",
        salary: 45,000,
        position: Developer
        
    }, 
     {
        id: 2,
        name: "Bob",
        salary: 60,000,
        position: Manager
     }, 
     {
        id: 3,
        name: "Charlie",
        salary: 38,000,
        position: Designer
     },
     {
        id: 4,
        name: "Diana",
        salary: 52,000,
        position: Team Lead
     },
     {
        id: 5,
        name: "Ethan",
        salary: 47, 000,
        position: QA Engineer
     }
]
for(var i=0;i<employees.length;i++){
    console.log(employees[i])
}
if(salary>=50,000){
    console.log("bonus: ")
}else{
    console.log("no bonus: ")
}