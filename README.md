## global.css

[global.css](https://global.css.jser.org/) based on sass, includes normalize, reset, grid, 1px border, ellipsis, ripple.

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
```

### 3.Usage

After installed in node_modules, you can use it free.eg.
(-> [Detail Document](https://global.css.jser.org/).)

#### 1. Import all

```css
    @import '~global.css/global';
```

#### 2. Import partials as you like:

```css
    @import '~global.css/src/normalize';
```

```css
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
    /* or min files */
    @import '~global.css/dist/grid.min.css';
    @import '~global.css/dist/border.min.css';
    @import '~global.css/dist/ellipsis.min.css';
    @import '~global.css/dist/ripple.min.css';
```
