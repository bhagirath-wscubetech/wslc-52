import BlogBox from "./Components/BlogBox";
import Container from "./Components/Container"
import Blogs from "./Data/blog"
function App() {
  const BlogList = Blogs.map(
    (Blog) => {
      return (
        <BlogBox key={`Blog ${Blog.id}`} title={Blog.title} short={Blog.short} image={Blog.image} link={`/${Blog.slug}`} />
      )
    }
  )
  return (
    <>
      <Container>
        {BlogList}
        {/* <BlogBox title={Blogs[0].title} image={Blogs[0].image} />
        <BlogBox title={Blogs[1].title} image={Blogs[1].image} />
        <BlogBox title={Blogs[2].title} image={Blogs[2].image} />
        <BlogBox title={Blogs[3].title} image={Blogs[3].image} /> */}
      </Container>
    </>
  );
}

export default App;
