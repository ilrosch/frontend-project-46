import fs from 'node:fs';
import path from 'node:path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { test, expect, describe } from '@jest/globals';

import utility from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const genDiff = utility;

const expectedJson = readFile('expectedJson.txt');

describe('test the gendiff utility', () => {
  test('extname (json)', () => {
    const pathFile1 = getFixturePath('file1.json');
    const pathFile2 = getFixturePath('file2.json');
    expect(genDiff(pathFile1, pathFile2)).toEqual(expectedJson);
  });

  test('extname (yml/yaml)', () => {
    const pathFileYml1 = getFixturePath('file1.yml');
    const pathFileYml2 = getFixturePath('file2.yml');
    expect(genDiff(pathFileYml1, pathFileYml2)).toEqual(expectedJson);

    const pathFileYaml1 = getFixturePath('file1.yaml');
    const pathFileYaml2 = getFixturePath('file2.yaml');
    expect(genDiff(pathFileYaml1, pathFileYaml2)).toEqual(expectedJson);
  });

  test('extname (json/yml)', () => {
    const pathFile1 = getFixturePath('file1.json');
    const pathFile2 = getFixturePath('file2.yml');
    expect(genDiff(pathFile1, pathFile2)).toEqual(expectedJson);
  });
});
