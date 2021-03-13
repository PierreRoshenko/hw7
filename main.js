const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/////////////////////// 1 //////////////////////
console.log('Task 1');

function getMyTaxes(salary) {
    console.log(+(salary * this.tax).toFixed(2))
}

const salary = 500
getMyTaxes.call(ukraine, salary);
getMyTaxes.call(latvia, salary);
getMyTaxes.call(litva, salary);

///////////////////////// 2 ///////////////////////////
console.log('Task 2');

function getMiddleTaxes() {
    console.log(+(this.middleSalary * this.tax).toFixed(2));
}

getMiddleTaxes.call(ukraine);
getMiddleTaxes.call(latvia);
getMiddleTaxes.call(litva);

/////////////////////////// 3 ////////////////////////////
console.log('Task 3');

function getTotalTaxes() {
    console.log(this.tax * this.middleSalary * this.vacancies);
}
getTotalTaxes.call(ukraine);
getTotalTaxes.call(latvia);
getTotalTaxes.call(litva);
/////////////////////////// 4 ////////////////////////////
console.log('Task 4');


function getMySalary(country) {
    const taxes = country.tax;
    setInterval(() => {

        const salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
        const mySalay = {
            salary: salary,
            taxes: +((taxes * salary).toFixed(2)),
            profit: +(salary - (taxes * salary)).toFixed(2)
        }
        console.log(mySalay);
    }, 10000)
}

getMySalary(ukraine);
getMySalary(latvia);
getMySalary(litva);