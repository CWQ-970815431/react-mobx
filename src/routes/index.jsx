import { useRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Loading } from 'react-vant';


const Home = lazy(() => import('../pages/Home'))
const PageOne = lazy(()=> import('../pages/Mobx/index'))


const routes = [
    {
        path: '/',
        element: <Home />
    },
    {
        page:'/mobx',
        element:<PageOne  />
    }

]


function RouterList() {
    let element = useRoutes(routes)  // 读取路由数组
    return element
}

function Router() {
    let style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '300px'
    }
    return (
        // 加载菊花图
        <Suspense fallback={<Loading type="spinner" color="#3f45ff" style={style} />}>
            <RouterList />
        </Suspense>
    )
}

export default Router