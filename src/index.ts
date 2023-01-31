import { RpcServerModules,RpcServerBoost } from "ado-node";
import { HelloInterFace } from "./server/HelloInterFace.server";

@RpcServerModules({
  RpcServerController: [HelloInterFace],
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

