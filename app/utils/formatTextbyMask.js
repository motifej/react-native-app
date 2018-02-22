/*
* apply mask to text value
*
 * @param {String} input text value
 * @param {String} mask(example - 'xxx xx-xx-xx')
*/
export default (value, mask) => {
  if(!mask) {
    return value;
  }
  const formatedPhone = value.replace(/\D/g,'').split('').reduce((res, el)=> res.replace('x', el), mask);
  const lastIndexX = formatedPhone.indexOf('x');
  const phone = lastIndexX < 0 ? formatedPhone : formatedPhone.slice(0, lastIndexX);
  return /\d/.test(phone[phone.length-1]) ? phone : phone.slice(0,-1);
}