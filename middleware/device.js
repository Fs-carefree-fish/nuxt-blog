/* @param userAgent
* @return  true 移动端 false pc端*/
function deviceType(userAgent) {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(userAgent);
}
/*判断用户设备的中间件*/
export default function (context) {
  // 参数为 context
  const { isHMR, req, store } = context
  if (isHMR) return
  let userAgent = process.server
    ? req.headers["user-agent"]
    : navigator.userAgent;

  // 这里可以给全局上下文添加一个属性来保存我们返回的匹配信息
  context.deviceType = deviceType(userAgent);
  // 我这里直接注入到store
  store.commit("changeMobileFlag", context.deviceType)
}
