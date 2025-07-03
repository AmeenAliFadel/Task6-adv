import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/blogSlice';
import type { RootState } from '../../redux/store';
import leftArrow from '../../assets/arrow-left.svg';
import leftArrowDark from '../../assets/arrow-left-dark.svg';
import rightArrow from '../../assets/arrow-right.svg';
import rightArrowDark from '../../assets/arrow-right-dark.svg';
import { useContext } from 'react';
import { ThemeContext } from '../Layout/Layout';
const Pagination = () => {
    const { isDark } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const { currentPage, posts, postsPerPage } = useSelector((state: RootState) => state.blog);

    const totalPosts = posts.length - 4;
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const pageNumbers = [];

    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else {
        if (currentPage <= 3) {
            pageNumbers.push(1, 2, 3, 4, '...', totalPages);
        } else if (currentPage >= totalPages - 2) {
            pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
        } else {
            pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
        }
    }

    const handlePageClick = (page: number | string) => {
        if (typeof page === 'number') {
            dispatch(setCurrentPage(page));
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) dispatch(setCurrentPage(currentPage + 1));
    };

    const handlePrev = () => {
        if (currentPage > 1) dispatch(setCurrentPage(currentPage - 1));
    };

    return (
        <div className="flex justify-between items-center mt-10 gap-2">
            <button onClick={handlePrev} className="flex items-center gap-1 text-color4 dark:text-white hover:text-gray-500 disabled:opacity-50" disabled={currentPage === 1}>
                <span><img src={isDark? leftArrowDark : leftArrow} alt="" /></span> Previous
            </button>
            <div>
                {pageNumbers.map((page, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageClick(page)}
                        className={`w-10 h-10 rounded-lg text-sm ${page === currentPage
                                ? 'bg-purple-100 font-bold'
                                : 'text-gray-500 hover:text-color3'
                            }`}
                        disabled={page === '...'}
                    >
                        {page}
                    </button>
                ))}
            </div>


            <button onClick={handleNext} className="flex items-center gap-1 text-color4 dark:text-white hover:text-gray-500 disabled:opacity-50" disabled={currentPage === totalPages}>
                Next <span><img src={isDark? rightArrowDark : rightArrow} alt="" /></span>
            </button>
        </div>
    );
};

export default Pagination;
