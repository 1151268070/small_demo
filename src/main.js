import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import { 
  Button, Icon, Row, Col, Tabbar, TabbarItem, Search,
  Tab, Tabs, Swipe, SwipeItem, Image, List, Card, Grid, 
  GridItem, NavBar, Notify,  Field, Cell, CellGroup, 
  Stepper, SubmitBar, Checkbox, Tag, Loading, RadioGroup, 
  Radio, GoodsAction, GoodsActionIcon, GoodsActionButton,
  Sidebar, SidebarItem, AddressEdit, SwipeCell, CouponCell, CouponList,
  Popup, Step, Steps 
 } from 'vant';

Axios.defaults.baseURL = 'http://127.0.0.1/huawei/data';
Axios.defaults.withCredentials=true;

Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Vue.use(Button);
Vue.use(Icon);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Row).use(Col);
Vue.use(Search);
Vue.use(Tab).use(Tabs);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Image);
Vue.use(List);
Vue.use(Card);
Vue.use(Grid).use(GridItem);
Vue.use(NavBar);
Vue.use(Notify);
Vue.use(Field);
Vue.use(Cell).use(CellGroup);
Vue.use(Stepper);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(Tag);
Vue.use(Loading);
Vue.use(RadioGroup, Radio);
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
Vue.use(Sidebar).use(SidebarItem);
Vue.use(AddressEdit);
Vue.use(SwipeCell);
Vue.use(CouponCell).use(CouponList);
Vue.use(Popup);
Vue.use(Step).use(Steps);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
