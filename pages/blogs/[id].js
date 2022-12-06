import { useRouter } from "next/router";
import styles from '../../styles/Blogs.module.css'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // map data to an array of path objects with params (id)
    const paths = data.map(blog => {
        return {
            params: { id: blog.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`http://localhost:8000/blogs/${id}`);
    const data = await res.json();

    return {
        props: { blog: data }
    }
}

const Details = ({ blog }) => {
    const router =useRouter();
    const handleDelete = () =>{
        fetch(`http://localhost:8000/blogs/${blog.id}`,{
            method: 'DELETE'
        }).then(() => {
            router.push('/')
        })
    }
    return (
        <div>
            <h1>Blog Detail Page</h1>
            {blog && (
                <article className={styles.blogdetails}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default Details;