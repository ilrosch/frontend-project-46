import yaml from 'js-yaml';

const parse = {
  json: JSON.parse,
  yml: yaml.load,
  yaml: yaml.load,
};

export default (extname, data) => parse[extname](data);
