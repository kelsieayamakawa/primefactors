/**
 * Program that finds the largest prime factor of a number.
 * Created by Kelsie on 10/8/2015.
 */

var projectEulerThree = function(number)
{
  var factor = [];
  var divider = 2;
  while (number > 1)
  {
    while(number % divider === 0)
    {
      factor.push(divider);
      number /= divider;
    }

    divider += 1;
  }

  return factor[factor.length - 1];
};
