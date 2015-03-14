# Shopping List

Create a shopping list, automatically sorted by category in a printable format.

## Build

To build the project, you'll need [NodeJS/npm](https://nodejs.org/), [Bower](http://bower.io/), and [gulp](http://gulpjs.com/) installed.

First, install the dependencies:

```shell
npm install
bower install
```

To build the project into the `dist` folder, run the default gulp task:

```shell
gulp
```

The default task will watch for changes to the files and rebuild as necessary.

To build and publish the project to the `gh-pages` branch:

```shell
gulp publish
```

## License

Copyright 2015 Eric Heikes. Licensed under the [Apache License, Version 2.0](LICENSE.txt) (the "License"); you may not use this file except in compliance with the License.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
