## Introduction to Bootstrap Demo

This demo is like a slide deck for developers.  Each commit represents a set of changes toward creating a starter page with Bootstrap.  You can fork this entire repository and walkthrough each of the code changes by jumping around to each commit, using <code>git checkout <a href='http://git-scm.com/docs/gitrevisions'><i>&lt;revision&gt;</i></a></code>

![screenshot](http://i.imgur.com/D3EC0ca.png)



## Stepping Through Commits

I wrote an article about [using using revision control to demo live coding changes](http://www.codingeverything.com/2014/06/StepThroughCodeDemo.html)

Here's the short version:

```
git config --local alias.child-sha "!git rev-list HEAD..master | tail -n 1"
git config --local alias.initial-commit "!git rev-list --all | tail -n 1"

git checkout master
git checkout $(git initial-commit)
git checkout $(git child-sha)
```



## Some Links

[★ You are here](https://github.com/KyleMit/BootstrapPresentation)  
[Here's an blog post about my presentation](http://www.codingeverything.com/2014/06/BootstrapPresentation.html)  
[Here is a link to my talk for the 21st Boston Code Camp](https://www.bostoncodecamp.com/CC21/Sessions/Details/7177)  
[Here are the powerpoint slides from the talk](https://speakerdeck.com/kylemit/pulling-your-website-up-by-your-twitter-bootstraps)  
[Here is the latest version of the demo (hosted on the `gh-pages` branch)](http://kylemitofsky.com/BootstrapPresentation/)  
[You can get Bootstrap here (and also read their *great* documentation)](http://getbootstrap.com/)  
[You can style Bootstrap here](http://bootswatch.com/)
