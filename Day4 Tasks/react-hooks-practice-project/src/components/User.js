import React from 'react'
import queryString from 'query-string'
import { fetchUser, fetchPosts } from '../utils/api'
import Loading from './Loading'
import { formatDate } from '../utils/helpers'
import PostsList from './PostsList'


const userReducer = (state, action) => {
  if ( action.type === "successUser" ) {
    return {
      ...state,
      user: action.user,
      loadingUser: false
    }
  } else if ( action.type === "successPost" ) {
    return {
      ...state,
      posts: action.posts,
      loadingPosts: false,
      error: null
    }
  } else if (action.type === "error") {
    return {
      ...state,
      error: action.message,
      loadingUser:false,
      loadingPosts:false,
    }
  }
} 


export default function User({location}){
  const [state, dispatch] = React.useReducer(
    userReducer,
    {
      user: null, 
      loadingUser:true, 
      posts: null, 
      loadingPosts:true,
      error: null
    }
  )

  React.useEffect(()=>{
    const { id } = queryString.parse(location.search)

    fetchUser(id)
    .then((user)=> {
      dispatch({type: 'successUser', user}) 
      return fetchPosts(user.submitted.slice(0,30))
    })
    .then((posts) => {
      dispatch({ type: 'successPost', posts })
    })
    .catch(({message})=> 
    dispatch({ type: 'error', message })
    )

  }, [location])

  const { user, posts, loadingUser, loadingPosts, error } = state

    if (error) {
      return <p className='center-text error'>{error}</p>
    }

    return (
      <React.Fragment>
        {loadingUser === true
          ? <Loading text='Fetching User' />
          : <React.Fragment>
              <h1 className='header'>{user.id}</h1>
              <div className='meta-info-light'>
                <span>joined <b>{formatDate(user.created)}</b></span>
                <span>has <b>{user.karma.toLocaleString()}</b> karma</span>
              </div>
              <p dangerouslySetInnerHTML={{__html: user.about}} />
            </React.Fragment>}
        {loadingPosts === true
          ? loadingUser === false && <Loading text='Fetching posts'/>
          : <React.Fragment>
              <h2>Posts</h2>
              <PostsList posts={posts} />
            </React.Fragment>}
      </React.Fragment>
    )

}
