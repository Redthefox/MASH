function mash(){
    return "You will live in a " +getHome() + ", and you will have "  +getChildrenCount() + " kids, and you will drive a " +getCar()
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
