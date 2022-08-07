function replaceString() {
    var url = "http://worldtimeapi.org/api/timezone/{Africa}/{Accra}";

    var continent = document.getElementById("cont").value;
    var country = document.getElementById("coun").value;

    finalURL = url.replace('{Africa}', continent).replace('{Accra}', country);
    console.log(finalURL);
    console.log(continent);
    event.preventDefault();
    return finalURL

}

function ajaxCall() {
    URLL = finalURL
    var finalDate

    $.ajax({


        url: URLL,



        type: "GET",


        success: function(data) {

            var x = JSON.stringify(data);
            info = JSON.parse(x);
            y = info.raw_offset + info.dst_offset;
            hoursDiff = y / 3600;
            dt = new Date();
            dt.setHours(dt.getHours() + hoursDiff);
            finalDate = dt;
            result(finalDate)
                //console.log(finalDate)
                //return dt;
                //console.log(x);
                //console.log(info);
                //console.log(y);
                //tt = dt;

        },


        error: function(error) {

            alert("Can not find location, sorry")
            console.log(`Error ${error}`);
        }
    });
    //console.log(finalDate)


}

function result(stringTime) {
    console.log(stringTime);
    //Result = document.write(stringTime);
    document.getElementById('output').innerHTML = stringTime;
}