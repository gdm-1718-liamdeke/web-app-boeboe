function AJAXrequest(url, postedData, callback) {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            console.log(data);
        }
    });

    $test = "qdgjsdgmlkdjfgm0";
    console.log($test);
}

function test(){
    $test = "qdgjsdgmlkdjfgm0";
    console.log($test);
}