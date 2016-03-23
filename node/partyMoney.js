/**
 * Created by shi.pengyan on 2016-03-03.
 */
//每月工资收入（税后）在3000元以下（含3000元）者，交纳月工资收入的0．5％；
// 3000元以上至5000元（含5000元）者，交纳1％；
// 5000元以上至10000元（含10000元）者，交纳1．5％；
// 10000元以上者，交纳2％。

function partyMoney(monthSalary) {
  var sum = 0;

  monthSalary.forEach(function (salary) {
    var factor = 0;
    if (salary <= 3000) {
      factor = 0.005;
    } else if (salary > 3000 && salary <= 5000) {
      factor = 0.01;
    } else if (salary > 5000 && salary <= 10000) {
      factor = 0.015;
    } else if (salary > 10000) {
      factor = 0.02;
    }
    sum += salary * factor;
  });
  return sum;
}

var sum1 = partyMoney([2033.42, 3211.51, 3153.54, 3176.02, 3102.86, 4012.85]);
console.log('2011.7-12', sum1);

var sum2 = partyMoney([4026.52, 4382.53, 4067.1, 4459.92, 4071.21, 4046.36, 4040.57, 4032.14, 4006.33, 4070.26, 4001.3, 3853.1]);
console.log('2012.1-12', sum2);

var sum3 = partyMoney([5199.27, 4450.36, 4458.07, 4203.20, 5005.1, 5000.45, 4892.52, 5256.7, 4886.79, 4938.35, 4899.02, 5213.2]);
console.log('2013.1-12', sum3);

var sum4 = partyMoney([5030.2, 5257.99, 4909.85, 4909.85, 8547.75, 8060.06, 8490.04, 7755.27, 8696.4, 8030.55, 7909.2, 9449.9]);
console.log('2014.1-12', sum4);

var sum5 = partyMoney([7944.82, 8249.04, 7916.6, 7922.24, 10085.52, 10023.61, 9925.02, 9980.25, 10254.71, 9898.9, 11829.34, 11416.04]);
console.log('2015.1-12', sum5);

var sum6 = partyMoney([18032.89]);
console.log('2016.1-3', sum6);

console.log('all', sum1 + sum2 + sum3 + sum4 + sum5 + sum6);