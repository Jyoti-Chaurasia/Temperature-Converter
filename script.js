let celsius=document.getElementById('celsius');
let fahrenhiet=document.getElementById('fahrenhiet');
let kelvin=document.getElementById('kelvin');

celsius.oninput = () =>{
    let output = parseFloat(celsius.value)*9/5+32;
    fahrenhiet.value= parseFloat(output.toFixed(2));
    kelvin.value=(parseFloat(celsius.value)+273);
};

fahrenhiet.oninput = () =>{
    let output=parseFloat((fahrenhiet.value)-32)*5/9;
    celsius.value= parseFloat(output.toFixed(2));
    kelvin.value=parseFloat((output+273).toFixed(2));
}

kelvin.oninput = () =>{
    let output = (parseFloat(kelvin.value)-273)*9/5+32;
    fahrenhiet.value= parseFloat(output.toFixed(2));
    celsius.value=(parseFloat(kelvin.value)-273);
};