const newyear = '1 Jan 2024';

function countdownDate(){
    const inputDate = new Date(newyear);
    const currentdate = new Date();

    console.log(inputDate - currentdate);

    
}

//Initial call
countdownDate();

setInterval(countdownDate, 1000);