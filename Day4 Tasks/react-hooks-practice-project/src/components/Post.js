import React from 'react'
import queryString from 'query-string'
import { fetchItem, fetchComments } from '../utils/api'
import Loading from './Loading'
import PostMetaInfo from './PostMetaInfo'
import Title from './Title'
import Comment from './Comment'

const postReducer = (state, action) => {
  if ( action.type === "successPost" ) {
    return {
      ...state,
      post: action.post,
      loadingPost: false
    }
  } else if ( action.type === "successComments" ) {
    return {
      ...state,
      comments: action.comments,
      loadingComments: false
    }
  } else if ( action.type === "error" ) {
    return {
      error: action.message,
      loadingPost: false,
      loadingComments: false
    }
  } else {
    throw new Error(`That action isn't supported`)
  }
}


export default function Post({ location }) {
  const [state, dispatch] = React.useReducer(
    postReducer,
    {
      post: null,
      loadingPost: true,
      comments: null,
      loadingComments: true,
      error: null,

    }
  )

  React.useEffect(()=>{
    const { id } = queryString.parse(location.search)

    fetchItem(id)
      .then((post) => {
        dispatch({ type: 'successPost', post})

        return fetchComments(post.kids || [])
      })
      .then((comments) => {
        dispatch({  type: 'successComments',  comments})
      })
      .catch(({ message }) => {
        dispatch({  type:'error',message,})
      })
  },[location])

  const { post, loadingPost, comments, loadingComments, error } = state

    if (error) {
      return <p className='center-text error'>{error}</p>
    }

    return (
      <React.Fragment>
        {loadingPost === true
          ? <Loading text='Fetching post' />
          : <React.Fragment>
              <h1 className='header'>
                <Title url={post.url} title={post.title} id={post.id} />
              </h1>
              <PostMetaInfo
                by={post.by}
                time={post.time}
                id={post.id}
                descendants={post.descendants}
              />
              <p dangerouslySetInnerHTML={{__html: post.text}} />
            </React.Fragment>}
        {loadingComments === true
          ? loadingPost === false && <Loading text='Fetching comments' />
          : <React.Fragment>
              {comments.map((comment) =>
                <Comment
                  key={comment.id}
                  comment={comment}
                />
              )}
            </React.Fragment>}
      </React.Fragment>
    )

}
