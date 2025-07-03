
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import PostCard from '../../components/HomePage/PostCard';
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default function Newsletter() {
  const { lastThreePosts } = useSelector((state: RootState) => state.blog);

  if (lastThreePosts.length === 0) {
    return <div>Loading posts...</div>;
  }
  return (
    <>
      <div className='  '>
        <div className=" mt-[80px] md:mt-[100px] flex flex-col justify-center items-center  py-[30px]">
          <span className="  font-semibold text-base text-[#7F56D9]">Newlatters</span>
          <h1 className=" text-center font-semibold text-5xl text-color1 dark:text-white mt-3">Stories and interviews</h1>
          <p className="font-normal text-center text-xl text-color4 dark:text-color5 mt-6 max-w-3xl mx-auto">
            Subscribe to learn about new product features, the latest in technology, solutions, and updates.
          </p>
          <form className="mt-[40px] w-full max-w-[494px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white w-full max-w-[360px]  text-color4 border border-[#D0D5DD] px-3.5 py-3 me-4 rounded-lg"
            />
            <input type="submit" value="Subscribe" className=" mt-3 md:mt-0 bg-[#7F56D9] text-white px-5 py-3 rounded-lg" />
            <span className=" text-left block text-color4 font-normal text-sm mt-2">We care about your data in our privacy policy</span>
          </form>
        </div>
        <div >
          <h2 className="text-2xl font-semibold mb-4 text-color1 dark:text-white">Recent blog posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-6">
            {lastThreePosts.map((post, index) => (
              <div
                key={post.id}
                className={`
                ${index === 2 ? 'md:col-span-2 md:row-start-2 md:col-start-1  lg:col-auto lg:row-auto' : ''}
                `}
              >
                <PostCard post={post} />
              </div>
            ))}
          </div>


        </div>
      </div>

    </>
  )
}
