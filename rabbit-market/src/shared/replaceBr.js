export const replaceBr = (x) => {
  const edited = new String(x);
  return edited.replaceAll('<br>', '\r\n');
};
