function getId (id) {
    return document.getElementById(id).value
}

function innerHTML (id, result) {
    return document.getElementById(id).innerHTML=result
}

function characterCounter () {

    setInterval(function (){
        var count = getId("txt")
        innerHTML("txtView", count.length)
    },0000)
}