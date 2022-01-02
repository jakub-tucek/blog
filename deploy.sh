set -e
npm run build
git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'
git fetch --all
git checkout gh-pages
mv public/* .
git commit -m "Deploy"
git push
git checkout master
