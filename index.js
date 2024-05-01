let input = document.getElementById("input-gst");
let radio = document.querySelectorAll("input[type='radio']");
let generate = document.getElementById("generate");
let select = document.getElementById("select");
let calculate = document.querySelector(".calculate");
let result_input = document.getElementById("result-input");
let result = document.getElementById("result");
let table = document.getElementById("result-container-intra-state");

let result_gst = 0;
let gst_percentage = 0;
let cgst = 0;
let sgst = 0;
let gst = 0;
let cgst_amount = 0;
let sgst_amount = 0;
let gst_amount = 0;
let dynamically_created = false;
let incrOrDecrement = 0;
let igst = 0;
 


/* 
   
const obj = {
    "cgst" : 
    {
        "type" : "cgst";
        "type" : 
    }
}
*/
let tr = [];
    let tdata = [];
    let tdataCount = 0;
    let td = []

function createTable(){
    
   if(!dynamically_created){

    let tr1 =  document.createElement("tr");
    table.appendChild(tr1);

    for(let i = 0; i < 3; i++){
        td[i] = document.createElement("th");
        tr1.appendChild(td[i]);
        console.log(td[i]);
    }
    td[0].textContent = "GST Type";
    td[1].textContent = "Percentage";
    td[2].textContent = "Amount";

    
    for(let i = 0; i< 3; i++){
        tr[i] = document.createElement("tr");
        for(let j = 0; j < 3; j++){
            tdata[tdataCount] = document.createElement("td")
            tr[i].appendChild(tdata[tdataCount++]);
        }
        table.appendChild(tr[i]);
    }
    
    
  dynamically_created = true;
}
if(dynamically_created){ 
    tdata[0].textContent = "CGST";
    tdata[1].textContent = cgst; 
    tdata[2].textContent = cgst_amount;
    tdata[3].textContent = "SGST";
    tdata[4].textContent = sgst;
    tdata[5].textContent = sgst_amount;
    tdata[6].textContent = "GST";
    tdata[7].textContent = gst;
    tdata[8].textContent = gst_amount;
    
}


}

generate.addEventListener("click", ()=>{
    calculate.style.display = "block";
    if(radio[0].checked){
        select.style.display = "block";
    }
    if(radio[1].checked){
         select.style.display = "block";
        
         
    }
}, false);


