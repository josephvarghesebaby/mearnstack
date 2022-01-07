var dataset=[
    
    {district:"palakkad",temparature:30},
    {district:"tvm",temparature:31},
    {district:"palakkad",temparature:31},
    {district:"tvm",temparature:29},



]
var wheather_data={}
for (let data of dataset){
    let distName=data.district;
    let curTemp=data.temparature;
    if(distName in wheather_data){
        let oldTemp=wheather_data[distName]
        if(curTemp>oldTemp){
            wheather_data[distName]=curTemp;
        }

    }
    else{
       wheather_data[distName]=curTemp;
    }
}
console.log(wheather_data);
