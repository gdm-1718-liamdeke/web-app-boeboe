function nameSet(){
    
    /** set patient name **/
    $naam = sessionStorage.getItem("patientNaam");
    if($naam !== null || $naam !== "") {
        document.getElementById("ochtendzorgNaam").innerHTML = $naam ;
    }
    console.log($naam);
} 

setTimeout(nameSet, 0);