
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../redux/store';
import PostCard from '../../components/HomePage/PostCard';
import Form from '../../components/Form/Form';
export const useAppDispatch = () => useDispatch<AppDispatch>()
export default function Newsletter() {
  const { lastThreePosts } = useSelector((state: RootState) => state.blog);

  if (lastThreePosts.length === 0) {
    return <div>Loading posts...</div>;
  }
  return (
    <>
      <div className=' w-[100%] mt-[80px] md:mt-[100px]  '>
        <Form />
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
