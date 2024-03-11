install: 
	npm ci

run:
	bin/gendiff.js

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

test-1: 
	gendiff __fixtures__/file1.json __fixtures__/file2.json 

.PHONY: test
