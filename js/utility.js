                
function getIputValueById(inputid){
const inputfield = document.getElementById(inputid);
const  inputfield_string = inputfield.value;
inputfield.value='';
 const inputfield_value = parseFloat(inputfield_string);
return inputfield_value;
}


function getElementValueById(element_id){
const element = document.getElementById(element_id);
const element_value_string = element.innerText;
const element_value = parseFloat(element_value_string);
return element_value;
 }


function setTextElementValueById(elementid, newvalue){

const textelement = document.getElementById(elementid)
textelement.innerText= newvalue;
}


function addToCalculationEntry(areatype , area){
    console.log(areatype+' ' + area)
    const calculation_entry = document.getElementById('calculationEntry');

    const count =  calculation_entry.childElementCount;

    const p = document.createElement('p');

     p.classList.add('my-4')
    // p.innerHTML= areatype + ' ' + area;
    p.innerHTML = ` ${count +1 }. ${areatype} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success" >Convert</button> ` ;
    calculation_entry.appendChild(p);


}