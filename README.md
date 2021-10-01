# todo-app

## About

This is a fully front end To Do list. Add items and watch your list grow! Deployed persion in on [GitHub Pages](https://twin-2.github.io/todo-app/)

## Version 1.0.2

### 1.0.0 - 9/27/2021 - Basic functioning of adding and deleting items with 3 items per page

### 1.0.1 - 9/29/2021 - Added a login form and a log out button. Login works with a seperate API to handle bearer and basic auth. Sign up is currently not supported so you must use a pre defined account (username: test, password:test) can be used for testing purposes. There is no ACL for being signed in either

- Also added a styles page for the user to set specific preferences for items per page, whether or not to display completed items, and a sorting standard.

- Added link to GitHub repo in the footer.

### 1.0.2 - 9/30/2021 - Added client side ACL based on role. Protected items include the following

- Must be logged in to see any content.
- Must have 'writer' permission to add new items to the Todo List.
- Must have 'editor' permission to change items from In Progress to Complete.
- Must have 'admin' permission to remove items from the list.

For testing purposes there are 4 users in the DB: admin, editor, writer, user. Each has a password of test.

## Development Roadmap

- clean up and componetize css files
