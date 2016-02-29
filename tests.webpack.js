var testsContext = require.context('./src', true, /-test\.js$/);
testsContext.keys().forEach(testsContext);

var srcContext = require.context('./src', true, /^((?!__tests__).)*.js$/);
srcContext.keys().forEach(srcContext);
