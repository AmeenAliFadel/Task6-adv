import { createSlice } from '@reduxjs/toolkit';
import { posts as staticPosts, type Post } from './data';

interface BlogState {
    posts: Post[];
    recentPosts: Post[];
    remainingPosts: Post[];
    lastThreePosts: Post[];
    currentPage: number;
    postsPerPage: number;
    currentPost: Post | null;
    relatedPosts: Post[];
}

const initialState: BlogState = {
    posts: staticPosts, // عبيها مباشرة
    recentPosts: staticPosts.slice(0, 4),
    remainingPosts: staticPosts.slice(4),
    lastThreePosts: staticPosts.slice(-3),
    currentPage: 1,
    postsPerPage: 6,
    currentPost: null,
    relatedPosts: [],
};

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setCurrentPost: (state, action) => {
            const postId = action.payload;
            const current = state.posts.find((p) => p.id === postId);

            state.currentPost = current || null;

            if (current) {
                state.relatedPosts = state.posts.filter(
                    (p) =>
                        p.id !== current.id &&
                        p.categories.some((cat) => current.categories.includes(cat))
                );
            } else {
                state.relatedPosts = [];
            }
        },
        // لو حابب تترك طريقة تحديث البوستات لو صار تغيير يدوي
        updatePosts: (state) => {
            state.recentPosts = state.posts.slice(0, 4);
            state.remainingPosts = state.posts.slice(4);
            state.lastThreePosts = state.posts.slice(-3);
        }
    }
});

export const { setCurrentPage, setCurrentPost, updatePosts } = blogSlice.actions;
export default blogSlice.reducer;
