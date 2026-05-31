list of commands run/packages installed in terminal:
    1 (created package.json file): npm init -y --init-type=module
    2 (installed webpack): npm install --save-dev webpack webpack-cli
    3 (installed HTML plugin): npm install --save-dev html-webpack-plugin
    4 (installed CSS loaders) npm install --save-dev style-loader css-loader
    *5 (install it if images are referenced directly in HTML file) npm install --save-dev html-loader*
    6 (installed webpack dev server): npm install --save-dev webpack-dev-server
    *7 run npm install to automatically install same dependencies as in template-repo*
    *8 (once git push origin main has been run once):
        git branch gh-pages
        --don't forget to switch source branch to this in github pages*
    9 (installed ESLint): npm init @eslint/config@latest
    *10 (to run ESLint on any file or directory): npx eslint yourfile.js*
    11 (installed Prettier): npm install --save-dev --save-exact prettier
    12 (created empty config file to let editors and other tools know of Prettier usage): 
        node --eval "fs.writeFileSync('.prettierrc','{}\n')"
    13 (created .prettierignore file): 
        node --eval "fs.writeFileSync('.prettierignore','# Ignore artifacts:\nbuild\ncoverage\n')"
    *14 (to run Prettier on everything): npx prettier . --write
        (to run it on a certain directory): prettier --write app/
        (to run it on a certain file): prettier --write app/components/Button.js
        (to run it on tests): prettier --write "app/**/*.test.js"
    *15 (ensure everyone is using Pretter; if setup is CI; avoids merge conflicts/other collab issues):
        npx prettier . --check*