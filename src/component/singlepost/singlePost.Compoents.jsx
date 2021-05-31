import { useState, useEffect } from 'react';
import { GetSinglePost } from '../../redux/posts/postAction'
import { connect } from 'react-redux'
import { useForm } from "react-hook-form";
import '../../App.css'
const SinglePost = ({ GetSinglePost, StateSinglePost, loading }) => {
    const [post, updatedPost] = useState({ id: '' })
    let id = post.id;
    const handleChange = e => {
        updatedPost({ id: e.target.value })
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        GetSinglePost(id)
        console.log(data);
    }


    return (
        <div className="col-sm-12" style={{ marginTop: '230px' }}>
            <h1>
                Get in Touch To Get SinglePost
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="number" onChange={handleChange} placeholder='id' />
                <input type='submit' value="Confrim " />
            </form>
            <div>
                {!loading ?
                    (<div className="card" style={{ color: 'black' }}>
                        <p> <strong className="error" >title:</strong> {StateSinglePost.title} </p>
                        <p> <strong className="error" >body:</strong> {StateSinglePost.body} </p>
                        <p> <strong className="error" >id:</strong>  {StateSinglePost.id} </p>
                    </div>)
                    : null
                }
            </div>
        </div >
    )
}

const mapStateToProps = state => ({
    loading: state.posts.loading,
    StateSinglePost: state.posts.singlePost,
});

const mapDispatchToProps = dispatch => ({
    GetSinglePost: (id) => dispatch(GetSinglePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);