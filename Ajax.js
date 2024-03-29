function DodatneInformacije() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("ajax").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "informacije.txt");
    xhttp.send();
}