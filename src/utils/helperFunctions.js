const clone = (Obj) => {
  let buf; // the cloned object
  if (Obj instanceof Array) {
    buf = []; // create an empty array
    Obj.forEach((item, i) => {
      buf[i] = clone(Obj[i]); // recursively clone the elements
    });
    return buf;
  }
  if (Obj instanceof Object) {
    buf = {}; // create an empty object
    Object.keys(Obj).forEach((k) => {
      buf[k] = clone(Obj[k]);
    });
    return buf;
  }
  return Obj;
};

// eslint-disable-next-line import/prefer-default-export
export { clone };
