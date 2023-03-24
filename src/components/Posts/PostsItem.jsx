import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { cutString } from "../../helpers/cut-string";
import image from "./default_image.png";

// const post = {
//   "source": {
//   "id": null,
//   "name": "Lifehacker.com"
//   },
//   "author": "Jake Peterson",
//   "title": "ChatGPT Created Its Own Puzzle Game, and You Can Play It Right Now",
//   "description": "ChatGPT can do just about anything. It can write you a horror story about a killer clove of garlic, identify issues with your computer code, and teach you how to pronounce words in another language. It can also create new games out of thin air, and you can tr…",
//   "url": "https://lifehacker.com/chatgpt-created-its-own-puzzle-game-and-you-can-play-i-1850207733",
//   "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/1eb5a526f09d90e8a033953e2117a360.jpg",
//   "publishedAt": "2023-03-09T19:00:00Z",
//   "content": "ChatGPT can do just about anything. It can write you a horror story about a killer clove of garlic, identify issues with your computer code, and teach you how to pronounce words in another language. … [+2200 chars]"
//   }

// const post = {
//   id: 56,
//   title: "11 Amazing New JavaScript Features in ES13",
//   content: `Discover which loop or iterator suits your needs and prevent silly mistakes that hurt app performance.
//         In web development, JavaScript is the new sensation. It is not just JS frameworks like NodeJS, React, Angular Vue, etc, vanilla JS also has a large fan base. Now let’s talk about modern JavaScript. Almost every programming language uses loops. The modern JS language gives you a great deal of flexibility when it comes to iterating over values.
//         The question is, do you know which loop or iteration fits your needs best. A variety of options are available in for loops, including for , for(reverse), for…of , foreach , for…in , and for…await . The article presents one such debate.`,
//   image:
//     "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
//   views: 1,
//   preview_image:
//     "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
//   created_at: "2022-08-09T22:26:17.837322+00:00",
//   updated_at: null,
// };

export const PostsItem = ({ post }) => {
  return (
    <div className="col-12 col-xl-6 col-xxl-4 mb-4">
      <div className="card">
        <img
          height="250px"
          alt={post.title}
          src={post?.urlToImage || image}
          className="card-img-top"
          style={{ objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>

          <p className="card-text">{cutString(post.content, 60)}</p>

          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item">{post.author}</li>
            <li className="list-group-item">
              Created: {formatDistanceToNow(new Date(post.publishedAt))}
            </li>
          </ul>

          <div className="d-flex">
            <button type="button" className="btn btn-danger">
              Delete post
            </button>

            <a href={`/posts/${post.id}`} className="btn btn-primary ms-3">
              Read post
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
