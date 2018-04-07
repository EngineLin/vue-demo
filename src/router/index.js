import Vue from 'vue'
import Router from 'vue-router'
import Photo from '@/components/Photos/Photo'
import PhotoShow from '@/components/Photos/Show'
import PhotoNewAndEdit from '@/components/Photos/NewAndEdit'
import Registration from '@/components/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'photo',
      component: Photo,
    },
    {
      path: '/user/registration',
      name: 'registration',
      component: Registration,
    },
    {
      path: '/photo/new',
      name: 'new',
      component: PhotoNewAndEdit,
    },
    {
      path: '/photo/:id',
      name: 'show',
      component: PhotoShow,
    },
    {
      path: '/photo/edit/:id',
      name: 'edit',
      component: PhotoNewAndEdit,
    },
  ]
})
