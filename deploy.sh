set -e
npm run build
git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'
git fetch --all
git checkout gh-pages
cat "node_modules" > .gitignore
git commit -m "Deploy"
git push
git checkout master
