import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { doDeletePost } from '../../redux/posts/postAction'
const DeletePost = ({ doDeletePost, Res, loading }) => {
    const [post, updatedPost] = useState({ id: '' })
    let id = post.id;

    const handleChange = e => {
        updatedPost({ id: e.target.value })
    }

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        doDeletePost(data.id)
    }


    return (
        <div className="col-sm-12" style={{ marginTop: '230px' }}>
            <h1>
                Get in Touch To Delete Post
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="id" type="number" onChange={handleChange} placeholder="id" />
                <input type='submit' value="Confrim " />
            </form>

            {!loading ?
                (<div style={{ color: 'green' }}>
                    status {Res && Res.status} <br />
                    Request: {Res && Res.statusText}
                </div>)
                : null}

        </div >
    )
}


const mapStateToProps = state => ({
    Res: state.posts.Response,
    loading: state.posts.loading
})

const mapDispatchToProps = dispatch => ({
    doDeletePost: (id) => dispatch(doDeletePost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeletePost)