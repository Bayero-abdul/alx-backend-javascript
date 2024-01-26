function calculateNumber(type, a, b) {
  const roundedA = math.round(a);
  const roundedB = math.round(b);

  switch (type) {
    case 'SUM':
      return roundedA + roundedB;

    case 'SUBTRACT':
      return roundedA - roundedB;

    case 'DIVIDE':
     if (roundedB === 0) {
       return 'Error';
     }
     return roundedA / roundedB;

     default:
       throw new Error('Invalid type. Please use SUM, SUBTRACT, or DIVIDE.');
  }
}

modules.export = calculateNumber;
