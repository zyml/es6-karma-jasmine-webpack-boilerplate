var testsContext = require.context('./tests', true, /.spec\.js$/);
testsContext.keys().forEach(testsContext);

var srcContext = require.context('./src', true, /\.js$/);
srcContext.keys().forEach(srcContext);
