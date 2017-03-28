/**
 * JSON-PARSE
 *
 * Parse json into array of objects
 * @module htz-inter-demo/parse-json
 * @license MIT
 */

export default function parseData(data) {
  const dataArray = data.data;

  if (!dataArray) throw new Error('Not the data!');

  const validEntries = dataArray.filter(filterItems);

  validEntries.forEach(varifyData);
}

function filterItems(item) {
  let isValid;
  const validKeys = ['url', 'target', 'type', 'text', 'attrs'];

  validKeys.forEach((key) => { isValid = item.hasOwnProperty(key) });

  return isValid;
}

function varifyData(item) {
  if (typeof item.url !== 'string') {
    throw new Error(
      `The "url" key of all objects must be a string, but ${item.url} which is a ${typeof item.url} was passed`
    );
  }
  if (!Array.isArray(item.attrs)) {
    throw new Error(`The "attrs" key of all objects must be an array, but ${item.attrs} was passed`);
  }

}

// const types = [
//   { key: 'url', value: [ 'string' ] },
//   { key: 'target', ['_top', '_blank', '_parent', '_self', false] },
//   { key: 'type', ['normal', 'rounded'] },
//   { key: 'text', value: [ 'string' ] },
//   { key: 'attribute', value: [ 'array' ] },
// ];
