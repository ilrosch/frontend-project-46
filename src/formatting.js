const spaceValue = ' ';
const spaceCount = 2;

const buildString = (type, key, value) => `${spaceValue.repeat(spaceCount)}${type} ${key}: ${value}\n`;

const formatting = (data) => {
  const result = data.map((item) => {
    const { type, key, value } = item;
    switch (type) {
      case 'added': {
        return buildString('+', key, value);
      }
      case 'deleted': {
        return buildString('-', key, value);
      }
      case 'changed': {
        return `${buildString('+', key, value.old)}${buildString('-', key, value.new)}`;
      }
      case 'unchanged': {
        return buildString(' ', key, value);
      }
      default: {
        return null;
      }
    }
  }).join('');

  return `{\n${result}}`;
};

export default formatting;
