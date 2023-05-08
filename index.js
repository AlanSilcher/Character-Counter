function getId (id) {
    console.log(document.getElementById(id).value)
    return document.getElementById(id).value
}

function innerHTML (id, result) {
    return document.getElementById(id).innerHTML=result
}

function characterCounter () {

    setInterval(function (){
        var count = getId("txt")
        console.log(count)
        innerHTML("txtView", count.length)
    },0000)
}