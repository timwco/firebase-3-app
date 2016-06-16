function SecondController (FirebaseService) {
  
  let vm = this;

  vm.delete2 = delete2;

  // Init Things2 Array
  vm.things2 = [];

  init();

  function init () {
    vm.things2 = FirebaseService.getAllThings();
  };

  function delete2 (thing) {
    FirebaseService.removeThing(vm.things2, thing);
  }
}

SecondController.$inject = ['FirebaseService'];
export { SecondController };
