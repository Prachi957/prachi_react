import React, {useEffect, useState} from 'react'
import {Container, PostForm} from '../components'
import appwriteService from "../appwrite/configure";
import { useNavigate,  useParams } from 'react-router-dom';

function EditPost() {

    const [post, setPosts] = useState(null)
    const {slug} = useParams()
    console.log("🔎 Slug param:", slug);

    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    console.log("Post loaded in EditPost:", post); 
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm key={post?.$updatedAt} post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost