// NESTED ASYNC CALLS

// <<A>> the 'callback' argument is a callback function
// the inner callback function executes when timer is done
// the callback argument allows us to define a function
// const fetchData = callback => {
//   setTimeout(() => {
//     callback('Done!');
//   }, 1500);
// };

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!!!');
    }, 1500);
  });
  return promise;
};

// setTimeout(() => {
//   console.log('Timer is done!');
//   fetchData(text => {console.log(text)});    // <<A>> fetchData requires a callback as an argument
// }, 2000);

setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
    .then(text => {           // then is callable on a promise and allows us to define a callback function that executes once promise is resolved
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    })
}, 2000);

console.log('Hellooo')
console.log('Wooah')