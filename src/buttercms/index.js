import butter from "./config";

export async function getPost(slug) {
  try {
    const { data: post } = await butter.post.retrieve(slug);
    return post;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchPosts() {
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
}

export async function fetchHeadline() {
  butter.content.retrieve(["homepage_headline"]).then(res => {
    console.log("Headline from ButterCMS");
    console.log(res);
  });
}
