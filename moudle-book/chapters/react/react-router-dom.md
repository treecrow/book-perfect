# [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)

| class        | api             | more                                                                     |
| ------------ | --------------- | ------------------------------------------------------------------------ |
| Hooks        | -               | -                                                                        |
| ^            | useHistory()    | 返回 history                                                             |
| ^            | useLocation()   | 返回 location                                                            |
| ^            | useParams()     | 返回 url 参数                                                            |
| ^            | useRouteMatch() | 判断是否匹配                                                             |
| <Prompt>     | -               | 离开页面前做处理                                                         |
| <Redirect>   | -               | 重定向                                                                   |
| <Route>      | -               | -                                                                        |
| <Router>     | <MemoryRouter>  | 保存 url 历史到内存                                                      |
| ^            | <BrowserRouter> | -                                                                        |
| ^            | <HashRouter>    | -                                                                        |
| ^            | <NativeRouter>  | -                                                                        |
| ^            | <StaticRouter>  | A <Router> that never changes location                                   |
| <Switch>     | -               | Renders the first child <Route> or <Redirect> that matches the location. |
| history      | -               | -                                                                        |
| location     | -               | -                                                                        |
| match        | -               | -                                                                        |
| withRouter   | -               | 获取最近到匹配，做面包屑组件的时候会用到                                 |
| generatePath | -               | 生成 url                                                                 |
