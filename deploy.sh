set -e
npm run build
git config remote.origin.fetch '+refs/heads/*:refs/remotes/origin/*'
git fetch --all
git checkout gh-pages
rm -rf docs || true
mv public docs
git commit -m "Deploy"
git push
git checkout master
