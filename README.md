# cy-hands-on-find-cypress-specs

Sample project to demo the usage of the [**`find-cypress-specs`**](https://www.npmjs.com/package/find-cypress-specs) lib.

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v16.13.2` and `8.3.2` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

Run `npm test` (or `npm t` for the short version) to run the test in headless mode.

Or, run `npm run cy:open` to open Cypress in interactive mode.

## Using find-cypress-specs

Run `npx find-cypress-specs` to list all spec files, separeted by comma.

### Spec names

Run `npm run list:spec:names` to list the existing test suites with their respective contexts and test cases.

After running it, you should see something like this.

```sh
> cy-hands-on-find-cypress-specs@1.0.0 list:spec:names
> find-cypress-specs --names


cypress/integration/auth.spec.js (2 tests, 2 pending)
└─ Authentication [@auth, @happy-path]
  ├⊙ successfully signs up
  └⊙ successfully logs in and out

cypress/integration/ticketbox.spec.js (3 tests)
└─ Ticketbox
  ├─ successfully orders a ticket [@happy-path, @main]
  ├─ adds an "invalid" class in the email field when missing the "@" sign [@unhappy-path]
  └─ customizes the Purchase Agreement based on what's typed [@happy-path]

cypress/integration/transactions.spec.js (4 tests)
└─ Transactions
  ├─ Happy path [@happy-path]
  │ ├─ completes a transaction through flow A
  │ └─ completes a transaction through flow B
  └─ Unhappy paths [@unhappy-path]
    ├─ warns on missing mandatory fields
    └─ errors on invalid data

cypress/integration/Users/users.spec.js (4 tests)
└─ Users [@users, @CRUD, @happy-path]
  ├─ creates a user
  ├─ lists users
  ├─ updates user permissions
  └─ permanentently deletes a user

found 4 specs (13 tests, 2 pending)
```

### Tags

Run `npm run count:by:tags` to count the number of tests by tags.

After running it, you should see something like this.

```sh
> cy-hands-on-find-cypress-specs@1.0.0 count:by:tags
> find-cypress-specs --tags


Tag            Tests
-------------  -----
@auth          2
@CRUD          4
@happy-path    10
@main          1
@unhappy-path  3
@users         4
```

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev).
