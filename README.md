# refactoring-er

## Installation
```shell
npm i -g https://github.com/goorm-dev/refactoring-er.git
```

## Configuare
`refactoring_er.config.js`
```js
module.exports = {
	scssExt: 'module.scss',
	storiesPath: './src/stories'
}
```

## commanders

### createComponent
```shell
$ refactoring_er createComponent --help
Usage: refactoring_er createComponent [options] <dirpath>

create a component

Options:
  -e, --scssExt <ext>  config scss extension
  -h, --help           display help for command
```

### createStory
```shell
$ refactoring_er createStory --help
Usage: refactoring_er createStory [options] <componentDirPath>

create a story using component path

Options:
  -p, --storiesPath <path>  config stories dir path
  -h, --help                display help for command
```