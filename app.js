//session 19

const express=require('express');
const app=new express();

// get
const data=require('./dataset.json');
app.get('/employees',(req,res)=>{
    res.send(data);
})
// at postman  get   http://localhost:3000/employee
// at browser  localhost:3000/employee


// post
app.use(express.json());
const fs=require('fs');
app.post('/employees',(req,res)=>{
    data.push(req.body);
    fs.writeFile('dataset.json',JSON.stringify(data),(err,resp)=>{
        if(err){
            res.send('data cannot be written');
        }
        else{
            res.send('data written sucessfully');
        }
    })

})
// at postman post->http://localhost:3000/employee  ->body->row->json ->type json data



// in update and delete operations,we have url parameter
// put
app.put('/employees/:name',(req,res)=>{
    let name=req.params.name;   //save the url parameter name to variable name.
    data.forEach((item)=>{
        if(item.employeename==name){
            item.employeeDesignation=req.body.employeeDesignation;
            item.employeeSalary=req.body.employeeSalary;
        }
    })
    fs.writeFile('dataset.json',JSON.stringify(data),(err,resp)=>{
        if(err){
            res.send('data could not be updated');

        }
        else{
            res.send('data updated')
        }
    })
})
//we want to change the salary and designation of nitha
//at postman put->http://localhost:3000/employees/Nitha
//body->raw->json


//DELETE
app.delete('/employees/:name',(req,res)=>{
    let name=req.params.name

let value=data.filter(item =>item.employeename!==name);
fs.writeFile('dataset.json',JSON.stringify(value),(err,resp)=>{
    if(err){
         res.send('data cannot be deleted')
        }
        else{
            res.send('data deleted')
        }
    })
    

})

//we want to delete the details of nitha
//at postman del->http://localhost:3000/employees/Nitha
//body->none




app.listen(3000);
console.log('server listening to port 3000');