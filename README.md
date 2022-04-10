# Multi-Page Form

A multi-page form to submit bounties for jobs.

[Live demo](https://multi-page-form-tan.vercel.app/)

## Table of Contents

- [How to run locally in dev mode](#How-to-run-locally-in-dev-mode)
- [How to run tests](#How-to-run-tests)
- [Description](#Description)
- [Built with](#Built-with)
- [Next steps](#Next-steps)
- [Credits](#Credits)

## How to run locally in dev mode

To get started, clone repository, navigate into directory, and run `npm install && npm run dev`:

```bash
git clone git@github.com:mdesanker/multi-page-form.git
cd multi-page-form
npm install
npm run dev
```

Then navigate to [http://localhost:3000](http://localhost:3000) in a browser

## How to run tests

- To run the entire test suite:

```
npm run test
```

- To run tests for a specific file:

```
npm run test -- file_name.test.js
```

## Description

This is a multi-page form that companies can use to submit new bounties.

The first form page collects company details. Different forms are rendered for new and returning customers.

The second form page collects details on the roles the company wants to create bounties for. Fields for this form are dynamically generated, so multiple roles can be submitted simultaneously. User cannot proceed to the next page without filling out each field for each role created.

The third form page shows a summary of all the information that has been entered. Edit buttons allow user to navigate directly to company detail page or role detail page to edit inputs, in addition to using the previous button.

The fourth form page tells the user that their form was submitted successfully and provides a button to navigate back to the home page.

## Built with

- Next.js
- Chakra UI
- Formik
- Yup
- Redux Toolkit
- React Testing Library

## Next Steps

- Implement file upload for role descriptions

- Implement testing for all form steps working together

## Credits

- Favicon from [Flaticon](https://www.flaticon.com/premium-icon/online_2129117?term=form&page=1&position=48&page=1&position=48&related_id=2129117&origin=search)
