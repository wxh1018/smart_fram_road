const route = [
    {
        path: '/management/statistic',
        name: 'management_statistic',
        component: () => import('../views/management/Statistic.vue')
    },
    {
        path:'/management/building',
        name:'management_building',
        component:()=>import('../views/management/project/update.vue')
    }
]
export default route