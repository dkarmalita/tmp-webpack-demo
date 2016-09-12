var ghpages = require('gh-pages');
var path = require('path');

function callback(err) { 
    console.log('ERR:',err)
}

ghpages.publish(
    path.join(__dirname, 'build'), 
    {
        repo: 'https://github.com/dkarmalita/tmp-webpack-demo.git'
    },
    callback
);

