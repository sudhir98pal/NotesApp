
const event={
    name:'Birthday party',
    guestlist:['sudhir ','sushil','sonam','shanti','nanadlal','ramanth','kevla'],
    printguestlist(){
        console.log('Guest list for '+this.name);
        this.guestlist.forEach(
        (guest)=>
            {
                console.log(guest+' is attending party '+this.name);
            }
        )
    }
    
}

event.printguestlist();