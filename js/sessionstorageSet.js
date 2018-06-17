function namePatient() {
    $naam = sessionStorage.getItem("patientNaam");
    if($naam != null) {
        document.getElementById("naamPatient").innerHTML = $naam;
    }
    console.log($naam);
}