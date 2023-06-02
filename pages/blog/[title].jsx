import { useRouter } from 'next/router';
import Treading from '.././Treading';
import { data } from '../../data';
import Image from 'next/image'

const BlogPost = () => {
  const router = useRouter();
  const { title } = router.query; 
  const handleGoBack = () => {
    router.back(); //back
  }
  const blogPost = data.find((post) => post.title === title);

  if (!blogPost) {

    return <p>Blog post not found.</p>;
  
  }
  return (
    <>
      <div className="text-black mt-16 px-5 md:px-40 flex flex-col gap-4">
        <p className="blogcetegory text-xl font-medium border-b-2 border-black px-2 w-1/2 w-fit">
          Action
        </p>
        <p className="blogtitle text-3xl font-bold">{blogPost.title}</p>
        <div className="blogdetails flex justify-between text-1xl font-semibold">
          <div className="flex flex-col gap-1">
            <p className="postby">By {blogPost.postBy}</p>
            <p className="publishdate">Published on {blogPost.postDate}</p>
          </div>
          <div className="share">Share</div>
        </div>
        <div className='flex justify-center'>
        <Image
        src={blogPost.image}
      alt="Landscape picture"
      width={600}
      height={500}
    />
          {/* <img src={blogPost.image} alt="" /> */}
        </div>
        <div className="blogpost h-fit text-xl leading-normal md:text-lg md:tracking-wider mb-5">
          {blogPost.post}
        </div>
      </div>
      <Treading />
      <button
        onClick={handleGoBack}
        className="back-button text-2xl uppercase text-center w-screen mb-8"
      >
        Back
      </button>
    </>
  );
};

export default BlogPost;
