import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Robots from '@/pages/Robot/Index'
import RobotsAdd from '@/pages/Robot/Add'
import Categories from '@/pages/Category/Index'
import Specs from '@/pages/Spec/Index'
import Accessories from '@/pages/Accessory/Index'
import RobotStatistics from '@/pages/RobotStatistic/Index'
import NotFound from '@/pages/NotFound'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home },
  { path: '/robots', component: Robots },
  { path: '/robots/add', component: RobotsAdd },
  { path: '/categories', component: Categories },
  { path: '/specs', component: Specs },
  { path: '/accessories', component: Accessories },
  { path: '/robot_statistics', component: RobotStatistics },
  { path: '*', component: NotFound }
]
const router = new VueRouter({ routes })
export default router
