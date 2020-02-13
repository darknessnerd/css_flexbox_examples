# Webpack Frontend Starterkit [Flexbox layout]

[![Build Status](https://travis-ci.org/darknessnerd/css_flexbox_examples.svg?branch=feature/draganddrop)](https://travis-ci.org/darknessnerd/css_flexbox_examples)

An html5 draganddrop flexbox grid example 


### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.


#Template 

                                                                                     
        Index.html                                                         
       |---------------------------------------------|                                      
       |                 header     (sticky)         |                                      
       |---------------------------------------------|                                      
       |content                                    | |                                      
       |         ( ITEMS DRAG AND DROP GRID        | |                                      
       |                                           | |                                      
       |                                           | |                                      
       |                                           | |                                      
       |                                           | |                                      
       |                                           | |                                      
       |                                           | |                                     
       |                                             |                                      
       |---------------------------------------------|                                      
                                                       
