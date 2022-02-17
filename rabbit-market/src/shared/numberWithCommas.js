export function numberWithCommas(x) {
  const before = new String(x);
  const edited = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return edited;
}
