import actions from './actions'
import mutations from './mutations'

const app = {
  state: { 
    day     : [],
    today   : null,
    dailys  : {/* [id: number]: Item */},
    calendar: null,   
    radioDate:null, 
    songs:null
    
    
  },
  actions,
  mutations
}

export default app
