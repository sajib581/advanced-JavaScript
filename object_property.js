const students = [
    {id : 21, name : "sunny"},
    {id : 41, name : "mana"},
    {id : 61, name : "tyy"},
    {id : 91, name : "tanmoy"}    
]

const names = students.map(e => e.name)
console.log(names);

const ids = students.filter(e => e.id>50)
console.log(ids);

const bigger = students.find(e => e.id>50)
console.log(bigger);