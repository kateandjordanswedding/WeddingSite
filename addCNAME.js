var fs = require('fs-extra');
var path = require('path');

fs.copySync(path.resolve(__dirname,'./src/CNAME'), './docs/CNAME');