import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';
import PostCard from './PostCard';
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow.svg'
import arrowDark from '../../assets/arrowDark.svg'
import { useContext } from 'react';
import { ThemeContext } from '../Layout/Layout';
import Pagination from '../Pagination/Pagination';
import type { AppDispatch } from '../../redux/store';
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
export const useAppDispatch = () => useDispatch<AppDispatch>()
const HomePage = () => {
    const { recentPosts, remainingPosts, currentPage, postsPerPage } = useSelector((state: RootState) => state.blog);
    const { isDark } = useContext(ThemeContext);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = remainingPosts.slice(indexOfFirstPost, indexOfLastPost);
    if (recentPosts.length === 0) {
        return <div>Loading posts...</div>;
    }
    return (
        <div className=" mx-auto py-4">
            {/* Recent Blog Posts */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold mb-4 text-color1 dark:text-white">Recent blog posts</h2>
                <div className="flex justify-between flex-col xl:flex-row gap-8">
                    {/* 0 */}
                    <div className="w-[100%] xl:w-[50%]">
                        <div className="bg-white dark:bg-color2 rounded-lg  hover:shadow-xl transform hover:!-translate-y-1 !transition duration-400 ease-in-out cursor-pointer">
                            <img src={recentPosts[0].mainImage} alt={recentPosts[0].title} className="w-full object-cover rounded-t-lg" />
                            <div className="p-4">
                                <p className="text-sm 2xl:text-xl text-color3">{recentPosts[0].author} • {recentPosts[0].date}</p>
                                <h3 className="text-lg 2xl:text-3xl font-semibold mb-2 flex justify-between items-end text-color1 dark:text-white">
                                    {recentPosts[0].title}
                                    <Link to={`/blogdetails/${recentPosts[0].id}`} className="text-blue-500 text-sm mt-2 inline-block">
                                        <img src={isDark ? arrowDark : arrow} alt="" />
                                    </Link>
                                </h3>
                                <p className="font-normal text-base 2xl:text-2xl text-color4 dark:text-color5 mb-6">{recentPosts[0].desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {recentPosts[0].categories.map((category, index) => (
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
                    </div>

                    {/* 1 2 */}
                    <div className="w-[100%] xl:w-[50%] flex flex-col gap-8">
                        {recentPosts.slice(1, 3).map(post => (
                            <div

                                key={post.id}
                                className="flex bg-white dark:bg-color2 rounded-lg  hover:shadow-xl transform hover:!-translate-y-1 !transition duration-400 ease-in-out cursor-pointer flex-col md:flex-row"
                            >
                                <img
                                    src={post.mainImage}
                                    alt={post.title}
                                    className="w-full md:w-[50%] object-cover min-h-[200px] rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
                                />
                                <div className="p-4">
                                    <p className="text-sm 2xl:text-xl text-color3 font-semibold">
                                        {post.author} • {post.date}
                                    </p>
                                    <h3 className="text-lg 2xl:text-3xl font-semibold mb-2 flex justify-between items-end text-color1 dark:text-white">
                                        {post.title}
                                        <Link to={`/blogdetails/${post.id}`} className="text-blue-500 text-sm mt-2 inline-block">
                                            <img src={isDark ? arrowDark : arrow} alt="" />
                                        </Link>
                                    </h3>
                                    <p className="font-normal text-base 2xl:text-2xl text-color4 dark:text-color5 mb-6">
                                        {post.desc}
                                    </p>
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
                        ))}
                    </div>
                </div>

                {/* 3 */}
                <div className="flex bg-white dark:bg-color2 rounded-lg  hover:shadow-xl transform hover:!-translate-y-1 !transition duration-400 ease-in-out cursor-pointer flex-col lg:flex-row mt-[60px]">
                    <img src={recentPosts[3].mainImage} alt={recentPosts[3].title} className="w-full lg:w-[50%]  object-cover rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg" />
                    <div className="p-4 w-full lg:w-[50%]">
                        <p className="text-sm 2xl:text-xl text-color3 font-semibold">{recentPosts[3].author} • {recentPosts[3].date}</p>
                        <h3 className="text-lg 2xl:text-3xl font-semibold mb-2 flex justify-between items-end text-color1 dark:text-white">
                            {recentPosts[3].title}
                            <Link to={`/blogdetails/${recentPosts[3].id}`} className="text-blue-500 text-sm mt-2 inline-block">
                                <img src={isDark ? arrowDark : arrow} alt="" />
                            </Link>
                        </h3>
                        <p className="font-normal text-base 2xl:text-2xl text-color4 dark:text-color5 mb-6">{recentPosts[3].desc}</p>
                        <div className="flex flex-wrap gap-2">
                            {recentPosts[3].categories.map((category, index) => (
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
            </section>


            {/* All Blog Posts */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-color1 dark:text-white">All blog posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentPosts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
                <Pagination />
            </section>
        </div>
    );
};

export default HomePage;
