const gulp = require("gulp");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

function defaultTask(cb) 
{
	console.log("hello");
	cb();
}

gulp.task("concat", async function() { 
	gulp.src("style1.css")
	.pipe(concat("style2.css"))
	.pipe(rename("combined.css"))
	.pipe(gulp.dest("dest"));
	console.log("done concating all css");
});

var ugly = gulp.task("uglify", async function() { 
	gulp.src("script.js")
	.pipe(uglify())
	.pipe(gulp.dest("dest"));
	console.log("done uglifying scripts");
});

module.exports.uglify = ugly
module.exports.default  = gulp.series("concat");
