const chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
/**
 * Gets the error message from a failed API call
 * @param error
 * @returns {*}
 */
export function getErrorMessage(error) {
  let errorMsg = 'Some error happened. Please try again later.';

  if (typeof error === 'string') {
    errorMsg = error;
  } else if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.error_description
  ) {
    errorMsg = error.response.data.error_description;
  } else if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.errors &&
    error.response.data.errors.length > 0
  ) {
    errorMsg = '';
    error.response.data.errors.map(i => {
      errorMsg += `${i.field}: ${i.message} \n\n`;
      return i;
    });
    //errorMsg = error.response.data.errors[0].message;
  } else if (error?.response?.data?.message) {
    errorMsg =
      error &&
      error.response &&
      error.response.data &&
      error.response.data.message
        ? error.response.data.message
        : 'Some error happened. Please try again later.';
  } else if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.error
  ) {
    if (
      error &&
      error.response &&
      error.response.data &&
      typeof error.response.data.error === 'string'
    ) {
      errorMsg = error.response.data.error;
    } else {
      errorMsg =
        error &&
        error.response &&
        error.response.data &&
        error.response.data.error
          ? error.response.data.error.message
          : 'Some error happened. Please try again later.';
    }
  } else if (error && error.message) {
    errorMsg = error.message;
  }
  return errorMsg;
}

export const btoa = (input: string = '') => {
  let str = input;
  let output = '';

  for (
    let block = 0, charCode, i = 0, map = chars;
    str.charAt(i | 0) || ((map = '='), i % 1);
    output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
  ) {
    charCode = str.charCodeAt((i += 3 / 4));

    if (charCode > 0xff) {
      throw new Error(
        "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.",
      );
    }

    block = (block << 8) | charCode;
  }

  return output;
};

export function hexToRGB(hex, alpha) {
  let r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

export function isEmptyObj(obj) {
  return Object.keys(obj).length === 0;
}
