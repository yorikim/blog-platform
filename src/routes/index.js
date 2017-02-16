import MainLayout from 'components/layouts/main-layout';

import BlogPage from 'components/widgets/blog-page';

const Index = {
  path: '/',
  component: BlogPage
};

export default {
  component: MainLayout,
  childRoutes: [
    Index
  ]
};
