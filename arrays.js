const myarr =['xy',736547,true,undefined];
console.log(myarr);
console.log(typeof myarr);
console.log(Array.isArray(myarr));
const movies =[ 'Godzilla','DEadpool','Dark knight','Spiderman','animal'];
 console.log(movies.length);
//indexing
 console.log(movies[3]);
 console.log(movies.indexOf('DEadpool'));
 console.log(movies[10]);
 //movies[50]='flash'
 console.log(movies[50]);
 console.log(movies.at(-2));
 // slicing

 console.log(movies.slice(1,4));
 console.log(movies.slice(1));
 console.log(movies.slice(3,50));
 console.log(movies.slice(-4,-2));
 // adding and removing elements
 movies.push('jaani Dushman'); // adds elements at the end of array
 movies.unshift('Echo'); // adds elements at the start of array
 console.log(movies);

 movies.pop(''); //remove element form the end of array
 
 movies.shift(''); //remove element form the start of array
 console.log(movies);
 movies.splice(1,2);// remove 2 elements starting from index 3
 //movies.splice(3,2);// remove all elements starting from index 2
 movies.splice(2,2,'batman','superman');// replaces elements on index 2 and 3
 console.log(movies);

 for (let i= 0; i< movies.length; i++) {
    console.log( movies[i]);
    
 }
 for (let mov of movies) {
    console.log( mov);
    
 }
