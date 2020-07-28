
const yargs=require('yargs');
const { string, command, argv } = require('yargs');
// helps to build interactive command line tools

const notes=require('./note.js');
// it helps to use function defined in note.js file


// REMOVE NOTE COMMAND
yargs.command(
    {

        command:'remove note',
        describe:'this command is used to remove the note',
        builder:
        {
            title:
            {
                describe:'title of the notes to be detelted',
                demandOption:true,
                type:'string'


            }


        }
        
        ,
        handler:(argv)=>
        {
notes.removeNote(argv.title);
        }
    }
)



// ADD  NOTE COMMAND
yargs.command
(
    {
        command:'add',
        describe:'adds a note',
        builder:
        {
            title:
            {
                describe:'Notes title',
                demandOption:true,
                type:'string'

            }
,
            body:
            {
                describe:'Notes body',
                demandOption:true,
                type:'string'

            }
        },

        handler: (argv)=>
        {

           
notes.addNote(argv.title,argv.body);
        }

    }

   
    
)  ;  


// COMMAND TO DISPLAY ALL NOTES
yargs.command
(
{
    command:'list all notes',
    describe:'print all notes',
    handler:()=>notes.list_notes()
    


}
)

// COMMAND TO READ NOTE WITH GIVEN TITLE
yargs.command(
    {
        command:'read note',
        describe:'Display the Body of entered notes title if Exists',
        builder:{
title:
{
    describe:'notes title',
    demandOption:true,
    type:'string' 
}
        },
        handler:(argv)=>notes.readNote(argv.title)
    }
)

yargs.parse();