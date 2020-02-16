function billingFunction(){
    var count = 0;
    let name = document.getElementById("shippingName").value;
    let zip = document.getElementById("shippingZip").value;

    

    if(((document.getElementById("billingName").value) && (document.getElementById("billingZip").value)) == ""){     
        let billName = document.getElementById("billingName").value = name;
        let billZip = document.getElementById("billingZip").value = zip;
        if ((name == "") || (zip == "")) {
            alert("Please input information on the fields. Requirement for ZIP CODE: 5 numbers and above");
        }
    }else{
        let billName = document.getElementById("billingName").value = "";
        let billZip = document.getElementById("billingZip").value = "";     
    }   
}