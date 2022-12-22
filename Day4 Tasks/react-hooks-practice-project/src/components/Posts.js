import React from 'react'
import PropTypes from 'prop-types'
import { fetchMainPosts } from '../utils/api'
import Loading from './Loading'
import PostsList from './PostsList'

const postReducer = (state, action) => {
  if ( action.type === "resetState" ) {
    return {
      ...state,
      posts: null,
      error: null,
      loading: true
    }
  } else if ( action.type === "success" ) {
    return {
      ...state,
      posts: action.posts,
      loading: false,
      error: null
    }
  } else if ( action.type === "error" ){
    return {
      ...state,
      error: action.message,
      loading: false
    }
  }
}

export default function Posts ({ type }) {
  const [state, dispatch] = React.useReducer(
    postReducer,
    {
      posts: null,
      error: null,
      loading: true
    }
  )
  const refType = React.useRef("")
  React.useEffect(()=>{
    if (refType !== type){
    dispatch({type: 'resetState'})
    console.log('render')
    fetchMainPosts(type)
    .then((posts)=>{
      dispatch({type: 'success',posts})
    })
    .catch(({message})=>{
      dispatch({type: 'error', message})
    })
  }
  },[refType, type])

  const { posts, error, loading } = state

  if (loading === true) {
    return <Loading />
  }

  if (error) {
    return <p className='center-text error'>{error}</p>
  }

  return <PostsList posts={posts} />

}

// export default class Posts extends React.Component {
//   state = {
//     posts: null,
//     error: null,
//     loading: true,
//   }
//   componentDidMount() {
//     this.handleFetch()
//   }
//   componentDidUpdate(prevProps) {
//     if (prevProps.type !== this.props.type) {
//       this.handleFetch()
//     }
//   } 
//   handleFetch () {
//     this.setState({
//       posts: null,
//       error: null,
//       loading: true
//     })

//     fetchMainPosts(this.props.type)
//       .then((posts) => this.setState({
//         posts,
//         loading: false,
//         error: null
//       }))
//       .catch(({ message }) => this.setState({
//         error: message,
//         loading: false
//       }))
//   }
//   render() {
    
//   }
// }

Posts.propTypes = {
  type: PropTypes.oneOf(['top', 'new'])
}