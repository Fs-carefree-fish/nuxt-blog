/*重定向 根路径 / 到/blog*/
export default function ({ isHMR, route, redirect }) {
  if (isHMR) return
  // console.log("route", route)
  if (route.fullPath === '/') {
    return redirect('/blog')
  }
}
