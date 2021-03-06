import MainLayout from 'components/layouts/main-layout';
import { postsPath } from 'helpers/routes';
import initialLoad from 'helpers/initialLoad';
import PostsContainer from 'components/widgets/posts-container';
import PostContainer from 'components/widgets/post-container';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts({ page: query.page }));
  }
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    return store.dispatch(fetchPost(params.id));
  }
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};
