var FormulaParser = require('hot-formula-parser').Parser;
var parser = new FormulaParser();
 

const express = require('express'); 
const app = express(); 

// //var parser = new formulaParser.Parser();

// app.get('/', (req,res)=> {
//     res.send('Hello world!!!!'); 
// }); 


//app.listen(3000, () => console.log('listening on port 3000...')); 


var hotFormulaParser = require("@buildout/hot-formula-parser")


//var parser = new FormulaParser();

parser.setVariable('MY_VARIABLE', 5);
parser.setVariable('fooBar', 10);

parser.parse('(1 + MY_VARIABLE + (5 * fooBar)) / fooBar');


