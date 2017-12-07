function egitimtile() {
	document.getElementById("eklemeler").innerHTML = "<div class=\"container\"><h2 style=\"text-align:center;\">EĞİTİM</h2><div class=\"row\"><div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\" onclick=\"lisansdonem()\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">Lisans</h4></div></div></div><div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\" onclick=\"yukseklisansdonem()\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">Yüksek Lisans</h4></div></div></div></div>";
}

function lisansguzsinif() {
	document.getElementById("eklemeler").innerHTML = "<div class=\"container\"><h2 style=\"text-align:center;\">SINIF</h2><div class=\"row\"><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">1. Sınıf</h4></div></div></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">2. Sınıf</h4></div></div></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">3. Sınıf</h4></div></div></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">4. Sınıf</h4></div></div></div></div></div>";
}

function lisansbaharsinif() {
	document.getElementById("eklemeler").innerHTML = "<div class=\"container\"><h2 style=\"text-align:center;\">SINIF</h2><div class=\"row\"><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">1. Sınıf</h4></div></div></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">2. Sınıf</h4></div></div></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">3. Sınıf</h4></div></div></div><div class=\"col-lg-3 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">4. Sınıf</h4></div></div></div></div></div>";
}

function lisansdonem() {
	document.getElementById("eklemeler").innerHTML = "<div class=\"container\"><h2 style=\"text-align:center;\">DÖNEM</h2><div class=\"row\"><div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\" onclick=\"lisansguzsinif()\"><img class\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">Güz</h4></div></div></div><div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\" onclick=\"lisansbaharsinif()\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">Bahar</h4></div></div></div></div></div>";
}

function yukseklisansdonem(){
	document.getElementById("eklemeler").innerHTML = "<div class=\"container\"><h2 style=\"text-align:center;\">DÖNEM</h2><div class=\"row\"><div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\"><img class\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">Güz</h4></div></div></div><div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\"><div class=\"card\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">Bahar</h4></div></div></div></div></div>";
}

function personeltile(){
	document.getElementById("eklemeler").innerHTML = "<div class=\"container\"><h2 style=\"text-align:center;\">PERSONEL</h2><div class=\"row\"><div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\"><div class=\"card\" onclick=\"ogretimuyeleritile()\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">Öğretim Üyeleri</h4></div></div></div><div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\"><div class=\"card\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">Akademik Yardımcı</h4></div></div></div><div class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12\"><div class=\"card\"><img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\"><div class=\"card-body\"><h4 class=\"card-title\">İdari Teknik</h4></div></div></div></div></div>";
}

function ogretimuyeleritile() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "js/ogretimuyeleri.json", true);
    xhttp.setRequestHeader("Content-type", "application/json", true);
    xhttp.onReadyStateChange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(xhttp.responseText);
            var results = document.getElementById("eklemeler");
            for(var obj in data){
            	results.innerHTML += data[obj].Ad;
            }
       }
    }
    xhttp.send(null);
}
