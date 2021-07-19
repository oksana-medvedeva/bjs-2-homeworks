"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2-4*a*c;
  if (d === 0) {
    let x = -b/(2*a);
    arr = [x];
  } else if ( d > 0) {
    let x1 = (-b + Math.sqrt(d) )/(2*a); 
    let x2 = (-b - Math.sqrt(d) )/(2*a);
    arr = [x1, x2];
  }
  return arr; // array
}

function monthDiff(date1, date2) {
    let months;
    months = (date2.getFullYear() - date1.getFullYear()) * 12;
    months -= date1.getMonth();
    months += date2.getMonth();
    return months <= 0 ? 0 : months;
}

function validateParam(name, value) {
  let validatedValue = value;
  if (typeof value === 'string') {
    validatedValue = Number(value);
  } 
  if (isNaN(validatedValue) || typeof validatedValue !== 'number') {
    return `Параметр "${name}" содержит неправильное значение "${value}"`;
  }
  return validatedValue;
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  percent = validateParam("Процентная ставка", percent);
  if (typeof percent === 'string') {
    return percent
  }
  contribution = validateParam("Начальный взнос", contribution);
  if (typeof contribution === 'string') {
    return contribution
  }
  amount = validateParam("Общая стоимость", amount);
  if (typeof amount === 'string') {
    return amount
  }

  let totalAmount;
  let creditBody = amount - contribution;   
  let creditDuration = monthDiff(new Date(), date);
  let monthPercent = percent / (12 * 100);
  console.log(monthPercent);
  let monthPayment = creditBody * (monthPercent + monthPercent / (((1 + monthPercent)**creditDuration) - 1));
  console.log(monthPayment);
  totalAmount = Math.round(monthPayment * creditDuration * 100) / 100;

  // код для задачи №2 писать здесь

  return totalAmount;
}
