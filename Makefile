install: 
	npm ci

run:
	bin/gendiff.js

test:
	npm test

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

test-data:
	gendiff src/data/file1.json src/data/file2.json

.PHONY: test
