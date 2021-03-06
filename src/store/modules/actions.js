import {
  fetchIndex,
  fetchDaily,
  fetchTest,
  fetchContent,
  fetchNews,
  fetchToday,
  fetchNewMonth
} from '@/api'


export default {
  // the index.json
  FETCH_INDEX ({ commit, dispatch, state }) {
    return state.calendar
    ? { calendar: state.calendar, 
        days: state.days, 
        today: state.today 
      }
    : fetchIndex().then(data => {

      let calendar = data
        , days = Object.keys(calendar)
        , today = ([...days].pop()).split('.')[0]

      commit('SET_CALENDAR', data)
      commit('SET_TODAY', today)
      commit('SET_DAYS', days)

      return Promise.resolve({ calendar, days, today })
    })
  },

  FETCH_DAILY ({ commit, dispatch, state }, { day: day }) {

    if (day === 'today') {
      day = state.today
    }
    if (state.dailys[day+'.daily']) {
      return state.dailys[day +'.daily']
    }
    else {
      let requestObjectID = state.calendar[day+'.daily']
      return fetchDaily(requestObjectID).then(data => {
        commit('SET_DAILY', { day: day + '.daily', data: data })
        return data
      })
    }
  },
  FETCH_TEST ({ commit, dispatch, state }) {
    return fetchTest()
    .then(data => {
     
      let days = data['date']
      commit('SET_DAYS', days)

      return Promise.resolve({ days })
    })
  },

  FETCH_NEW_MONTH ({ commit, dispatch, state }, { date:date,addMonth: addMonth }) {
    return fetchNewMonth(date,addMonth)
    .then(data => {
     
      let days = data['date']
      
      commit('SET_DAYS', days)

      return Promise.resolve({ days })
    })
  },


  FETCH_CONTENT ({ commit, dispatch, state }, { date: day }) {
    
    return fetchContent(day)
    .then(data => {

      return Promise.resolve({ data })
    })
  },

  FETCH_NEWS ({ commit, dispatch, state }, { date: day }) {
    
    return fetchNews(day)
    .then(data => {

      return Promise.resolve({ data })
    })
  },

  FETCH_TODAY ({ commit, dispatch, state }) {
    
    return fetchToday()
    .then(data => {

      return Promise.resolve( data.data )
    })
  }
}