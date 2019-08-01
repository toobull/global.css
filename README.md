## global.css

[global.css](https://global.css.jser.org/) based on **sass**, includes **`normalize`**, **`reset`**, **`grid`**, **`1px border`**, **`ellipsis`**, **`ripple`**, **`elevation(box-shadow)`**.

### 0.TODO List
* support **`stylus`**

## Quick Start

### 1.Installation

```bash
$ npm install --save global.css
```

### 2.Intro

mainly includes:

```css
    normalize.scss
    
    reset.scss
    
    /* flex grid */
    mixins/_grid.scss
    
    /* support change $pseudo on params */
    mixins/_border.scss (1px hack)
    
    /* NOTE: if you use "autoprefixer", 
       you should set remove: false option, or set Safari 6 on .browserslistrc, 
       for multi-line's ellipsis take effect */
    mixins/_ellipsis.scss
    
    /* support change $pseudo on params */
    mixins/_ripple.scss
    
    /* use box-shadow, raise elements elevation in vision. (not z-index) */
    mixins/_elevation.scss
```

### 3.Usage

After installed in node_modules, you can use it free.eg.
(-> [Detail Document](https://global.css.jser.org/)[[Document Store](https://github.com/toobull/global.css-docs)].)

#### 1. Import all

```css
    @import '~global.css/global';
```

#### 2. Import partials as you like:

```css
    /* just use normalize&reset */
    @import '~global.css/src/normalize';
    @import '~global.css/src/reset';
```

```css
    @import '~global.css/src/grid';
```

```css
    @import '~global.css/src/border';
```

```css
    @import '~global.css/src/ellipsis';
```

```css
    @import '~global.css/src/ripple';
```

#### 3. Import mixins as you like:

```css
    @import '~global.css/src/mixins/grid';
    @import '~global.css/src/mixins/border';
    @import '~global.css/src/mixins/ellipsis';
    @import '~global.css/src/mixins/ripple';
    @import '~global.css/src/mixins/elevation';
```

```css
    @import '~global.css/src/mixins/grid';
```

```css
    @import '~global.css/src/mixins/border';
```

```css
    @import '~global.css/src/mixins/ellipsis';
```

```css
    @import '~global.css/src/mixins/ripple';
```
#### 4. Import css files as you like:

```css
    @import '~global.css/dist/global.css';
    /* or min file */
    @import '~global.css/dist/global.min.css';
```
And others:

```css
    @import '~global.css/dist/grid.css';
    @import '~global.css/dist/border.css';
    @import '~global.css/dist/ellipsis.css';
    @import '~global.css/dist/ripple.css';
    @import '~global.css/dist/elevation.css';
    /* or min files */
    @import '~global.css/dist/grid.min.css';
    @import '~global.css/dist/border.min.css';
    @import '~global.css/dist/ellipsis.min.css';
    @import '~global.css/dist/ripple.min.css';
    @import '~global.css/dist/elevation.min.css';
```

#### 5. Add `app` directory, include four files `_var.scss` `_mixins.scss` `_functions.scss` `main.scss` as reflections for the application, which files in `src/assets/scss`. `src` directory on the same level with `node_modules`.

#### 6. Version

v1.1.0
* add **`elevation(box-shadow)`**

v1.0.x
* init project
* add **`normalize`** 
* add **`reset`** 
* add **`grid`** 
* add **`1px border`** 
* add **`ellipsis`** 
* add **`ripple`**
