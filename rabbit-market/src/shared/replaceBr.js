export const replaceBr = (x) => {
  const before = new String(x);
  console.log(before.replaceAll('<br>', '\r\n'));

  // return x.replaceAll('<br>', '\r\n');
};
