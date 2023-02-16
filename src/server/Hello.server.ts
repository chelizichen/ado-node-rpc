import { RpcServerController,Register } from "ado-node";

/**
 * @description 用于编写 Hello 接口的配置文件
 */
@RpcServerController("HelloInterFace")
class Hello {
    @Register("hello")
    async hello(name:string,age:string,value:string):Promise<{message:string}>{
        console.log(value);
        let message = name + age
        return { message };
    }
    @Register("Blow")
    async Blow(name:string,age:string,value:string):Promise<{message:string}>{
        let message = name + age + value
        return { message };
    }

    @Register("TestRet")
    async TestRet(name: string, age: string, [song, time]: any) {
        console.log(name);
        console.log(age);
        console.log(song);
        console.log(time);
        return {
            message:"Hello World"
        }
    }
}



export{
    Hello
}