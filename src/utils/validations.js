/**
 * Check if value provided is an email
 * @param val
 * @returns {boolean}
 */
export function isEmail(val) {
  // let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return re.test(val);
}

/**
 * Check if the value provided is empty
 * @param val
 * @returns {boolean}
 */
function isNotEmpty(val) {
  return Boolean(val !== 0 || val !== false || val !== '' || val);
}

/**
 * Checks if string is password with at least 8 characters, one letter, one number and one special char
 * @param val
 * @returns {boolean}
 */
export function isPassword(val) {
  if (!val) {
    return false;
  }

  //const re = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W]).*$/;
  const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%&*()_+=|<>?{}\\\[\]~-])[A-Za-z\d!@#$%&*()_+=|<>?{}\\\]\[~-]{8,}$/;
  return re.test(val);
}

/**
 * Validation types
 * @type {{password: *, notEmpty: *, email: *}}
 */
export const validationTypes = {
  email: isEmail,
  password: isPassword,
  notEmpty: isNotEmpty,
};

/**
 * Validation messages
 * @type {{password: string, terms: string, notEmpty: string, email: string}}
 */
export const validationMessages = {
  email: 'Please enter a valid email address.',
  password:
    'Password should be at least 8 characters long, contain at least 1 letter, 1 number and 1 special character.',
  notEmpty: 'Mandatory field.',
  terms: 'Please accept the terms to continue.',
};
