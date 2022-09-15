## Component Library for Sarman's Projects
## Stylized Material UI

# Add to an existing project

1. add .npmrc to root folder
2. copy npmrc contents in gcp secrets manager and paste into .npmrc
3. ```npm i sarman-ui```

# Publish new version
1. create a branch and make ur changes
2. increase the version in package.json (or u will get an error "Already Published")
3. create a MR, will publish on merge to main
4. update version in any project using the package