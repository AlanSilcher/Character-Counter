function getId (id) {
    return document.getElementById(id).value
}

function innerHTML (id, result) {
    return document.getElementById(id).innerHTML=result
}

function characterCounter () {

    setInterval(function (){
        var count = getId("text")
        innerHTML("textView", count.length)
    },1000)
}