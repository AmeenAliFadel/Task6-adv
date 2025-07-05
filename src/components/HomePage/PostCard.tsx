import { useContext } from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '../../redux/data';
import arrow from '../../assets/arrow.svg';
import arrowDark from '../../assets/arrowDark.svg';
import { ThemeContext } from '../Layout/Layout';

const getCategoryClasses = (category: string): string => {
    switch (category) {
        case "Design":
            return "bg-[#F0F9FF] text-[#026AA2]";
        case "Research":
            return "bg-[#FDF2FA] text-[#C11574]";
        case "Presentation":
            return "bg-[#FDF2FA] text-[#C11574]";
        case "Leadership":
            return "bg-[#F9F5FF] text-[#6941C6]";
        case "Management":
            return "bg-[#F8F9FC] text-[#363F72]";
        case "Product":
            return "bg-[#F0F9FF] text-[#026AA2]";
        case "Frameworks":
            return "bg-[#FFF6ED] text-[#C4320A]";
        case "Interface":
            return "bg-[#FDF2FA] text-[#C11574]";
        case "Software Development":
            return "bg-[#ECFDF3] text-[#027A48]";
        case "Tools":
            return "bg-[#FDF2FA] text-[#C11574]";
        case "SaaS":
            return "bg-[#FFF1F3] text-[#C01048]";
        case "Podcasts":
            return "bg-[#F9F5FF] text-[#6941C6]";
        case "Customer Success":
            return "bg-[#F8F9FC] text-[#363F72]";
        default:
            return "bg-[#F0F9FF] text-[#026AA2]";
    }
};

function PostCard({ post }: { post: Post }) {
    const { isDark } = useContext(ThemeContext);

    return (
        <div className="flex justify-between items-center flex-col bg-white dark:bg-color2 rounded-lg hover:shadow-xl transform hover:!-translate-y-1 !transition duration-400 ease-in-out cursor-pointer">
            <img src={post.mainImage} alt={post.title} className="w-full h-[200px] object-cover rounded-t-lg" />
            <div className="p-4">
                <p className="text-sm text-color3">{post.author} • {post.date}</p>
                <h3 className="text-lg font-semibold mb-2 flex justify-between items-end text-color1 dark:text-white">
                    {post.title}
                    <Link to={`/blogdetails/${post.id}`} className="text-blue-500 text-sm mt-2 inline-block">
                        <img src={isDark ? arrowDark : arrow} alt="" />
                    </Link>
                </h3>
                <p className="font-normal text-base text-color4 dark:text-color5 mb-6">{post.desc}</p>
                <div className="flex flex-wrap gap-2">
                    {post.categories.map((category, index) => (
                        <span
                            key={index}
                            className={`text-sm rounded-2xl px-2.5 py-0.5  ${getCategoryClasses(category)}`}
                        >
                            {category}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PostCard;
