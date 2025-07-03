import React from 'react';
import type { Post } from '../../redux/data';
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow.svg'
import arrowDark from '../../assets/arrowDark.svg'
import { useContext } from 'react';
import { ThemeContext } from '../Layout/Layout';
interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const { isDark } = useContext(ThemeContext);

    return (
        <div className="flex justify-between items-center flex-col bg-white dark:bg-color2 rounded-lg  hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer">
            <img src={post.mainImage} alt={post.title} className="w-full h-[200px] object-cover rounded-t-lg" />
            <div className="p-4">
                <p className="text-sm text-color3">{post.author} • {post.date}</p>
                <h3 className="text-lg font-semibold mb-2 flex justify-between items-end text-color1 dark:text-white">
                    {post.title}
                    <Link to={`/blogdetails/${post.id}`} className="text-blue-500 text-sm mt-2 inline-block">
                        <img src={isDark ? arrowDark : arrow} alt="" />
                    </Link>
                </h3>
                <p className='font-normal text-base text-color4 dark:text-color5 mb-6'>{post.desc}</p>
                <div className="flex flex-wrap gap-2">
                    {post.categories.map((category, index) => (
                        <span key={index} className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">
                            {category}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostCard;
