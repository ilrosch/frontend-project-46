import fs from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';

const readFile = (filePath) => {
  const fullFilePath = path.resolve(cwd(filePath), filePath);
  const data = fs.readFileSync(fullFilePath).toString();
  return (path.extname(filePath) === '.json') ? JSON.parse(data) : data;
};

const gendiff = (filePath1, filePath2) => {
  const dataFile1 = readFile(filePath1);
  const dataFile2 = readFile(filePath2);

  return [dataFile1, dataFile2];
};

export default gendiff;
