
// Copyright (c) Microsoft Open Technologies, Inc.  All rights reserved.  Licensed under the Apache License, Version 2.0.  See License.txt in the project root for license information.

(function () {
    'use strict';

    var elemsClickCount = {};    

    angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngMessages'])
      .run(function ($ionicPlatform) {
          $ionicPlatform.ready(function () {
              // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
              // for form inputs)
              if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                  cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
              }

              if (window.StatusBar) {
                  // org.apache.cordova.statusbar required
                  StatusBar.styleDefault();
              }

              if (window.cordova && window.cordova.platformId === 'windows') {
                  // This prevents event click to be called twice on Windows 8.1
                  window.addEventListener('click', function (event) {
                      if (typeof event.target !== 'undefined' && typeof event.target.attributes !== 'undefined') {
                          if (elemsClickCount[event.target.className] === 0
                              || typeof elemsClickCount[event.target.className] === 'undefined') {
                              elemsClickCount[event.target.className] = 1;
                              return;
                          } else {
                              elemsClickCount[event.target.className] = 0;
                              event.stopPropagation();
                              elemsClickCount = {};
                              return;
                          }
                      }
                  }
                , true);
              }
          });
      })

    .value('tenantName', 'testlaboratory.onmicrosoft.com')
    .value('authority', 'https://login.microsoftonline.com/testlaboratory.onmicrosoft.com/')
    .value('resourceUrl', 'https://graph.windows.net/')
    .value('appId', '3cfa20df-bca4-4131-ab92-626fb800ebb5')
    .value('redirectUrl', 'http://test.com');

})();
