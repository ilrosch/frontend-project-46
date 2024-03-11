import stylish from './stylish.js';

const formatting = (data, format) => {
  switch (format) {
    case 'stylish': {
      return stylish(data);
    }
    default: {
      throw new Error(`Error formatting: ${format}`);
    }
  }
};

export default formatting;
