import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../redux/store";
import { setCurrentPost } from "../../redux/blogSlice";
import PostCard from "../../components/HomePage/PostCard";
import Form from "../../components/Form/Form";

export default function BlogDetails() {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();

  const posts = useSelector((state: RootState) => state.blog.posts);
  const post = useSelector((state: RootState) => state.blog.currentPost);
  const relatedPosts = useSelector((state: RootState) => state.blog.relatedPosts);

  useEffect(() => {
    if (id && posts.length > 0) {
      dispatch(setCurrentPost(Number(id)));
    }
  }, [id, posts.length, dispatch]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="w-[95.20%] mx-auto">
      <div className="flex flex-col-reverse md:flex-row gap-8 mt-[72px] md:mt-[100px] 2xl:mt-[99px]">
        <div className="w-[100%] md:w-[41%] lg:w-[23.75%]">
          <h2 className="text-lg font-semibold text-color1 dark:text-white mb-4">Recent blog posts</h2>
          <div className="space-y-4">
            {relatedPosts.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </div>
        <div className="flex-1 w-[100%] md:w-[412px] lg:w-[54.02%]">
          <p className="text-color3 font-semibold mb-2">
            {post.author} • {post.date}
          </p>
          <h1 className="text-4xl text-color1 dark:text-white font-bold mb-4">
            {post.title}
          </h1>
          {post.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <img src={section.image} alt={`Section ${index}`} className="w-full mb-2" />
              {Object.values(section).map((text, idx) =>
                idx === 0 ? null : (
                  <p key={idx} className="text-base 2xl:text-2xl mb-2 text-color4 dark:text-color5">{text}</p>
                )
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center 2xl:justify-center lg:justify-end items-center">
        <Form />
      </div>
    </div>
  );
}
