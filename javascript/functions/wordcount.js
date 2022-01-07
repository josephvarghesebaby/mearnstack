var text="hai hello hai hello hai hello";
/*var wordCount={}
var words=text.split(" ");

for (let word of words){
    if (word in wordCount){
    wordCount[word]+=1;
 }
else {
    wordCount[word]=1;
   }
 }
console.log(wordCount);*/




var wordCount={}
text.split(" ").map(word=>word in wordCount?wordCount[word]+=1 :wordCount [word]=1  )
console.log(wordCount);

 