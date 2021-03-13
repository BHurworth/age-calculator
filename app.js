
document.getElementById('form').addEventListener('submit', function(e){
    document.querySelector('#loading').style.display = "block";
    document.getElementById('result').style.display = 'none';
    setTimeout(calculateAge, 500);
    e.preventDefault();
});

function calculateAge(){
    const dob = document.querySelector('.date').value;
    const currentDate = new Date();
    const birthDate = new Date(dob);
    const diffTime = Math.abs(currentDate - birthDate);
    const diffDays = diffTime / (1000 * 60 * 60 * 24); 
    
    if (diffDays > 365) {
        document.querySelector('#loading').style.display = "none";  
        document.getElementById('result').style.display = 'block';     
        const resultYears = (Math.floor(diffDays/365));
        const resultDays = Math.floor((diffDays - (Math.floor(diffDays/365)*365)));
        let result = document.getElementById('result');
        result.value = "You are " + resultYears + " years and " + resultDays + " days old";
    } 
    else if (diffDays < 0) {
        document.querySelector('#loading').style.display = "none";  
        document.getElementById('result').style.display = 'block'; 
        let result = document.getElementById('result');
        result.value = "This is not a valid date";
    }
    else{
        document.querySelector('#loading').style.display = "none";  
        document.getElementById('result').style.display = 'block';     
        const resultYears = (Math.floor(diffDays/365));
        const resultDays = Math.floor((diffDays - (Math.floor(diffDays/365)*365)));
        let result = document.getElementById('result');
        result.value = "You are " + resultDays + " days old";
    }

}
