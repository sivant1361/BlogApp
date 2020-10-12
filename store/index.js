import Vuex from 'vuex'

const createStore =() =>{
  return new Vuex.Store({
    state: {
       loadedPosts:[]
    },
    mutations: {
      setPosts(state,posts){
        state.loadedPosts=posts
      }
    },
    actions:{
      nuxtServerInit(vuexContext,context){
        return new Promise((resolve,reject) =>{
          setTimeout(()=>{
            vuexContext.commit('setPosts',[
                {
                  id:'1',
                  title: 'First Post',
                  previewText:'My First Post',
                  thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTE5pOr4wI-1ZPNraeKVgETQLUOD0CD1QPWow&usqp=CAU'
                },
                {
                  id:'2',
                  title: 'Second Post',
                  previewText:'My Second Post',
                  thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAo5fz7xP2uK2PdrDhBH9BkItCqCYy_116oQ&usqp=CAU'
                },
                {
                  id:'3',
                  title: 'Third Post',
                  previewText:'My Third Post',
                  thumbnail:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTE5pOr4wI-1ZPNraeKVgETQLUOD0CD1QPWow&usqp=CAU'
                }
              ]
            )
            resolve();
          }
          ,1500)
        })
      },
      setPosts(vuexContext,posts){
        vuexContext.commit('setPosts',posts)
      }
    },
    getters: {
      loadedPosts(state){
        return state.loadedPosts
      }
    },
  })
}

export default createStore
