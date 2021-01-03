module.exports = function (source) {
  console.log(source);
  // console.log('jk');
  return `export default ${JSON.stringify(source)}`
};

module.exports.pitch = () => {
  console.log('pitch');

  // return 'returned';
}
