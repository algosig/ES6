var app = angular.module("myApp", []);
// var person={
//     firstName: "Sanjog",
//     lastName: "Sigdel",
//     imageSrc:  "https://avatars3.githubusercontent.com/u/6120118?v=3"
// }

// app.controller("mainController", function($scope) {
//     $scope.person = person;
// });

app.controller("serviceHandler",function($scope, $http){

var onUserComplete = function(response){
    $scope.user = response.data;
    $http.get($scope.user.repos_url)
    .then(onRepos, onError);
};
var onRepos = function(response){
    $scope.repos = response.data;
};
var onError = function(reason){
    $scope.error = "Couldn't Fetch the data";
};

$scope.search= function(username){
    $http.get("https://api.github.com/users/"+username)
        .then(onUserComplete, onError);
};
    


});
// app.controller("mainCtrl", function($scope){
//     $scope.message="Helo Angular";
    // $scope.firstName= firstName;
    // $scope.lastName= lastName;
    // $scope.imageSrc= imageSrc;
// });


