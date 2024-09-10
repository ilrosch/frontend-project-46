import path from 'node:path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { test, expect, describe } from '@jest/globals';

import utility from '../src/index.js';

import expectedStylish from '../__fixtures__/expectedStylish.js';
import expectedPlain from '../__fixtures__/expectedPlain.js';
import expectedJSON from '../__fixtures__/expectedJSON.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const genDiff = utility;

describe('test the gendiff utility', () => {
  test('extname (json) stylish defualt', () => {
    const pathFile1 = getFixturePath('file1.json');
    const pathFile2 = getFixturePath('file2.json');
    expect(genDiff(pathFile1, pathFile2)).toEqual(expectedStylish);
  });

  test('extname (json/yml) stylish', () => {
    const pathFile1 = getFixturePath('file1.yml');
    const pathFile2 = getFixturePath('file2.json');
    expect(genDiff(pathFile1, pathFile2, 'stylish')).toEqual(expectedStylish);
  });

  test('extname (json/yaml) stylish', () => {
    const pathFile1 = getFixturePath('file1.json');
    const pathFile2 = getFixturePath('file2.yaml');
    expect(genDiff(pathFile1, pathFile2, 'stylish')).toEqual(expectedStylish);
  });

  test('extname (json) plain', () => {
    const pathFile1 = getFixturePath('file1.json');
    const pathFile2 = getFixturePath('file2.json');
    expect(genDiff(pathFile1, pathFile2, 'plain')).toEqual(expectedPlain);
  });

  test('extname (json/yml) plain', () => {
    const pathFile1 = getFixturePath('file1.yml');
    const pathFile2 = getFixturePath('file2.json');
    expect(genDiff(pathFile1, pathFile2, 'plain')).toEqual(expectedPlain);
  });

  test('extname (json/yaml) plain', () => {
    const pathFile1 = getFixturePath('file1.json');
    const pathFile2 = getFixturePath('file2.yaml');
    expect(genDiff(pathFile1, pathFile2, 'plain')).toEqual(expectedPlain);
  });

  test('extname (json) json', () => {
    const pathFile1 = getFixturePath('file1.json');
    const pathFile2 = getFixturePath('file2.json');
    expect(genDiff(pathFile1, pathFile2, 'json')).toEqual(expectedJSON);
  });

  test('extname (json/yml) json', () => {
    const pathFile1 = getFixturePath('file1.yml');
    const pathFile2 = getFixturePath('file2.json');
    expect(genDiff(pathFile1, pathFile2, 'json')).toEqual(expectedJSON);
  });

  test('extname (json/yaml) json', () => {
    const pathFile1 = getFixturePath('file1.json');
    const pathFile2 = getFixturePath('file2.yaml');
    expect(genDiff(pathFile1, pathFile2, 'json')).toEqual(expectedJSON);
  });
});
