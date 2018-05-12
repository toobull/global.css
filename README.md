## global.css

## Quick Start

### 1.Installation

```bash
$ npm install --save global.css
```

### 2.Intro

mainly includes:

```bash
    normalize.scss
    
    reset.scss
    
    // flex grid
    mixins/_grid.scss
    
    // support change $pseudo on params
    mixins/_border.scss (1px hack)
    
    // NOTE: if you use "autoprefixer", 
    // you should set remove: false option, or set Safari 6 on .browserslistrc, 
    // for multi-line's ellipsis take effect
    mixins/_ellipsis.scss
    
    // support change $pseudo on params
    mixins/_ripple.scss
```

### 3.Usage

After installed in node_modules, you can use it free.eg.
(Detail Document come soon.)

#### 1. Import all

```bash
    @import '~global.css/global';
```

#### 2. Import partials as you like:

```bash
    @import '~global.css/src/normalize';
```

```bash
    @import '~global.css/src/reset';
```

```bash
    @import '~global.css/src/grid';
```

```bash
    @import '~global.css/src/border';
```

```bash
    @import '~global.css/src/ellipsis';
```

```bash
    @import '~global.css/src/ripple';
```

#### 3. Import mixins as you like:

```bash
    @import '~global.css/src/mixins/grid';
    @import '~global.css/src/mixins/border';
    @import '~global.css/src/mixins/ellipsis';
    @import '~global.css/src/mixins/ripple';
```

```bash
    @import '~global.css/src/mixins/grid';
```

```bash
    @import '~global.css/src/mixins/border';
```

```bash
    @import '~global.css/src/mixins/ellipsis';
```

```bash
    @import '~global.css/src/mixins/ripple';
```
#### 4. Import css files as you like:

```bash
    @import '~global.css/dist/global.css';
    or min file
    @import '~global.css/dist/global.min.css';
```
And others:

```bash
    @import '~global.css/dist/grid.css';
    @import '~global.css/dist/border.css';
    @import '~global.css/dist/ellipsis.css';
    @import '~global.css/dist/ripple.css';
    or min files
    @import '~global.css/dist/grid.min.css';
    @import '~global.css/dist/border.min.css';
    @import '~global.css/dist/ellipsis.min.css';
    @import '~global.css/dist/ripple.min.css';
```
