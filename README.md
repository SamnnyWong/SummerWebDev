# SummerWebDev
To install gatsby cli:
- npm install -g gatsby-cli

Run the project locally:
- npm install
- gatsby develop

Browser:
- http://localhost:8000/
- graphiql service: http://localhost:8000/___graphql

This project need gatsby-transformer-remark and gatsby-source-filesystem to work.
If you run into problem to get it running locally, run the following in Terminal:
- npm install --save gatsby-transformer-remark gatsby-source-filesystem

On MacOS, if you have this error: "npm ERR! mozjpeg@7.0.0 postinstall: `node lib/install.js`"
According to https://github.com/JeffreyWay/laravel-mix/issues/1271
Try the following:
- brew update
- brew install libtool
- brew install automake autoconf libtool dpkg pkgconfig nasm libpng

