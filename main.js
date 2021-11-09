console.clear()
//1.encode a message in the language which hackers use to communicate.
//instructions replace a=4,e=3,i=1,o=0,s=5

var str = 'java is cool'
var n = str.length
var res=""
for(i = 0; i < n; i++){
  var ch=str.charAt(i);
  //console.log("a");
  if(ch.localeCompare("a")==0){
    res+="4"
  }
  else if(ch.localeCompare("e")==0){
    res+="3"
  }
  else if(ch.localeCompare("i")==0){
    res+="1"
  }
  else if(ch.localeCompare("o")==0){
    res+="0"
  }
  else if(ch.localeCompare("s")==0){
    res+="5"
  }
  else{
    res+=ch
  }
}
  
console.log(res)


//no.2
//find how many vowels are in the sentence

var str = 'Good, Better Best.Never let it rest.Till your good is better and your better is best.'
var count = 0
for(i=0; i < str.length; i++ )
{
  var ch =str.charAt(i)
  if(ch.localeCompare('a')==0 || ch.localeCompare('e')==0 || ch.localeCompare('i')==0 || ch.localeCompare('o')==0 || ch.localeCompare('u')==0){
    //if(ch.localeCompare('a')==0){ we can define both types                                                                                                                     
    //count++
  //}
    //elseif(ch.localeCompare('e')==0){
    //count++
  //}
    //elseif(ch.localeCompare('i')==0){
    //count++
  //}
    //elseif(ch.localeCompare('o')==0){
    //count++
  //}
    //elseif(ch.localeCompare('u')==0){
    //count++
  //}
    
  count += 1
    //count = count+1
    //count++
  }
}
console.log(count)



//no.3
//WAJSP whic accepts a string a input and swap the case of each character.
var str = 'The Quick Brown Fox'
var ans = ''
for(var i = 0; i < str.length;i++){
  var ch = str.charAt(i)
  // console.log(ch)
  //if(ch.localeCompare(" "))
  //ans+=" "
  if(ch.localeCompare(ch.toUpperCase())==0){
    ans+=ch.toLowerCase()
  }
  else{
    ans+=ch.toUpperCase()
    //ans = ans+ch.toUpperCase()
  }
 // console.log(ch)
}
console.log(ans)
//no.4
//WAJSP for loop that will iterate from 0 to 10.for each iteration,it will check the current number is even or odd, and dispalys a messege to the screen

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(var i = 0;i < arr.length;i++){
  
 // console.log(i + " " +arr[i])
  if(arr[i]%2==0){
   console.log(arr[i]+" "+ "is even")
   
  }
  else{
    console.log(arr[i]+ " "+ "is odd")
  }
    
}


//no.5
for(var i = 0;i<50;i++){
  if(i%3==0){
    console.log(i)
  }
}

//no.6
var x = 6
for(var i = 1;i <=10;i++){
  //console.log(i+" "+j)
  console.log(x + '*' + " " + i + " " + '=' + x*i)
  
}


//no.7
//WAJS function that will reverse all thewordes which are of odd length words are not changed.
var str = "there is exactly one space between each word and no punctuation is used"
var words = str.split(' ')
var ans = ""
function reverseString(words){
  return words.split("").reverse().join("")
}

for(i=0;i < words.length;i++){
   var ch=words[i]
   if(ch.length%2 == 0){
    // console.log(ch)
     ans = ans+ch
   }
  else{
//console.log(reverseString(ch))
  ans = ans+ch
  }
}
console.log(ans)



  

