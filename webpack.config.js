module.exports = {
 
    module: {
      rules: [{
        test: /\.scss$/,
        use: [{
          loader: "style-loader" 
        }, {
          loader: "css-loader" 
        }, {
          loader: "sass-loader" 
        }]
      }]
    }
  };

  //Seems useless at the moment
  //Todo: See more on styled-component for inline styling with sass variables