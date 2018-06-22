import butter from "./config";

export const getPost = async slug => {
  try {
    const { data: post } = await butter.post.retrieve(slug);
    return post;
  } catch (e) {
    console.error(e);
  }
};

export const fetchPosts = async () => {
  try {
    // eslint-disable-next-line
    const {
      data: { data: blogPosts }
    } = await butter.post.list({
      page: 1,
      page_size: 10
    });
    return blogPosts;
  } catch (e) {
    console.error(e);
  }
};

export const fetchHeadline = async () => {
  butter.content.retrieve(["homepage_headline"]).then(res => {
    console.log("Headline from ButterCMS");
    console.log(res);
  });
};
