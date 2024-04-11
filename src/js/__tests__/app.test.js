import ArrayBufferConverter from './../app';

const dataTest = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';

function getBuffer(data) {
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
test('use toString, data', () => {
  const buffer = getBuffer(dataTest);
  const arrbuf = new ArrayBufferConverter();
  arrbuf.load(buffer);
  const data = arrbuf.toString();
  expect(data).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
