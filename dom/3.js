
function getFormvalue() {
    let name = document.getElementById('form1')
    console.log(name)  // Bu satıra gerek kalmamazı lazım ama ikisini göstermesi için yazmamız gerekiyor gibi
    for(var i=0; i<name.length; i++)
    {
        if(name[i].value != 'Submit'){
            console.log(name[i].value)
        }
    }

}



    