import { RpcServerModules,RpcServerBoost } from "ado-node";
import { Hello } from "./server/Hello.server";
import { Wind } from "./server/Wind.server";
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

