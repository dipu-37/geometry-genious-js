
 function calculateTriangleArea() {
    
    // const baseField = document.getElementById('triangleBase');
    // const baseValueText = baseField.value ;
    // const base = parseFloat(baseValueText);
    // console.log(base);

    const base = getIputValueById('triangleBase')
    console.log(base);

    // const heightField = document.getElementById('triangleHeight');
    // const heightvalueText = heightField.value;
    // const height= parseFloat(heightvalueText);
    // console.log(height);

    const height = getIputValueById('triangleHeight')
    console.log(height);
  
  
    const area =0.5 * base * height;
    console.log(area)

    //    const result = document.getElementById('resultarea')
    //     result.innerText = area;

    setTextElementValueById('resultarea', area);


}

function calculateRectangleArea(){
    const w_Field = document.getElementById('rectangle_w');
    const w_ValueText = w_Field.value ;
    const w = parseFloat(w_ValueText);
    console.log(w);

    const l_tField = document.getElementById('rectangle_l');
    const l_valueText = l_tField.value;
    const l= parseFloat(l_valueText);
    console.log(l);

    const area =w * l;
    console.log(area)
 
    const result_rec = document.getElementById('resultarea_rec')
    result_rec.innerText =area;
}

function calculeParallelogramArea(){
    
    const base_p = getIputValueById('parallelogram_base')
    console.log(base_p);

    const height_p = getIputValueById('parallelogram_height')
    console.log(height_p);
  
  
    const area_P = base_p * height_p;
    console.log(area_P)

    setTextElementValueById('parallelogram_res',area_P);

}