import { useState } from 'react';
import { EditPost } from '../../redux/posts/postAction'
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';

const EditSinglePost = ({ EditPost, State, load }) => {

    const [post, updatedPost] = useState({ id: '', title: '' })

    const title = post.title;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        EditPost(title)
    }
    const handleChange = e => {
        updatedPost({ title: e.target.value })
    }
    return (
        <div>
            EditSinglepost
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="title" name='title' onChange={handleChange} />
                <input type='submit' value="Confirm" />
            </form>
            <div>
                {!load ? (<div style={{ color: 'green' }}> newTitle :{State && State.title} </div>) : null}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    State: state.posts.singlePost,
    load: state.posts.loading
})
const mapDispatchToProps = dispatch => ({
    EditPost: (title) => dispatch(EditPost(title))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditSinglePost)