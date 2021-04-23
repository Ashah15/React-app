// import operate from './operate';

// const calculate = (dataObj, buttonName) => {
//   const regex = new RegExp('^[0-9]|[.]+$');

//   if (buttonName === 'AC') {
//     return {
//       total: null,
//       next: null,
//       operation: null,
//     };
//   } if (buttonName === '+/-') {
//     if (dataObj.total !== null) {
//       return {
//         total: (Number(dataObj.total) * -1).toString(),
//       };
//     } if (dataObj.next !== null) {
//       return {
//         next: (Number(dataObj.next) * -1).toString(),
//       };
//     }
//   }

//   if (buttonName !== '=') {
//     if (regex.test(buttonName)) {
//       if (dataObj.total === null) {
//         return {
//           total: buttonName,
//         };
//       } if (dataObj.total !== null && dataObj.operation === null) {
//         return {
//           total: dataObj.total + buttonName,
//         };
//       }
//       if (dataObj.total !== null && dataObj.operation !== null) {
//         if (dataObj.next !== null) {
//           return {
//             next: dataObj.next + buttonName,
//           };
//         }
//         return {
//           next: buttonName,
//         };
//       }
//     } else {
//       if (dataObj.operation === null) {
//         return {
//           operation: buttonName,
//         };
//       }
//       return {
//         total: operate(dataObj.total, dataObj.next, dataObj.operation),
//         next: null,
//         operation: buttonName,
//       };
//     }
//   } else {
//     return {
//       total: operate(dataObj.total, dataObj.next, dataObj.operation) !== 'error' ?
// operate(dataObj.total, dataObj.next, dataObj.operation) : null,
//       next: null,
//     };
//   }
// };

// export default calculate;

import operate from './operate';

const calculate = (data, name) => {
  let result;
  const { total, next, operation } = data;
  switch (name) {
    case '+/-':
      result = total * (-1);
      break;
    case '.':
      result = '.';
      break;
    case 'AC':
      result = '';
      break;
    case '=':
      result = operate(total, next, operation);
      break;
    default:
  }

  return result;
};

export default calculate;
