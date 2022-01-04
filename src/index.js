module.exports = function reverse (n) {
    const newLocal = +n.toString()
                        .split('')
                        .filter(e=> !isNaN(+e))
                        .reverse()
                        .join('');
  return newLocal;
}
