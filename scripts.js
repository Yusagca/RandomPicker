var geciciListe = []

function picker() {
    var names = geciciListe
    var secim = Math.floor(Math.random() * names.length);
    var isim = names[secim]
    return isim
}
var ses = new Audio("ses.wav");
function hizliDegis(){
    for (let index = 0; index < 85; index++) {
        setTimeout(() => {
            document.getElementById("metin").innerHTML = picker()
            ses.play()
        }, (index * index))
    }
}

function listeyeEkle(){
    var newData = document.getElementById("textBox").value;
    if (newData =="") {
        var yazi = "Bir veri girin!"
        document.getElementById("uyari").innerHTML =yazi;
    }
    else{
        geciciListe.push(newData);
        document.getElementById("textBox").value ="";
        document.getElementById("uyari").innerHTML = newData + " eklendi";
        document.getElementById("dizi").innerHTML ="Listeniz:'"+geciciListe+"'" ;
        
    }
    


}

function clr(){
   geciciListe = []
    document.getElementById("dizi").innerHTML ="Listeniz:";
    document.getElementById("uyari").innerHTML ="Veri Girin";
    document.getElementById("metin").innerHTML ="Seçim";

}

