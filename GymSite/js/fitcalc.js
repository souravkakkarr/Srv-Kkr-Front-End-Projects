function calculateBmi() {
    var weight = document.BMIform.weight.value
    var height = document.BMIform.height.value
    if(weight > 0 && height > 0){
        var finalBmi = weight/(height*height)
        document.BMIform.bmi.value = finalBmi.toFixed(3);
        if(finalBmi < 16){
            document.BMIform.meaning.value = "You are unhealthy, Category:- Severe Thiness."
        }
        if(finalBmi >= 16 && finalBmi < 17){
            document.BMIform.meaning.value = "You are unhealthy, Category:- Moderate Thiness."
        }
        if(finalBmi >= 17 && finalBmi < 18.5){
            document.BMIform.meaning.value = "You are unhealthy, Category:- Mild Thiness."
        }
        if(finalBmi >= 18.5 && finalBmi < 25){
            document.BMIform.meaning.value = "You are healthy enough."
        }
        if(finalBmi >= 25 &&  finalBmi < 30){
            document.BMIform.meaning.value = "You are overweight."
        }
        if(finalBmi >= 30 && finalBmi < 35){
            document.BMIform.meaning.value = "Your condition is serious, Category:- Obese Class I"
        }
        if(finalBmi >= 35 && finalBmi < 40){
            document.BMIform.meaning.value = "Your condition is serious, Category:- Obese Class II"
        }
        if(finalBmi >= 40){
            document.BMIform.meaning.value = "Your condition is serious, Category:- Obese Class III."
        }
    }
    else{
        alert("Data you've entered might be incorrect. Please check and try again.")
    }   
}	