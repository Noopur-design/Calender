let previousmonth = document.getElementById("prevMonth")
let nextmonth = document.getElementById("nextMonth")
let monthyear = document.getElementById("monthYear")
const dates = document.getElementById("dates");

let currentdate = new Date();

const renderCalender= ()=>{
    const month = currentdate.getMonth()
    const year = currentdate.getFullYear()
    monthyear.textContent =  currentdate.toLocaleString('default' , {month:"long"}) + ' '+ year
    
    const firstday = new Date(year , month , 1)
    const lastday = new Date(year , month + 1 , 0)
    
    const totalDays = lastday.getDate();
    const startingDay = firstday.getDay();
    
    dates.innerHTML = ' ';

        // Empty days before the first day of the month
        for (let i = 0; i < startingDay; i++) {
            dates.innerHTML += `<div class="date"></div>`;
        }
        
        // Days of the month
        for (let day = 1; day <= totalDays; day++) {
            dates.innerHTML += `<div class="date">${day}</div>`;
        }
    }
    

previousmonth.addEventListener(click, ()=>{
    currentdate.setMonth(currentdate.getMonth() - 1)
    renderCalender();
})

nextmonth.addEventListener(click, ()=>{
    currentdate.setMonth(currentdate.getMonth() + 1)
    renderCalender();
})
renderCalender();