# gulp-slash

> Apply [slash](https://www.npmjs.org/package/slash) to gulp file paths.

## Install

Install with [npm](https://npmjs.org/package/gulp-slash).

```
npm install --save-dev gulp-slash
```

## Examples

```js
var gulp = require('gulp');
var gulpSlash = require('gulp-slash');

gulp.task('default', function () {
	return gulp.src('js/**/*.js')
		.pipe(gulpSlash())
		/* ... do work here ... */
});
```

When used without arguments it returns an object stream for use with Gulp. The stream converts (in-place) the path,
base, cwd properties in each vinyl file.

```js
var gulpSlash = require('gulp-slash');
gulpSlash('c:\windows\file\path');  // c:/windows/file/path
```

With used with arguments, it acts per [slash](https://www.npmjs.org/package/slash).