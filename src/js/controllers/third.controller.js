function ThirdController (FirebaseService) {
  
  let vm = this;

  vm.delete3 = delete3;

  // Init Things2 Array
  vm.things3 = [];

  init();

  function init () {
    vm.things3 = FirebaseService.getAllThings();
  };

  function delete3 (thing) {
    FirebaseService.removeThing(vm.things3, thing);
  }
}

ThirdController.$inject = ['FirebaseService'];
export { ThirdController };
