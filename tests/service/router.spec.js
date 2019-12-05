const superagent=require("supertest")
const app=require("./app")

function request(){
    return superagent(app.listen())
}

describe("Node接口测试",function(){
    it("test接口测试",function(done){
        //非node服务器
        // fetch("127.0.0.1/a.php",function(res){
        //     if(res.body.data="Hello test"){
        //         done();
        //     }
        //     else{
        //         done(new Error("接口数据异常"))
        //     }
        // })

        //node服务器
        request()
        .get("/test")
        .expect(200)
        .expect("Content-Type",/json/)
        .end(function(err,res){
            if(err){
                done(err);
            }
            if(res.body.data=="Hello test"){
                done()
            }else{
                done(new Error("接口数据异常"))
            }
        })
    })
})