calculate.addEventListener("click", ()=>{
    if(radio[0].checked){
        gst_percentage = select.value;
        table.style.display = "block";

         incrOrDecrement = parseFloat(gst_percentage);
        switch(select.value){
            case "+3":
                result_gst = (parseFloat(input.value) * parseFloat(gst_percentage)) / 100;
                cgst = (parseFloat(gst_percentage)/2).toFixed(2);
                sgst = (parseFloat(gst_percentage)/2).toFixed(2);
                gst = (parseFloat(cgst) + parseFloat(sgst)).toFixed(2);
                cgst_amount = (parseFloat(input.value) * parseFloat(cgst)) / 100
                sgst_amount = cgst_amount;
                gst_amount = result_gst.toFixed(2);
                console.log(result_gst);
                
                break;

            case "+5":
                result_gst = (parseFloat(input.value) * gst_percentage) / 100;
                result_gst = parseFloat(result_gst.toFixed(2));
                cgst = (parseFloat(gst_percentage)/2).toFixed(2);
                sgst = (parseFloat(gst_percentage)/2).toFixed(2);
                 gst = (parseFloat(cgst) + parseFloat(sgst)).toFixed(2);
                 cgst_amount = (parseFloat(input.value) * parseFloat(cgst)) / 100
                 sgst_amount = cgst_amount;
                 gst_amount = result_gst.toFixed(2);
                console.log(result_gst);
                break;

            case "+12":
                result_gst = (parseFloat(input.value) * gst_percentage) / 100;
                result_gst = parseFloat(result_gst.toFixed(2));
                cgst = (parseFloat(gst_percentage)/2).toFixed(2);
                sgst = (parseFloat(gst_percentage)/2).toFixed(2);
                 gst = (parseFloat(cgst) + parseFloat(sgst)).toFixed(2);
                 cgst_amount = (parseFloat(input.value) * parseFloat(cgst)) / 100
                 sgst_amount = cgst_amount;
                 gst_amount = result_gst.toFixed(2);
                console.log(result_gst);
                break;
                
            case "+18":
                result_gst = (parseFloat(input.value) * gst_percentage) / 100;
                result_gst = parseFloat(result_gst.toFixed(2));
                cgst = (parseFloat(gst_percentage)/2).toFixed(2);
                sgst = (parseFloat(gst_percentage)/2).toFixed(2);
                 gst = (parseFloat(cgst) + parseFloat(sgst)).toFixed(2);
                 cgst_amount = (parseFloat(input.value) * parseFloat(cgst)) / 100
                 sgst_amount = cgst_amount;
                 gst_amount = result_gst.toFixed(2);
                console.log(result_gst);
                break;

            case "+28":
                result_gst = (parseFloat(input.value) * gst_percentage) / 100;
                result_gst = parseFloat(result_gst.toFixed(2));
                cgst = (parseFloat(gst_percentage)/2).toFixed(2);
                sgst = (parseFloat(gst_percentage)/2).toFixed(2);
                 gst = (parseFloat(cgst) + parseFloat(sgst)).toFixed(2);
                 cgst_amount = (parseFloat(input.value) * parseFloat(cgst)) / 100
                 sgst_amount = cgst_amount;
                 gst_amount = result_gst.toFixed(2);
                console.log(result_gst);
                break;

            case "-3":
                result_gst = (parseFloat(input.value) * gst_percentage) / 100;
                result_gst = parseFloat(result_gst.toFixed(2));
                cgst = (parseFloat(gst_percentage)/2).toFixed(2);
                sgst = (parseFloat(gst_percentage)/2).toFixed(2);
                 gst = (parseFloat(cgst) + parseFloat(sgst)).toFixed(2);
                 cgst_amount = (parseFloat(input.value) * parseFloat(cgst)) / 100
                 sgst_amount = cgst_amount;
                 gst_amount = result_gst.toFixed(2);
                console.log(result_gst);
                break;

            case "-5":
                result_gst = (parseFloat(input.value) * gst_percentage) / 100;
                result_gst = parseFloat(result_gst.toFixed(2));
                cgst = (parseFloat(gst_percentage)/2).toFixed(2);
                sgst = (parseFloat(gst_percentage)/2).toFixed(2);
                 gst = (parseFloat(cgst) + parseFloat(sgst)).toFixed(2);
                 cgst_amount = (parseFloat(input.value) * parseFloat(cgst)) / 100
                 sgst_amount = cgst_amount;
                 gst_amount = result_gst.toFixed(2);
                console.log(result_gst);
                break;

            case "-12":
                result_gst = (parseFloat(input.value) * gst_percentage) / 100;
                result_gst = parseFloat(result_gst.toFixed(2));
                cgst = (parseFloat(gst_percentage)/2).toFixed(2);
                sgst = (parseFloat(gst_percentage)/2).toFixed(2);
                 gst = (parseFloat(cgst) + parseFloat(sgst)).toFixed(2);
                 cgst_amount = (parseFloat(input.value) * parseFloat(cgst)) / 100
                 sgst_amount = cgst_amount;
                 gst_amount = result_gst.toFixed(2);
                console.log(result_gst);
                break;

            case "-18":
                result_gst = (parseFloat(input.value) * gst_percentage) / 100;
                result_gst = parseFloat(result_gst.toFixed(2));
                cgst = (parseFloat(gst_percentage)/2).toFixed(2);
                sgst = (parseFloat(gst_percentage)/2).toFixed(2);
                 gst = (parseFloat(cgst) + parseFloat(sgst)).toFixed(2);
                 cgst_amount = (parseFloat(input.value) * parseFloat(cgst)) / 100
                 sgst_amount = cgst_amount;
                 gst_amount = result_gst.toFixed(2);
                console.log(result_gst);
                break;

            case "-28":
                result_gst = (parseFloat(input.value) * gst_percentage) / 100;
                result_gst = parseFloat(result_gst.toFixed(2));
                cgst = (parseFloat(gst_percentage)/2).toFixed(2);
                sgst = (parseFloat(gst_percentage)/2).toFixed(2);
                 gst = (parseFloat(cgst) + parseFloat(sgst)).toFixed(2);
                console.log(result_gst);
                cgst_amount = (parseFloat(input.value) * parseFloat(cgst)) / 100
                sgst_amount = cgst_amount;
                gst_amount = result_gst.toFixed(2);
                break;

            default:
                break;

        }
        
            createTable();
            result.style.display = "block";
            result.textContent = `Total Amount Rs.${parseInt(input.value) + sgst_amount + cgst_amount}`;
        
    }
    if(radio[1].checked){
        table.style.display = "none";
        gst_percentage = select.value;
        switch(gst_percentage) {
            case "+3":
                    igst = (parseFloat(input.value) * parseFloat(gst_percentage)) / 100;
                    break;      
            case "+5":
                    igst = (parseFloat(input.value) * parseFloat(gst_percentage)) / 100;
                    break;     
            case "+12":
                    igst = (parseFloat(input.value) * parseFloat(gst_percentage)) / 100;
                    break;
            case "+18":
                    igst = (parseFloat(input.value) * parseFloat(gst_percentage)) / 100;
                    break;
            case "+28":
                    igst = (parseFloat(input.value) * parseFloat(gst_percentage)) / 100;
                    break;
            case "-3":
                    igst = (parseFloat(input.value) * parseFloat(gst_percentage)) / 100;
                    break;
            case "-5":
                    igst = (parseFloat(input.value) * parseFloat(gst_percentage)) / 100;
                    break;
            case "-12":
                    igst = (parseFloat(input.value) * parseFloat(gst_percentage)) / 100;
                    break;
            case "-18":
                    igst = (parseFloat(input.value) * parseFloat(gst_percentage)) / 100;
                    break;
            case "-28":
                    igst = (parseFloat(input.value) * parseFloat(gst_percentage)) / 100;
                    break;
                    
                   
                    }
         result.style.display = "block";

         result.textContent = `Total Amount Rs. ${(parseFloat(input.value) + igst).toFixed(2)}`;
    }
}, false);






