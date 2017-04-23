# Shopping List

Create a shopping list, automatically sorted by category in a printable format.

**[Use it here](http://eheikes.github.io/shopping-list/).**

![screenshot](https://github.com/eheikes/shopping-list/blob/docs/screenshot.png)

## Build

To build the project, you'll need [NodeJS/npm](https://nodejs.org/).

First, install the dependencies:

```shell
npm install
```

The following npm scripts are available:

```shell
npm run lint   # lint the files
npm run build  # compile the project into the "dist" folder
npm start      # run a local server for development
npm test       # run tests
```

To build and publish the project to the `gh-pages` branch:

```shell
GH_TOKEN=put_your_token_here # see https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
npm run build && npm run publish
```

## Contributing

Bug reports and contributions are welcome. [Create an issue or feature request](https://github.com/eheikes/shopping-list/issues), or [submit a pull request](https://help.github.com/articles/creating-a-pull-request/) with your proposed changes.

## License

Copyright 2015-2017 Eric Heikes. Licensed under the [Apache License, Version 2.0](LICENSE.txt) (the "License"); you may not use this file except in compliance with the License.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
