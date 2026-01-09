var posts=["posts/3969.html","posts/d4c1.html","posts/1446.html","posts/fb4c.html","posts/d581.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };