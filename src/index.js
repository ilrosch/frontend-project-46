import fs from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';

import getTree from './displayTree.js';
import formatting from './formatting.js';

const readFile = (filePath) => {
  const fullFilePath = path.resolve(cwd(filePath), filePath);
  const data = fs.readFileSync(fullFilePath).toString();
  return (path.extname(filePath) === '.json') ? JSON.parse(data) : data;
};

const genDiff = (filePath1, filePath2) => {
  const dataFile1 = readFile(filePath1);
  const dataFile2 = readFile(filePath2);
  const tree = getTree(dataFile1, dataFile2);
  return formatting(tree);
};

export default genDiff;
