// BEGIN

export default function each(collection, callback) {
    collection.forEach(function(item) {
      callback.call(item);
    });
  }
  
// END
