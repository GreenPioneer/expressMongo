'use strict';
var myApp = angular.module('myApp', ['ui.router', 'ngResource']);
        myApp.controller('blogCtrl', function($scope, $state, $stateParams, $location, Blog) {
            $scope.state = $state;
            $scope.blog = {};
            $scope.viewBlog = {};

            $scope.homeView = function(spot, value) {
                $scope.findShow = false;
                $scope.createShow = false;
                $scope.updateShow = false;
                $scope.viewShow = false;
                if (spot == '1') $scope.findShow = true;
                if (spot == '2') $scope.createShow = true;
                if (spot == '3') $scope.updateShow = true;
                if (spot == '4') $scope.viewShow = true;
                if (value) {
                    $scope.viewBlog = value;
                }
            };
            $scope.homeView('1');
            $scope.find = function() {
                Blog.query(function(blogs) {
                    $scope.blogs = blogs;
                });
            };
            $scope.create = function(valid) {
                if (valid) {
                    var blog = new Blog($scope.blog);
                    blog.$save(function(response) {
                        $scope.homeView('1');
                        $scope.find();
                    });
                    $scope.blog = {};

                } else {
                    $scope.submitted = true;
                }
            };

            $scope.remove = function(blog) {
                if (blog) {
                    blog.$remove(function(response) {
                        for (var i in $scope.blogs) {
                            if ($scope.blogs[i] === blog) {
                                $scope.blogs.splice(i, 1);
                            }
                        }
                        $scope.homeView('1');
                        $scope.find();
                    });
                } else {
                    $scope.blog.$remove(function(response) {
                        $scope.homeView('1');
                        $scope.find();
                    });
                }
            };

            $scope.update = function() {

                var blog = $scope.viewBlog;
                blog.$update(function() {
                    $scope.homeView('1');
                    $scope.find();
                });

            };

        });
        myApp.factory('Blog', ['$resource',
            function($resource) {
                return $resource('blogs/:blogId', {
                    blogId: '@_id'
                }, {
                    update: {
                        method: 'PUT'
                    }
                });
            }
        ]);