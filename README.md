# Angular Reactions

---

## About

**Angular Reactions** is a directive for the [AngularJS](http://angularjs.org/) framework. Provide smiley reactions for increase your community interaction.



## Package managers
### Bower
```
bower install angular-reactions
```
You could find this module in bower like [_angular reactions_](http://bower.io/search/?q=angular%20reactions).

### NPM
```
npm install angular-reactions
```
You could find this module in npm like [_angular reactions_](https://www.npmjs.com/search?q=angular%20file%20upload).


###Getting Started

You can easily integrate this feature to your app with 3 steps.

####Step 0

Install Package

Download package from package provider services or github repository.

####Step 1

Inject Module as Dependency

```
angular.module('app', ['ngReactions'])
```

####Step 2

Define options object in current scope.

```
$scope.config = [
			{"src":"https://srv-cdn.onedio.com/store/61333d24ca3819629e766cd21fa68c38d73deff54d0003e1107b46884d431b44.gif","count":0},
			{"src":"https://srv-cdn.onedio.com/store/d4cadedb61a2db8bc8c5c369028cc4ffa4966c51d2d2c75f8e6167c07e1ba3e1.gif","count":0},
			{"src":"https://srv-cdn.onedio.com/store/7a7b3371221253caf28fd06ea6c6a3a49fee9af11e206feaad66d7e9d72fd73e.gif","count":0},
			{"src":"https://srv-cdn.onedio.com/store/9c889ddd1664e0e9e8fc1c93e8316503acd7c5c94cd4cdab3d3161f4e3a227f1.gif","count":0},
			{"src":"https://srv-cdn.onedio.com/store/7213a0b115f88320a222b14c5daa3596729b9ec93f710da3d2f8b5a6004e9aba.gif","count":0},
			{"src":"https://srv-cdn.onedio.com/store/8fd2ed53959eb901230be656a889da9518a36cd2a78ab38888963c79e26415c5.gif","count":0},
			{"src":"https://srv-cdn.onedio.com/store/1ab646d43efac881b74c9a41fa443ad7d97cdf5ad591a5f14b4178702464eeaa.gif","count":0}
		]
```

####Step 3

Call directive from your template.

```
<reactions options="config"></reactions>
```

That's all.





