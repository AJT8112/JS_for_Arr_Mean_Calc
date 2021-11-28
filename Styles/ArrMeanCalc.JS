
let arrayData = [3,7,'df','3',7,8,'df',23,6,2,67,'g','34',12,34,5];

function getAverage(arrData){
    let arrayValidation = true;
    if(!typeof Array.isArray(arrData)){
        arrayValidation = false;
    }

    if(arrayValidation){
        let numberQuantity = 0;
        for(arrayKey=0;arrayKey < arrayData.length; arrayKey++){
            let selectedData = arrayData[arrKey];
            if(!isNaN(selectedData)){
                sum += Number(selectedData);
                numberQuantity++;
            }
        }
        let average = sum / numberQuantity;
        console.log(average);
        return average.toFixed(7);
    } else{
        return "incorrect data structure entered";
    }
}
let button = document.querySelector('.runFunction');
button.addEventListener('click',function(event){
    let averageNumber = getAverage(arrData);
    let elementToUpdate = document.querySelector('.outputNumberHere');
    elementToUpdate.innerHTML = averageNumber;
})