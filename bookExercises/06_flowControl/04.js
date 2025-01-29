function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

/*
Because there are no break statements to stop the fall through, the output
starts with the matching case of '113' and falls through to the end. JavaScipt
doesn't care that the remaining case statements match or not:

Product2
Product3
Product not found!
*/
