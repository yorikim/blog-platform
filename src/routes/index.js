import MainLayout from 'components/layouts/main-layout';
import {postsPath} from 'helpers/routes';
import BlogPage from 'components/widgets/blog-page';
import Post from 'components/widgets/post';

const Index = {
  path: '/',
  component: BlogPage
};

const PostRoute = {
  path: postsPath(),
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};
