import { RpcServerController,Register } from "ado-node";

/**
 * @description 用于编写 Hello 接口的配置文件
 */
@RpcServerController("Wind")
class Wind {
    

    @Register("Blow")
    async Blow(name:string,age:string,value:string):Promise<{message:string}>{
        let message = name + age + value
        return {message}
    }

    
}



export{
    Wind
}