function mash(){
    return "You will live in a " +getHome() + ", and you will have "  +getChildrenCount() + " kids, and you will drive a " +getCar() + " and you will marry "   +spouseName() + " and you will work as a " +yourJob()
}
console.log(mash());
function getHome(){
    let mess=["Mansion","Apartment","Shack","House",process.argv[2],"Alley"]
    return (mess[Math.floor(Math.random()*5+1)])
}
function getChildrenCount(){
    return Math.floor(Math.random()*100+1)
}
function getCar(){
    let cars=["Maxima","Lambo","Rouge","Lincoln",process.argv[3]]
    return (cars[Math.floor(Math.random()*4+1)])
}
function spouseName(){
    let spouse=["Martha", "Sarah", "Delilah", "Victoria"]
    return spouse[Math.floor(Math.random()*3+1)]
}
function yourJob(){
    let job =["Engineer","Game Dev", "Taxi Driver", "Baker"]
    return job[Math.floor(Math.random()*3+1)]
    }
    