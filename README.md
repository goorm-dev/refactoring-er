# refactoring-er

## Features
- 폴더 경로가지고 react 컴포넌트 파일들(index.jsx, <폴더명>.jsx, <폴더명>.scss) 만들어주는 명령어. [데모](https://github.com/goorm-dev/refactoring-er/tree/develop/examples/makeComponent/Button)
- 컴포넌트폴더 Path를 가지고 story북의 story 만들어주는 명령어. [데모](https://github.com/goorm-dev/refactoring-er/tree/develop/examples/autoGenerateStory)


## Installation
```shell
npm i -g https://github.com/goorm-dev/refactoring-er.git
```

## Configure
`refactoring_er.config.js`
```js
module.exports = {
	scssExt: 'module.scss', // scss 확장자(접미어), 기본은 .scss 로 설정됨
	storiesPath: './src/stories' // stories 경로, 기본은 컴포넌트 폴더 안에 생성됨
}
```

## Commanders

### createComponent
```shell
$ refactoring-er createComponent --help
Usage: refactoring-er createComponent [options] <dirpath>

create a component

Options:
  -e, --scssExt <ext>  config scss extension
  -h, --help           display help for command
```

### createStory
```shell
$ refactoring-er createStory --help
Usage: refactoring-er createStory [options] <componentDirPath>

create a story using component path

Options:
  -p, --storiesPath <path>  config stories dir path
  -h, --help                display help for command
```
