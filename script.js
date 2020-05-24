//day calculator
var firstDate = new Date('05/12/2020');
var lastDate = new Date('05/12/2023');
dayCalculator(firstDate, lastDate)


function dayCalculator(firstDate, lastDate) {

    var businessday = 0;
    var weekends = 0;
    firstDate = AddDays(1, firstDate)
  
    var i=0;
    for ( i ;firstDate < lastDate;i++) {


        if (firstDate.getDay() != 0 && firstDate.getDay() != 6) {
            console.log(firstDate);
            businessday++;
            //prints workdays
        } else {
            weekends++;

            //prints weekends
        }
        // if (firstDate.getDay() == 0 || firstDate.getDay() == 6) {
        //      console.log(firstDate);
        //      businessday++;
               
        //  }

        //   if ( (firstDate.getDay() ==1) || (firstDate.getDay() ==2) || (firstDate.getDay() ==3) || (firstDate.getDay() ==4) || (firstDate.getDay() ==5))
        //   {
          //if equals businessday ,prints. work days getDay method 1,2,3,4,5
           
        //        console.log(firstDate);
        //        Isgunu++;
        //   }
        firstDate = AddDays(1, firstDate);

    }

    console.log(`Total days: ${i}`);
    console.log(`there is  ${businessday} business days`);
    console.log(`there is ${weekends} weekend days `);
}

function AddDays(days, starDate) {
    var date = new Date(starDate);
    date.setDate(date.getDate() + days);
    return date;
}