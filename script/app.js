// 创建模块
var yike = angular.module("yike",["self","ngRoute"]);
	// 用一个run方法
yike.run(["$rootScope",function($rootScope){
	// 将collapse值取反
	$rootScope.coll = false;
	$rootScope.go = function(){
	// console.log("lalala");
	// 将导航栏进行移动
	$rootScope.coll = !$rootScope.coll;
	var sb = document.querySelectorAll(".navs dd");
	// console.log(sb);
		if($rootScope.coll){
			for(var i=0;i<sb.length;i++){
				sb[i].style.transform="translate(0)";
				// 动画效果
				sb[i].style.transitionDuration = (i+1)*0.5+"s";
			}
		}else{
			for(var i=sb.length-1;i>=0;i--){
				sb[i].style.transform="translate(-100%)";
				// 动画效果
				sb[i].style.transitionDuration = (sb.length-i)*0.5+"s";
				// 收缩停顿
				sb[i].style.transitionDelay=" ";
			}
		}
	}
}]);
// 解决angularjs自动升级的版本不一致问题 导致路由点击的时候内容经过转换了
yike.config(function($locationProvider){
	$locationProvider.hashPrefix("");
});
// 配置路由
yike.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/today",{
		templateUrl:"./views/today.html",
		controller:"todayContro"
	})
	.when("/older",{
		templateUrl:"./views/oldday.html",
		controller:"olderContro"
	})
	.when("/writer",{
		templateUrl:"./views/writer.html",
		controller:"writerContro"
	})
	.when("/look",{
		templateUrl:"./views/cty.html",
		controller:"ctyContro"
	})
	.otherwise({
		redirectTo:"/today"
	})
	.when("/like",{
	templateUrl:"./views/like.html",
	controller:"likeContro"
	})

}])
