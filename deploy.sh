npm run build
git checkout gh-pages
mv public/* .
git commit -m "Deploy"
git push
git checkout master
