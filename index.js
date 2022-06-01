function fizzbuzz(num) {
  if (typeof num !== 'number') {
    return 'You should enter a number';
  } else if (num === 0) {
    return '0 is not a multiple of any number';
  } else if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
}

function result(limit) {
  for (let i = 0; i <= limit; i++) {
    console.log(fizzbuzz(i));
  }
}

result(62);

module.exports = fizzbuzz;
