

const HOME = ()=>import('@/views/home')

export default [
    { // 前台
      path: '/reception',
      component: HOME,
      name: 'reception',
      alwaysShow: true,
      meta: { roles: ['a4e38403bf1544cb8b743be9034c015a'], icon: 'iconfont icon-qiantai', title: "前台"},
      children: [
          {
          path: 'freshmenReg',
          component: () => import('@/components/HelloWorld'),
          name: 'freshmenReg',
          props: true,
          meta: { roles: ['a4e38403bf1544cb8b743be9034c017a'], title: '报名', noCache: false}
        },
        {
          path: 'receivables',
          component: () => import('@/views/Main.vue'),
          name: 'receivables',
          props:true,
          meta: { roles: ['a4e38403bf1544cb8b743be9034c019a'], title: '收款', noCache: false }
        },
        {
          path: 'refund',
          component: () => import('@/components/HelloWorld'),
          name: 'refund',
          props:true,
          meta: { roles: ['a4e38403bf1544cb8b743be9034c021a'], title: '退费', noCache: false }
        },
        {
          path: 'transferClass',
          component: () => import('@/views/Main.vue'),
          name: 'transferClass',
          props:true,
          meta: { roles: ['a4e38403bf1544cb8b743be9034c174a'], title: '结转', noCache: false }
        }
      ]
    },
    { // 客户管理
      path: '/customer',
      component: () => import('@/components/HelloWorld'),
      name: 'customer',
      alwaysShow: true,
      meta: { roles: ['a4e38403bf1544cb8b743be9034c023a'], icon: 'iconfont icon-kehuyonghuqunzurenxianxing', title: "客户"},
      children: [
        {
          path: 'allCustomers',
          component: () => import('@/components/HelloWorld'),
          name: 'allCustomers',
          meta: { roles: ['a4e38403bf1544cb8b743be9034c025a'], title: '全部客户', noCache: false }
        },
        {
          path: 'myCustomer',
          component: () => import('@/components/HelloWorld'),
          name: 'myCustomer',
          meta: { roles: ['a4e38403bf1544cb8b743be9034c036a'], title: '我的客户', noCache: false  }
        },
          {
          path: 'appointment',
          component: () => import('@/components/HelloWorld'),
          name: 'appointment',
          meta: { roles: ['a4e38403bf1544cb8b743be9034c039a'], title: '预约上门', noCache: false }
        },
        {
          path: 'followUp',
          component: () => import('@/components/HelloWorld'),
          name: 'followUp',
          meta: { roles: ['a4e38403bf1544cb8b743be9034c044a'], title: '跟进记录', noCache: false }
        },
        {
          path: 'homeRecord',
          component: () => import('@/components/HelloWorld'),
          name: 'homeRecord',
          meta: { roles: ['a4e38403bf1544cb8b743be9034c183a'], title: '上门记录', noCache: false }
        },
        {
          path: 'lostStudents',
          component: () => import('@/components/HelloWorld'),
          name: 'lostStudents',
          meta: { roles: ['a4e38403bf1544cb8b743be9034c047a'], title: '流失学员', noCache: false  }
        }
      ]
    },    
  ]


