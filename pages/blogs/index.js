import styles from '../../styles/Blogs.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:8000/blogs');
    const data = await res.json();

    return {
        props: { blogs: data }
    }
}
const Blogs = ({ blogs }) => {
    return (
        <div>
            <h1>All Blogs</h1>
            {blogs.map(blog => (
                <div className={styles.blogpreview} key={blog.id}>
                    <Link href={'/blogs/' + blog.id} >
                        <a className={styles.single}>
                            <h3>{blog.title}</h3>
                            <p>Written by {blog.author}</p>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Blogs;