import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//import config from './src/' 
import config from './config.js'

// alert(config.api)

//import components from './views/' 
import Login from './views/login.vue'
import Register from './views/register.vue'
import AppList from './views/appList.vue'
import CDR from './views/CDR.vue'
import Payments from './views/payments.vue'
import UsageHistory from './views/usage-history.vue'
import CreditHistory from './views/credit-history.vue'
import MassCall from './views/mass-call.vue'
import GoogleApi from './views/google-api.vue'
import DevApp from './views/app-dashboard.vue'
import AppInfo from './views/app-info.vue'
import DailyUsage from './views/daily-usage.vue'
import AppRates from './views/app-rates.vue'
import AppMassRates from './views/app-mass-rates.vue'
import Conferences from './views/conferences.vue'
import AgentLog from './views/agent-log.vue'
import CallerLog from './views/caller-log.vue'
import SMS from './views/sms.vue'
import FriendList from './views/friend-list.vue'
import BlockList from './views/block-list.vue'
import SIP from './views/sip.vue'
import AppKeys from './views/app-keys.vue'
import ManageDid from './views/did.vue'
import ConferenceEdit from './views/conference-edit.vue'
import Queues from './views/queues.vue'
import Users from './views/users.vue'
import Invoice from './views/invoice.vue'
import AppOrogonationRates from './views/app-origin-rates.vue'
import AppTerminationRates from './views/app-term-rates.vue'

/*Admin Components*/
import AdminAppDashboard from './views/admin/admin_app-dashboard.vue'
import AdminAppList from './views/admin/admin_app-list.vue'
import AdminIdentity from './views/admin/admin_identity.vue'
import AdminDidVendors from './views/admin/admin_did_vendors.vue'
import AdminDevelopers from './views/admin/admin_developers.vue'
import AdminEmail_auth from './views/admin/admin_e_mail_auth.vue'
import AdminEmail_confirm from './views/admin/admin_e_mail_confirm.vue'
import AdminCost_did from './views/admin/admin_cost_did.vue'
import AdminCost_sms from './views/admin/admin_cost_sms.vue'
import AdminTerminationRates from './views/admin/admin_termination_rates.vue'
import AdminOriginationRates from './views/admin/admin_origination_rates.vue'
import AdminPayments from './views/admin/admin_payments.vue'
import AdminConfig from './views/admin/admin_config.vue'
import AdminSystem_logs from './views/admin/admin_system.vue'



Vue.use(VueRouter)
Vue.use(VueResource)

/*localStorage.removeItem('myKey');*/
var newAuthadmin = localStorage.getItem("newAuthadmin");
var userId = localStorage.getItem("userUuid");
var userDevToken = localStorage.getItem("userDevToken");


const router = new VueRouter({
/*	mode: 'history',*/
	routes: [
		{path: '/', component: AppList},
		{path: '/login', component: Login},
		{path: '/register', component: Register},
		{path: '/cdr', component: CDR},	
		{path: '/payments', component: Payments},
		{path: '/usage-history', component: UsageHistory},
		{path: '/credit-history', component: CreditHistory},
		{path: '/config/mass-call', component: MassCall},
		{path: '/config/google-api', component: GoogleApi},
		{path: '/dashboard/:id', component: DevApp},
		{path: '/dashboard/:id/app-cdr', component: AppInfo},
		{path: '/dashboard/:id/daily-usage', component: DailyUsage},
		{path: '/dashboard/:id/app-rates', component: AppRates},
		{path: '/dashboard/:id/app-mass-rates', component: AppMassRates},
		{path: '/dashboard/:id/conferences', component: Conferences},
		{path: '/dashboard/:id/pbx/agent-log', component: AgentLog},
		{path: '/dashboard/:id/pbx/caller-log', component: CallerLog},
		{path: '/dashboard/:id/sms', component: SMS},
		{path: '/dashboard/:id/friend-list', component: FriendList},
		{path: '/dashboard/:id/block-list', component: BlockList},
		{path: '/dashboard/:id/sip', component: SIP},
		{path: '/dashboard/:id/app-keys', component: AppKeys},
		{path: '/dashboard/:id/did', component: ManageDid},
		{path: '/dashboard/:id/conference-edit', component: ConferenceEdit},
		{path: '/dashboard/:id/queues', component: Queues},
		{path: '/dashboard/:id/users', component: Users},
		{path: '/dashboard/:id/invoice', component: Invoice},
		{path: '/app_origin', component: AppOrogonationRates},
		{path: '/app_term', component: AppTerminationRates},
	/*	Admin Paths*/
	    {path: '/admin', component: AdminAppDashboard},
		{path: '/did_ven', component: AdminDidVendors},
		{path: '/dev', component: AdminDevelopers},
		{path: '/app-list', component: AdminAppList},
		{path: '/identity', component: AdminIdentity},
		{path: '/authorization', component: AdminEmail_auth},
		{path: '/e_mail_confirm', component: AdminEmail_confirm},
		{path: '/cost_did', component: AdminCost_did},
		{path: '/cost_sms', component: AdminCost_sms},
		{path: '/term_rates', component: AdminTerminationRates},
		{path: '/origin_rates', component: AdminOriginationRates},
		{path: '/admin/payments', component: AdminPayments},
		{path: '/config', component: AdminConfig},
		{path: '/system', component: AdminSystem_logs}
	
	]
});




// start app
new Vue({
  el: '#app',
  router,
  created:function (argument) {
  		//  this.checkLogin();
  },
  methods:{
  	checkLogin:function(){
  		if (localKey == null) {
  			this.$router.push("/login")
  		}else{
  			console.log("this")
  			 
  		}
  	},
	logout: function(){
                localStorage.removeItem('userUuid');
                localStorage.removeItem('userDevToken');
				this.$router.push("/login");
            }
  }

});



