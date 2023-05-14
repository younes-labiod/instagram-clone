const initialData = {
  profile: {
    avatar: require("../assets/instagram-clone-images/avatar.jpeg")
  },
  stories: [
    {
      id: 1,
      avatar: require("../assets/instagram-clone-images/avatar1.jpg"),
      name: 'Younes Labiod',
      isSeen: true,
    },

    {
      id: 2,
      avatar: require("../assets/instagram-clone-images/avatar2.jpg"),
      name: 'tommy girl',
      isSeen: false,
    },

    {
      id: 3,
      avatar: require("../assets/instagram-clone-images/avatar3.jpg"),
      name: 'ninja mertyle',
      isSeen: true
    },
  ],
  articles: [
    {
      id: 1,
      avatar: require("../assets/instagram-clone-images/avatar1.jpg"),
      name: 'Younes Labiod',
      image: require("../assets/instagram-clone-images/img1.jpg"),
      likes: 10,
      commentCount: 2,
      comments: 'View all 0 comments'
    },
    {
      id: 2,
      avatar: require("../assets/instagram-clone-images/avatar2.jpg"),
      name: 'tommy girl',
      image: require("../assets/instagram-clone-images/img2.jpg"),
      likes: 3,
      commentCount: 200,
      comments: 'View all 0 comments'
    },
    {
      id: 3,
      avatar: require("../assets/instagram-clone-images/avatar3.jpg"),
      name: 'ninja mertyle',
      image: require("../assets/instagram-clone-images/img3.jpg"),
      likes: 34,
      commentCount: 5,
      comments: 'View all 0 comments'
    },
    {
      id: 4,
      avatar: require("../assets/instagram-clone-images/avatar2.jpg"),
      name: 'britney pears',
      image: require("../assets/instagram-clone-images/img4.jpg"),
      likes: 50,
      commentCount: 665,
      comments: 'View all 0 comments'
    },
  ],
}

const data = {
  ...initialData,
  articles: initialData.articles.map(article => {
    return {
      ...article,
      comments: `View all ${article.commentCount} comments`
    }
  })
}

export default data;