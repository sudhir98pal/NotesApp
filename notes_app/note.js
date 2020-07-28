
const fs=require('fs');
// TO USE FILE SYSTEM

const chalk=require('chalk');
// CHALK IS USED TO DISPLAY COLORFUL TEXT

const { title } = require('process');

const file='sudhirSnotesjson.json';
// VARIABLE TO STORE FILE NAME





// THIS ADDNOTE IS USED TO ADD NOTE TO FILE WITH GIVEN TITLE AND BODY
const addNote=(title,body)=>
{

const notes=localnotes();// GETS ALL THE NOTE IN JSON FORMATE FROM FILE


// FIND IS USED TO GET FIRST MATCH OF GIVEN TITLE WITH ALL NOTE'S TITLE
// IF MATCH FOUND STOP SAERCHING
// BUT IF FILTER IS USED IT SEARCHES EVEN IF THERE IS MATCH FOUND TO END OF THE FILE
const duplicatenotes=notes.find( 
    (notes)=> notes.title==title


)

if(!duplicatenotes)
{
    
    notes.push
    (
        {
            title:title,
            body:body
        }
     
    )
    savenotes(notes);
    console.log(chalk.green('note sucessfully saved with title ')+chalk.blue(title));
}
else{
    console.log(chalk.red('note with title :')+ chalk.yellow(title)+chalk.red(' already present'));
}


}


// READ NOTES FROM FILE AND RETURN JSON FORMATE
const localnotes=()=>
{
try{
    const databuffer=fs.readFileSync(file);
//READ FILES IN A SYNCHRONOUS WAY, I.E. 
//WE ARE TELLING NODE.JS TO BLOCK OTHER 
//PARALLEL PROCESS AND DO THE CURRENT FILE READING PROCESS
// BUFFER DATA IS BYTES FORMATE

    const dataJSON=databuffer.toString();
    // CONVERTS DATABUFFER TO STRING

    return JSON.parse(dataJSON);
    // RETURN JSON DATA AFTER CONVERTING DATA TO JSON FROM STRING 
}
catch(e) {
    // IF FILE IS EMPTY RETURN EMPTY ARRAY
    return [];
}
    
}

const savenotes=(notes)=>
{
    const dataJson=JSON.stringify(notes);
    // CONVERTS DATA FROM JSON TO STRING
    try{
        fs.writeFileSync(file,dataJson);
    }
    catch{
        console.log(chalk.bgRedBright('Error occured while writing the data in file'));
    }
    

}


// USED TO REMOVE NOTE WITH GIVEN TITLE FROM THE FILE
const removeNote=(title )=>
{
   
    const datainFormOfJSON=localnotes();
    var iSnotePresent=false;
  const notesTokepp=datainFormOfJSON.filter
  (
      (datainFormOfJSON)=>
      {
          const flag=datainFormOfJSON.title!=title

if(flag==false)
{
    iSnotePresent=true;
}
          return flag;
      }
  )
if(iSnotePresent==false)
{
    console.log(chalk.red.inverse('No such note found !'))
}
else{
    console.log(chalk.bgGreen('Note Remove sucessfully'));
    savenotes(notesTokepp);
}
   
   
}

// lIST NOTES SHOWS ALL NOTES PRESENT
const list_notes=()=>
{
    const notes=localnotes();
    console.log(chalk.inverse.greenBright('-----------YOUR NOTES--------'));
    notes.forEach(note => 
        {
            console.log('--'+chalk.inverse.yellow(note.title)+'--');
            console.log(chalk.magentaBright(note.body));

        
    });
}

// READ NOTE SHOWS THE NOTE WITH GIVEN TITLE IF PRESENT
const readNote=(title)=>
{

    
const notes=localnotes();
const requiredNotes=notes.find(
    (notes)=>notes.title===title
)

if(!requiredNotes)
{
    console.log(chalk.redBright.inverse('No such note with given title exists'));
}
else{

        
            console.log(chalk.inverse.gray(requiredNotes.title));
            console.log(chalk.whiteBright(requiredNotes.body));
            
        
 
}



}


module.exports={
    addNote:addNote,
    removeNote:removeNote,
    list_notes:list_notes,
    readNote:readNote

}