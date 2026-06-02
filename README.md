This project is a weather app that shows the current weather of a specified location. It's meant to help me use my new skills with promises and async/await, using APIs, linting (ESLint and Prettier), and JavaScript form validation.

Packages:
    *5 (install it if images are referenced directly in HTML file) npm install --save-dev html-loader*

    *10 (to run ESLint on any file or directory): npx eslint yourfile.js*

    *14 (to run Prettier on everything): npx prettier . --write
        (to run it on a certain directory): prettier --write app/
        (to run it on a certain file): prettier --write app/components/Button.js
        (to run it on tests): prettier --write "app/**/*.test.js"

    *15 (ensure everyone is using Prettier; if setup is CI; avoids merge conflicts/other collab issues):
        npx prettier . --check*