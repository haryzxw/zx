import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'
Vue.use(Vuex)
const state = {
	userSource:{},
	selectArr:{
		name:[],
		id:[]
	},
	peopleObj:{
		value:'',
		radio:0,
	},
	articleObj:{
		value:'',
		// radio:0,
		id:'',
		// flag:'',
	},
	singleObj:{
		value:'',
		// radio:0,
		id:'',
		// flag:'',
	},
	psShow:{
		value:'',
		id:'',
	},
	// psShow:'',
	newArcticle:{
		value:'',
		radio:0,
		id:'',
	},
	clearAll:'',
	userState:{},
	orgState:{},
	type:'',//0-批示,1-分发,2-反馈
	psBox:{
		type:'',
		psObj:[],
		title:'',
		instructionId:'',
		insType:'',
		flag:false,
		psType:'',
	},
	clrId:'',
	unitVal:'',
	// mesId:'',
	mesState:{
		id:'',
		method:''
	},
	reportObj:[],
	wordObj:{},
	mesObj:{
	  title: '',
      area: '',
      accept: '',
      send: '',
	},
	releaseObj:{
		id:'',
		type:'',
	},
	mesCount:'',
	psCount:'',
	userFlag:false,
	orgFlag:false,
	psFlag:false,
	psDetailFlag:false,
	mesFlag:false,
	artFlag:false,
	artBrush:false,
	multiBrush:{
		'flag':false,
		'type':'',
	},
	artEvent:'',
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store


