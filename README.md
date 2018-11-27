# Clark Schedule

[![NPM](https://img.shields.io/npm/v/clark-schedule.svg)](https://www.npmjs.com/package/clark-schedule)

### Getting Started

- You will need to install [Yarn](https://yarnpkg.com/en/docs/install) for dependency management, if you do not have it already installed.

- Run the `yarn` command to install `node_modules`

### Testing library integration locally

To test clark-styles locally, run `yarn build`. **Make sure `build/` directory exists** and then follow the instructions [here](https://yarnpkg.com/lang/en/docs/cli/link/).

### Testing

We use [jest](https://facebook.github.io/jest/) for running our test suite. All new utility functions should be pure and thoroughly unit-tested. Run `yarn test` to start the test runner

### Flow

This project uses `flow` to do static typechecking. We're using the [flowtype](https://github.com/gajus/eslint-plugin-flowtype) eslint plugin to enforce adding flow annotations to all files and stylistic consistency.

Run `yarn flow` to start the flow server. If you run into unexpected failures, as a first troubleshooting step, run `yarn flow stop` and then start the server again to bust the cache.

### Updating

For convience sake, we use the [cut-release](https://github.com/bjoerge/cut-release) project to easily publish to npm and follow SEMVER. **Don't forget to update the changelog!**

**Once you have cut a release remember to bump the version in your project.**

### Usage

To use the library run `yarn add clark-styles`.

```jsx
import React from 'react'
import Schedule from 'clark-schedule';

const App = () => (
  <Schedule
    onSelectEvent={event => dispatchPush(`sessions/${event.id}`)}
    onSelectSlot={({ start, end }) =>
      dispatchPush({
        pathname: `tutors/${tutor.id}/sessions/new`,
        state: { start, end },
      })
    }
    events={transformTutorSessionsToCalendarEvents(tutorSessions, clients)}
  />
);
```

### License

MIT © [hiclark](https://github.com/hiclark)
