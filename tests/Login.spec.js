
const{test,expect}=require('@playwright/test') 
const{hello,helloworld}=require("./Demo/Hello")

test('my first test case',async({page})=>{
  await   page.goto('https:/google.com');

})
