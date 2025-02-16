# STRINGS
string are objects in js, it store and manipulate the text;
## Way to declare strings 
1. DoubleQuotation string - "";
2. SingleQuotation string = '';
3. Backticks string = ``;
4. const str = new String();

## MOST used Methods in string object
- str1.length = "Give length of that string"
- str.substring(startindex, endIndex) 
## .charCodeAt(0) 
- convert the char to ASCII value;
## .fromCharCode(ASCII value)
- it convert the ascii to char ;
## .toString()
## .substring 
 - Substring take start index and end index then extract the stirng form start  to end index ;
 - In which start index value is included but end index excluded;
 - It returns the specified part form start index to end index;
 ## .toLowerCase()
 - toLowerCase convert string to small letters;
 ## .toUpperCase()
 ## .trim() 
 - trim remove all the extra spaces form both the ends;
 ## .trimStart();
 ## .trimEnd();
 ## .replace(replacechar , replaceWith);
 - replace() method replace the "replacechar" of  first found index; it only replace one value;
 ## .replaceAll(replacechar , replaceWith) 
 - it replace all the char of replacedChar which is given to the method;
 ## .charAt(IndexNumber) 
 - charAt() take the index number as parameter and give the value at that index;
 ## .include(SearchSting)
  - it is case sensitive and return a boolean;
  ## indexOf(searchString)
  - return the index;
 - indexOf(searchString)
- indexOf(searchString, position) - if I want to check if it is present other than this index so i can give positon;
## repeat( times )
## spil(splitter) 
- spit function use the splitter and make substrings at every splitter;
- if splitter is "" empty string every char will get in a string;
## .toWellFormed();




