function FirstController (FirebaseService) {

  let vm = this;

  vm.addThing = addThing;

  // Init Things Array
  vm.things = [];

  init();

  function init () {
    vm.things = FirebaseService.getAllThings();
  };

  function addThing (thing) {
    FirebaseService.addThing(vm.things, thing).then ( res => {
      // Clear Form
      document.querySelector('form').reset();
    });
  }

  
}

FirstController.$inject = ['FirebaseService'];
export { FirstController };
