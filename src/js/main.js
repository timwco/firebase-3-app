import angular from 'angular';
import 'angularfire';


import { FirstController } from './controllers/first.controller';
import { SecondController } from './controllers/second.controller';
import { ThirdController } from './controllers/third.controller';

import { FirebaseService } from './services/firebase.service';


angular
  .module('app', ['firebase'])
  .controller('FirstController', FirstController)
  .controller('SecondController', SecondController)
  .controller('ThirdController', ThirdController)
  .service('FirebaseService', FirebaseService)
;
