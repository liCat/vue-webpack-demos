var argv = require ("optimist").argv;
var Path = require ("path");
var webpack = require ("webpack");

eval ("var buildFor='" + argv.for+"'");

if(buildFor==undefined) buildFor=["stage","release"];
if(typeof buildFor =="boolean" && buildFor ==true) buildFor=["stage","release"]
else if (typeof buildFor == "string")buildFor = [buildFor]


function deleteFolderRecursive (path, cb) {
  var fs = require ("fs");
  var files = [];
  console.log(path);
  if (fs.existsSync (path)) {
    files = fs.readdirSync (path);

    files.forEach (function (file, index) {

      var curPath = path + "/" + file;

      if (fs.statSync (curPath).isDirectory ()) { // recurse

        deleteFolderRecursive (curPath);

      } else { // delete file

        fs.unlinkSync (curPath);

      }

    });

    if (!fs.rmdirSync (path)) {
      cb ();
    }
  }
  else {
    cb ();
  }
}

console.log(argv.pro);
/*to do deleting then to compile for every environment*/
for(var i = 0; i < buildFor.length; i++) {(function(i){

  var _for=buildFor[i];
  var _path = Path.resolve (__dirname, `../${_for}/${argv.pro}`),

    compile = function () {
      var config = require (`./webpack.${_for}.conf`)(argv.pro),
        compiler = webpack (config);

      compiler.run (function (err, stats) {
        if (err) return console.log (err);
        else console.log (`built ${ _for}  bundle successfully!`)
      })
    };
  deleteFolderRecursive (_path, compile)
})(i)
}