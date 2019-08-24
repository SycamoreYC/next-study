// import Header from '../components/Header';
// import Layout from '../components/MyLayout';
import withLayout from '../components/MyLayout';
import Link from 'next/link';
// const Index = () => (
//     <Layout>
//         <p>Hello Next.js</p>
//     </Layout>
// )

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Page = () => (
    <>
        <h1>My blog</h1>
        <ul>
            <PostLink title="Hello Next.js" />
            <PostLink title="Learn Next.js is awesome" />
            <PostLink title="Deploy apps with Zeit" />
        </ul>
    </>
);
export default withLayout(Page);