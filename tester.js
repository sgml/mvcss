/* 
How to Infer from source
modules <= grep angular.module; 
dependencies <= parse the arguments array; 
spies <= grep function calls; 
mocks <= JSON.stringify(arguments); 
fakes <= interfaces(foo:function(){}) + mock data; 
stubs <= grep truthyoperators (!!, &&, ||); 
expectations <= getters/setters
*/
