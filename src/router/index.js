import Vue from 'vue'
import Router from 'vue-router'

// 引入要用來渲染的 Components
import Photo from '@/components/Photos/Photo'
import PhotoShow from '@/components/Photos/Show'
import PhotoNew from '@/components/Photos/New'
import PhotoEdit from '@/components/Photos/Edit'
import SignUp from '@/components/Auth/SignUp'
import LogIn from '@/components/Auth/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'photo',
      component: Photo,
    },
    {
      path: '/user/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/user/login',
      name: 'login',
      component: LogIn,
    },
    
    // Create
    {
      path: '/photo/new',
      name: 'new',
      component: PhotoNew,
    },

    // Read
    {
      path: '/photo/:id',
      name: 'show',
      component: PhotoShow,
    },

    // Update
    {
      path: '/photo/edit/:id',
      name: 'edit',
      component: PhotoEdit,
    },
  ]
})
