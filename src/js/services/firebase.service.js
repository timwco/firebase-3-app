function FirebaseService ($firebaseArray) {
  
  this.getAllThings = getAllThings;
  this.addThing     = addThing;
  this.removeThing  = removeThing;

  function getAllThings (thingId) {
    let ref = fbApp.database().ref().child('things');
    return $firebaseArray(ref);
  }

  function addThing (ref, thing) {
    return ref.$add(thing);
  }

  function removeThing (ref, thing) {
    return ref.$remove(thing);
  }

}

FirebaseService.$inject = ['$firebaseArray'];
export { FirebaseService };
