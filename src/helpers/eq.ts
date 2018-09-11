export function eq(val1, val2, options) {
  if (val1 === val2) {
    return options.fn(this);
  }
}

export function isQuery(val, options) {
  if (val === 'query') {
    return options.fn(this);
  }
}

export function isMutation(val, options) {
  if (val === 'mutation') {
    return options.fn(this);
  }
}
