# Вычислитель отличий (Проект модуля #3)

[![Actions Status](https://github.com/ilrosch/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/ilrosch/frontend-project-46/actions)
[![gendiff](https://github.com/ilrosch/frontend-project-46/actions/workflows/gendiff.yml/badge.svg)](https://github.com/ilrosch/frontend-project-46/actions/workflows/gendiff.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/279316b8b384530838c1/maintainability)](https://codeclimate.com/github/ilrosch/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/279316b8b384530838c1/test_coverage)](https://codeclimate.com/github/ilrosch/frontend-project-46/test_coverage)

Узнаете, как создавать cli приложения, парсить и форматировать данные в json, yaml. Научитесь проектировать архитектуру приложений. А также писать unit-тесты.

## Описание

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменений в конфигурационных файлах.

Возможности утилиты:

- Поддержка разных входных форматов: yaml, json
- Генерация отчета в виде plain text, stylish и json

## Примеры использования

- Вывод справочной информации по утилите выполняется следующей командой:

```console
  gendiff -h
```

[![asciicast](https://asciinema.org/a/YqfBDZQm9m5oml8lvPe8lq0dL.svg)](https://asciinema.org/a/YqfBDZQm9m5oml8lvPe8lq0dL)

- Сравнение двух файлов и вывод с использование форматера **stylish**:

```console
  gendiff __fixtures__/file1.json __fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/0u7HEofrCXzYlVHoZkk4OkMII.svg)](https://asciinema.org/a/0u7HEofrCXzYlVHoZkk4OkMII)

- Сравнение двух файлов и вывод с использование форматера **plain text**:

```console
  gendiff --format plain __fixtures__/file1.json __fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/hG1KAYoWdKNUyY0rp5uAKO6s8.svg)](https://asciinema.org/a/hG1KAYoWdKNUyY0rp5uAKO6s8)

- Сравнение двух файлов и вывод с использование форматера **json**:

```console
  gendiff --format json __fixtures__/file1.yml __fixtures__/file2.yaml
```

[![asciicast](https://asciinema.org/a/0qtwp23FLj5HMvd8c4arK0Ns2.svg)](https://asciinema.org/a/0qtwp23FLj5HMvd8c4arK0Ns2)
