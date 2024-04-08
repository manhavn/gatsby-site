#!/usr/bin/env sh

chmod +x .husky/pre-commit
npm i -D lint-staged@latest husky@latest prettier@latest
npm i -f
npm run prepare
npm run prettier
