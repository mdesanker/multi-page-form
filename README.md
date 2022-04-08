# Multi-Page Form

A multi-page form for submitting new bounties to Talentdrop.

[Live demo](https://mdesanker.github.io/multi-page-form/)

## Table of Contents

- [How to run locally in dev mode](#How-to-run-locally-in-dev-mode)
- [Description](#Description)
- [Built with](#Built-with)
- [Next steps](#Next-steps)

## How to run locally in dev mode

To get started, clone repository, navigate into directory, and run `npm install && npm run dev`:

```bash
git clone git@github.com:mdesanker/multi-page-form.git
cd multi-page-form
npm install
npm run dev
```

Then navigate to [http://localhost:3000](http://localhost:3000) in a browser

## Description

This is a multi-page form that companies can use to submit new bounties to Talentdrop.

The first form page collects company details. It shows different fields depending on whether the company is new or returning. Company was arbitrarily selected to be a string of at least six alphanumeric characters starting with at least two letters so that the user can't enter only numbers. Company ID would be validated with Yup to check whether it exists in the database. If the company is new, it will prevent the user from using an existing ID, but if the company is returning it will ensure the ID exists and the admin email is associated with it.

The second form page collects details on the roles the company wants to create bounties for. Fields for this form are dynamically generated, so multiple roles can be submitted simultaneously. User cannot proceed to the next page without filling out each field for each role created.

The third form page shows a summary of all the information that has been entered. Buttons allow user to navigate directly to page 1 or page 2 to edit inputs, or the previous button can be used to move backwards.

The fourth form page tells the user that their form was submitted successfully and provides a button to navigate back to the home page if desired.

## Built with

- Next.js
- Chakra UI
- Formik
- Yup
- Redux

### Next Steps

- Allow user to upload a file for each job description being submitted for a bounty

Dynamic form with Formik

Whether to have 1 large form or two separate forms

### TODO

- \*Change label color on focus (\_groupFocusWithin)

- \*All label colors gray.600

- \*Reset form counter if company state === null

- \*Name input validation

- \*Async validation to check if name unique

- \*Readme

- Testing

- Handle file upload

- \*Scroll to top of page on navigation

- Only allow role delete when >1 role

- Fix keys in form page
