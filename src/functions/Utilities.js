export default class Utilities {
  static compare(a,b) {

    var colA = a.title;
    var colB = b.title;

    if (colA > colB) {
      return 1;
    }

    if (colA < colB) {
      return -1;
    }

    return 0;
  }
}
