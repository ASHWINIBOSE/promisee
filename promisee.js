function get(){
    var mypromise=new Promise((resolve,reject)=>{
    var mygrade=document.getElementById("name1").value;
    var y=mygrade;
    var r=0;
    var rin=0;
    while(y!=0){
        r=y%10;
        rin=rin*10+r;
        y=Math.floor(y/10);
    }
    if(mygrade==rin){
        resolve();
    }
    else{
        reject();
    } 
    });
    mypromise.then(()=>{
    document.getElementById("result1").innerHTML="palindrome";
    }).catch(()=>{
    document.getElementById("result1").innerHTML="not palindrome";
    })
}