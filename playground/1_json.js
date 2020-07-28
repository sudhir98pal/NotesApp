const file ='1_json.json'

const fs=require('fs');
const dataBuffer =fs.readFileSync(file);
const json_data=dataBuffer.toString();
const person=JSON.parse(json_data);
person.name='sudhir';
person.age='23';
console.log(person.age);
fs.writeFileSync(file,JSON.stringify(person))
