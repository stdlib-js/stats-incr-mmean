<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# incrmmean

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a moving [arithmetic mean][arithmetic-mean] incrementally.

<section class="intro">

For a window of size `W`, the [arithmetic mean][arithmetic-mean] is defined as

<!-- <equation class="equation" label="eq:arithmetic_mean" align="center" raw="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} x_i" alt="Equation for the arithmetic mean."> -->

```math
\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} x_i
```

<!-- <div class="equation" align="center" data-raw-text="\bar{x} = \frac{1}{W} \sum_{i=0}^{W-1} x_i" data-equation="eq:arithmetic_mean">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@320a89534d4f59b82d162f31e968222555dae2f7/lib/node_modules/@stdlib/stats/incr/mmean/docs/img/equation_arithmetic_mean.svg" alt="Equation for the arithmetic mean.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import incrmmean from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmean@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-incr-mmean/tags). For example,

```javascript
import incrmmean from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmean@v0.2.1-deno/mod.js';
```

#### incrmmean( window )

Returns an accumulator `function` which incrementally computes a moving [arithmetic mean][arithmetic-mean]. The `window` parameter defines the number of values over which to compute the moving mean.

```javascript
var accumulator = incrmmean( 3 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated mean. If not provided an input value `x`, the accumulator function returns the current mean.

```javascript
var accumulator = incrmmean( 3 );

var mu = accumulator();
// returns null

// Fill the window...
mu = accumulator( 2.0 ); // [2.0]
// returns 2.0

mu = accumulator( 1.0 ); // [2.0, 1.0]
// returns 1.5

mu = accumulator( 3.0 ); // [2.0, 1.0, 3.0]
// returns 2.0

// Window begins sliding...
mu = accumulator( -7.0 ); // [1.0, 3.0, -7.0]
// returns -1.0

mu = accumulator( -5.0 ); // [3.0, -7.0, -5.0]
// returns -3.0

mu = accumulator();
// returns -3.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **at least** `W-1` future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   As `W` values are needed to fill the window buffer, the first `W-1` returned values are calculated from smaller sample sizes. Until the window is full, each returned value is calculated from all provided values.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import incrmmean from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mmean@deno/mod.js';

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrmmean( 5 );

// For each simulated datum, update the moving mean...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/mean`][@stdlib/stats/incr/mean]</span><span class="delimiter">: </span><span class="description">compute an arithmetic mean incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/msum`][@stdlib/stats/incr/msum]</span><span class="delimiter">: </span><span class="description">compute a moving sum incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mstdev`][@stdlib/stats/incr/mstdev]</span><span class="delimiter">: </span><span class="description">compute a moving corrected sample standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/msummary`][@stdlib/stats/incr/msummary]</span><span class="delimiter">: </span><span class="description">compute a moving statistical summary incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mvariance`][@stdlib/stats/incr/mvariance]</span><span class="delimiter">: </span><span class="description">compute a moving unbiased sample variance incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-mmean.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-mmean

[test-image]: https://github.com/stdlib-js/stats-incr-mmean/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/stats-incr-mmean/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-mmean/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-mmean?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-mmean.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-mmean/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-mmean/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-incr-mmean/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-incr-mmean/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-incr-mmean/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-incr-mmean/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-incr-mmean/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-incr-mmean/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-mmean/main/LICENSE

[arithmetic-mean]: https://en.wikipedia.org/wiki/Arithmetic_mean

<!-- <related-links> -->

[@stdlib/stats/incr/mean]: https://github.com/stdlib-js/stats-incr-mean/tree/deno

[@stdlib/stats/incr/msum]: https://github.com/stdlib-js/stats-incr-msum/tree/deno

[@stdlib/stats/incr/mstdev]: https://github.com/stdlib-js/stats-incr-mstdev/tree/deno

[@stdlib/stats/incr/msummary]: https://github.com/stdlib-js/stats-incr-msummary/tree/deno

[@stdlib/stats/incr/mvariance]: https://github.com/stdlib-js/stats-incr-mvariance/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