// export const asyncRouterMap = [
//     { // 前台
//       path: '/reception',
//       component: Layout,
//       name: 'reception',
//       alwaysShow: true,
//       meta: { roles: ['a4e38403bf1544cb8b743be9034c015a'], icon: 'iconfont icon-qiantai', title: "前台"},
//       children: [
//           {
//           path: 'freshmenReg',
//           component: () => import('@/views/reception/freshmenReg'),
//           name: 'freshmenReg',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c017a'], title: '报名', noCache: false}
//         },
//         {
//           path: 'receivables',
//           component: () => import('@/views/reception/receivables'),
//           name: 'receivables',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c019a'], title: '收款', noCache: false }
//         },
//         {
//           path: 'refund',
//           component: () => import('@/views/reception/refund'),
//           name: 'refund',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c021a'], title: '退费', noCache: false }
//         },
//         {
//           path: 'transferClass',
//           component: () => import('@/views/reception/transferClass'),
//           name: 'transferClass',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c174a'], title: '结转', noCache: false }
//         }
//       ]
//     },
//     { // 客户管理
//       path: '/customer',
//       component: Layout,
//       name: 'customer',
//       alwaysShow: true,
//       meta: { roles: ['a4e38403bf1544cb8b743be9034c023a'], icon: 'iconfont icon-kehuyonghuqunzurenxianxing', title: "客户"},
//       children: [
//         {
//           path: 'allCustomers',
//           component: () => import('@/views/customer/allCustomers'),
//           name: 'allCustomers',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c025a'], title: '全部客户', noCache: false }
//         },
//         {
//           path: 'myCustomer',
//           component: () => import('@/views/customer/myCustomer'),
//           name: 'myCustomer',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c036a'], title: '我的客户', noCache: false  }
//         },
//           {
//           path: 'appointment',
//           component: () => import('@/views/customer/appointment'),
//           name: 'appointment',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c039a'], title: '预约上门', noCache: false }
//         },
//         {
//           path: 'followUp',
//           component: () => import('@/views/customer/followUp'),
//           name: 'followUp',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c044a'], title: '跟进记录', noCache: false }
//         },
//         {
//           path: 'homeRecord',
//           component: () => import('@/views/customer/homeRecord'),
//           name: 'homeRecord',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c183a'], title: '上门记录', noCache: false }
//         },
//         {
//           path: 'lostStudents',
//           component: () => import('@/views/customer/lostStudents'),
//           name: 'lostStudents',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c047a'], title: '流失学员', noCache: false  }
//         }
//       ]
//     },
//     { // 学员管理
//       path: '/students',
//       component: Layout,
//       name: 'students',
//       alwaysShow: true,
//       meta: { roles: ['a4e38403bf1544cb8b743be9034c051a'], icon: 'iconfont icon-xueyuanguanli', title: "学员"},
//       children: [
//         {
//           path: 'studentList',
//           component: () => import('@/views/students/studentList'),
//           name: 'studentList',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c053a'], title: '学员列表', noCache: false  }
//         },
//         {
//           path: 'crossSchool',
//           component: () => import('@/views/students/crossSchool'),
//           name: 'crossSchool',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c064a'], title: '转/跨校记录', noCache: false }
//         },
//         {
//           path: 'gradeManage',
//           component: () => import('@/views/students/gradeManage'),
//           name: 'gradeManage',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c066a'], title: '成绩管理', noCache: false }
//         },
//         {
//           path: 'returnVisit',
//           component: () => import('@/views/students/returnVisit'),
//           name: 'returnVisit',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c191a'], title: '回访记录', noCache: false }
//         },
//         {
//           path: 'parentsMeeting',
//           component: () => import('@/views/students/parentsMeeting'),
//           name: 'parentsMeeting',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c192a'], title: '家长会记录', noCache: false }
//         }
//       ]
//     },
//     { // 教务管理
//       path: '/eduManage',
//       component: Layout,
//       name: 'eduManage',
//       alwaysShow: true,
//       meta: { roles: ['a4e38403bf1544cb8b743be9034c077a'], icon: 'iconfont icon-jiaowuguanli', title: "教务"},
//       children: [
//         {
//           path: 'oneToThree',
//           component: () => import('@/views/eduManage/oneToThree'),
//           name: 'oneToThree',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c081a'], title: '1 对 3', noCache: false }
//         },
//         {
//           path: 'oneToOne',
//           component: () => import('@/views/eduManage/oneToOne'),
//           name: 'oneToOne',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c092a'], title: '1 对 1', noCache: false }
//         },
//         {
//           path: 'remedial',
//           component: () => import('@/views/students/remedial'),
//           name: 'remedial',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c068a'], title: '补课管理', noCache: false  }
//         },
//         {
//           path: 'attendance',
//           component: () => import('@/views/students/attendance'),
//           name: 'attendance',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c071a'], title: '学员考勤', noCache: false }
//         },
//         {
//           path: 'timeTable',
//           component: () => import('@/views/eduManage/timeTable'),
//           name: 'timeTable',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c105a'], title: '课表管理', noCache: false }
//         },
//       ]
//     },
//     { // 财务管理
//       path: '/financialManage',
//       component: Layout,
//       name: 'financialManage',
//       alwaysShow: true,
//       meta: { roles: ['a4e38403bf1544cb8b743be9034c164a'], icon: 'iconfont icon-caiwu', title: "财务"},
//       children: [
//           {
//           path: 'contract',
//           component: () => import('@/views/financialManage/contract'),
//           name: 'contract',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c110a'], title: '合同管理', noCache: false}
//         },
//         {
//           path: 'payment',
//           component: () => import('@/views/financialManage/payment'),
//           name: 'payment',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c115a'], title: '收款管理', noCache: false }
//         },
//         {
//           path: 'deductionRecord',
//           component: () => import('@/views/financialManage/deductionRecord'),
//           name: 'deductionRecord',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c122a'], title: '扣费记录', noCache: false }
//         },
//         {
//           path: 'refundRecord',
//           component: () => import('@/views/financialManage/refundRecord'),
//           name: 'refundRecord',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c124a'], title: '退费记录', noCache: false }
//         }
//       ]
//     },
//     { // OA
//       path: '/OA',
//       component: Layout,
//       name: 'OA',
//       alwaysShow: true,
//       meta: { roles: ['a4e38403bf1544cb8b743be9034c128a'], icon: 'iconfont icon-OA', title: "OA"},
//       children: [
//           {
//           path: 'organization',
//           component: () => import('@/views/OA/organization'),
//           name: 'organization',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c130a'], title: '组织架构', noCache: false }
//         },
//         {
//           path: 'permissions',
//           component: () => import('@/views/OA/permissions'),
//           name: 'permissions',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c132a'], title: '角色权限', noCache: false }
//         },
//         {
//           path: 'employees',
//           component: () => import('@/views/OA/employees'),
//           name: 'employees',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c134a'], title: '员工管理', noCache: false }
//         },
//         // {
//         //   path: 'teachersManage',
//         //   component: () => import('@/views/OA/teachersManage'),
//         //   name: 'teachersManage',
//         //   meta: { roles: ['a4e38403bf1544cb8b743be9034c133a'], title: '老师管理' }
//         // },
//         {
//           path: 'examineManage',
//           component: () => import('@/views/OA/examineManage'),
//           name: 'examineManage',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c137a'], title: '审批管理', noCache: false }
//         },
//         {
//           path: 'examineSetting',
//           component: () => import('@/views/OA/examineSetting'),
//           name: 'examineSetting',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c139a'], title: '审批设置', noCache: false }
//         },
//         {
//           path: 'commodity',
//           component: () => import('@/views/OA/commodity'),
//           name: 'commodity',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c141a'], title: '物品管理', noCache: false }
//         },
//         // {
//         //   path: 'StockManage',
//         //   component: () => import('@/views/OA/StockManage'),
//         //   name: 'StockManage',
//         //   meta: { roles: ['a4e38403bf1544cb8b743be9034c142a'], title: '库存管理', noCache: true }
//         // },
//         {
//           path: 'notice',
//           component: () => import('@/views/OA/notice'),
//           name: 'notice',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c144a'], title: '通知公告', noCache: false }
//         }
//       ]
//     },
//     { // 报表
//       path: '/statilReport',
//       component: Layout,
//       name: 'statilReport',
//       alwaysShow: true,
//       meta: { roles: ['a4e38403bf1544cb8b743be9034c146a'], icon: 'iconfont icon-baobiao', title: "报表"},
//       children: [
//         // {
//         //   path: 'lessionLost',
//         //   component: () => import('@/views/statilReport/lessionLost'),
//         //   name: 'lessionLost',
//         //   meta: { roles: ['a4e38403bf1544cb8b743be9034c147a'], title: '老师课耗', noCache: false }
//         // },
//         {
//           path: 'oneToOneLessionLost',
//           component: () => import('@/views/statilReport/oneToOneLessionLost'),
//           name: 'oneToOneLessionLost',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c147a'], title: '1对1老师课耗', noCache: false }
//         },
//         {
//           path: 'oneToThreeLessionLost',
//           component: () => import('@/views/statilReport/oneToThreeLessionLost'),
//           name: 'oneToThreeLessionLost',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c149a'], title: '1对3老师课耗', noCache: false }
//         },
//         {
//           path: 'studentInvoicing',
//           component: () => import('@/views/statilReport/studentInvoicing'),
//           name: 'studentInvoicing',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c148a'], title: '学员进销存', noCache: false }
//         }
//         // {
//         //   path: 'campusFinancialSummary',
//         //   component: () => import('@/views/statilReport/campusFinancialSummary'),
//         //   name: 'campusFinancialSummary',
//         //   meta: { roles: ['a4e38403bf1544cb8b743be9034c149a'], title: '校区财务简表', noCache: false}
//         // },
//       ]
//     },
//     { // 系统设置
//       path: '/setting',
//       component: Layout,
//       name: 'setting',
//       alwaysShow: true,
//       meta: { roles: ['a4e38403bf1544cb8b743be9034c151a'], icon: 'iconfont icon-shezhi', title: "设置"},
//       children: [
//         {
//           path: 'course',
//           component: () => import('@/views/eduManage/course'),
//           name: 'course',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c079a'],  title: '课程管理', noCache: false }
//         },
//         {
//           path: 'basicData',
//           component: () => import('@/views/setting/basicData'),
//           name: 'basicData',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c153a'], title: '基础数据', noCache: false }
//         },
//         {
//           path: 'classroom',
//           component: () => import('@/views/setting/classroom'),
//           name: 'classroom',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c155a'], title: '教室设置', noCache: false }
//         },
//         {
//           path: 'attendanceSetting',
//           component: () => import('@/views/setting/attendanceSetting'),
//           name: 'attendanceSetting',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c157a'], title: '硬件设置', noCache: false }
//         },
//         {
//           path: 'attendanceMachineSetting',
//           component: () => import('@/views/setting/attendanceMachineSetting'),
//           name: 'attendanceMachineSetting',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c176a'], title: '考勤机设置', noCache: false }
//         },
//         {
//           path: 'discount',
//           component: () => import('@/views/setting/discount'),
//           name: 'discount',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c161a'], title: '优惠方案', noCache: false }
//         },
//         {
//           path: 'businessRankings',
//           component: () => import('@/views/setting/businessRankings'),
//           name: 'businessRankings',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c172a'], title: '期初数据', noCache: false }
//         },
//         {
//           path: 'customSetting',
//           component: () => import('@/views/setting/customSetting'),
//           name: 'customSetting',
//           meta: { roles: ['a4e38403bf1544cb8b743be9034c162a','a4e38403bf1544cb8b743be9034c175a','a4e38403bf1544cb8b743be9034c188a'], title: '自定义设置', noCache: false }
//         },
//       ]
//     },
//     { path: '*', redirect: '/404', hidden: true } // 404
//   ]
