import { useEffect } from 'react';
import { getAllPosts } from '../../redux/posts/postAction'
import { connect } from 'react-redux';
const Posts = ({ StatePosts, getAllPosts, loading }) => {
    useEffect(() => {
        getAllPosts();
    }, [getAllPosts])

    return (
        <div className='col-sm-12'>
            { !loading ?
                StatePosts && StatePosts.map((singlePost, index) => (
                    <div key={index}>
                        <p>{singlePost.title}</p>
                        <p>{singlePost.body}</p>
                    </div>

                )) : null}
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.posts.loading,
    StatePosts: state.posts.posts,
});

const mapDispatchToProps = dispatch => ({
    getAllPosts: () => dispatch(getAllPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts)