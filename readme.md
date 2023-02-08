# Ado-Node-RPC 微服务模块

## 整合的仓库
- [Ado-Node](https://github.com/chelizichen/ado-node) 包含 Http 微服务模块 依赖注入 ORM 命令行 等多个开发包的库
- [Ado-Cloud](https://github.com/chelizichen/ado-cloud) 微服务网关 将Http请求代理转发给微服务
- [Ado-Java-Proxy](https://github.com/chelizichen/ado-java-proxy) Spring Boot 服务，可以提供Http 服务，也可以调用微服务
- [Ado-Java-RPC](https://github.com/chelizichen/ado-java-rpc) Java 微服务模块 示例代码
- [Ado-Node-RPC](https://github.com/chelizichen/ado-node-rpc) NodeJs 微服务模块 示例代码

## Doc

- @Decorator RpcServerController(interFace:String) 提供远程调用的接口名

````TypeScript
@RpcServerController("Hello")
class Hello {
    @Register("hello")
    async hello(name:string,age:string,value:string):Promise<{message:string}>{
        let message = name + age + value
        return { message };
    }

    @Register("Blow")
    async Blow(name:string,age:string,value:string):Promise<{message:string}>{
        let message = name + age + value
        return { message };
    }
}

````

- @RpcServerModules({RpcServerController:[]})
- 启动Nodejs服务所需的装饰器

````TypeScript
@RpcServerModules({
  RpcServerController: [Hello,Wind],
})
class TestRpcServerModules {
  constructor() {
    setTimeout(()=>{
      const boost = RpcServerBoost(TestRpcServerModules);
      boost()
    },0)
  }
}

new TestRpcServerModules()
````
