// 新建一个控制器
angular.module("self",[])
.controller("contro",["$scope",function($scope){
	// 在模型层模拟数据
	$scope.navs = [
		{"link":"#/today","icon":"icon-home","text":"今日一刻"},
		{"link":"#/older","icon":"icon-file-empty","text":"往期内容"},
		{"link":"#/writer","icon":"icon-pencil","text":"热门作者"},
		{"link":"#/look","icon":"icon-menu","text":"栏目浏览"},
		{"link":"#/like","icon":"icon-heart","text":"我的喜欢"},
		// {"link":"#/setting","icon":"icon-cog","text":"设置"}
	];
}])
.controller("todayContro",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope){
	$rootScope.title = "今日一刻";
	$rootScope.index=0;
	$rootScope.loaded = false;
	var now = $filter("date")(new Date(),"yyyy-MM-dd");
	$http({
		url:"./api/today.php",
		params:{"now":now}
	}).then(function(data){
		
		$rootScope.loaded=true;
		$scope.datas = data.data;
	});
}])
.controller("olderContro",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope){
	$rootScope.title="往期内容";
	$rootScope.index=1;
	$rootScope.loaded=false;
	
	var now = $filter("date")(new Date()- ( 1000 *  24  *  60  *  60 ),"yyyy-MM-dd");//2017-6-9
	$http({
		url:"./api/older.php",
	}).then(function(data){
	$rootScope.loaded=true;
		// console.log(data.data);
		$scope.datas=data.data;
	});
}])
.controller("writerContro",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope){
	$rootScope.title="热门作者";
	$rootScope.index=2;
	$rootScope.loaded=false;
	$http({
		url:"./api/writer.php",
	}).then(function(data){
	$rootScope.loaded=true;
		// console.log(data.data);
		$scope.datas=data.data;
	});
}])
.controller("ctyContro",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope){
	$rootScope.title="栏目浏览";
	$rootScope.index=3;
	$rootScope.loaded=false;
	$http({
		url:"./api/cty.php",
	}).then(function(data){
	$rootScope.loaded=true;
		// console.log(data.data);
		$scope.datas=data.data;
	});
}])
.controller("likeContro",["$scope","$http","$filter","$rootScope",function($scope,$http,$filter,$rootScope){
	$rootScope.title="我的喜欢";
	$rootScope.index=4;
	$rootScope.loaded=false;
	$http({
		url:"./api/like.php",
	}).then(function(data){
	$rootScope.loaded=true;
		// console.log(data.data);
		$scope.datas=data.data;
	});
}])