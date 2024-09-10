import fs from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';

import getDifferenceTree from './modules/buildTree.js';
import formatters from './modules/formatters/index.js';
import parsers from './modules/parsers.js';

const readFile = (filePath) => {
  const fullFilePath = path.resolve(cwd(filePath), filePath);
  const data = fs.readFileSync(fullFilePath).toString();
  return parsers(path.extname(filePath).slice(1), data);
};

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const dataFile1 = readFile(filePath1);
  const dataFile2 = readFile(filePath2);
  const tree = getDifferenceTree(dataFile1, dataFile2);
  return formatters(tree, format);
};

export default genDiff;
