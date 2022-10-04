const getValueInput = () =>{
    let inputValue = document.getElementById("box-text").value; 
    document.getElementById("text-luna").innerHTML =`${parseFloat(inputValue*0.166).toFixed(2)} kgs`; 
    document.getElementById("text-mercurio").innerHTML =`${parseFloat(inputValue*0.378).toFixed(2)} kgs`;
    document.getElementById("text-venus").innerHTML =`${parseFloat(inputValue*0.906).toFixed(2)} kgs`;
    document.getElementById("text-marte").innerHTML =`${parseFloat(inputValue*0.379).toFixed(2)} kgs`;
    document.getElementById("text-jupiter").innerHTML =` ${parseFloat(inputValue*2.533).toFixed(2)} kgs`;
    document.getElementById("text-saturno").innerHTML =`${parseFloat(inputValue*1.066).toFixed(2)} kgs`;
    document.getElementById("text-urano").innerHTML =`${parseFloat(inputValue*0.905).toFixed(2)} kgs`;
    document.getElementById("text-neptuno").innerHTML =`${parseFloat(inputValue*1.133).toFixed(2)} kgs`;
    document.getElementById("text-pluton").innerHTML =`${parseFloat(inputValue*0.067).toFixed(2)} kgs`;
  }
