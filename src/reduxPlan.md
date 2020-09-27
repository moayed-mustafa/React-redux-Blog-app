# Using REdux Thunk plan

 - How my comments are going to work

 - I have a seperate data store for comments
 - the way my FE works atthe moment is that I store an empty list when adding a blog post
 - this is ok, however it's propblematic because when I load the homepage, I want all my blog posts
 - to show up, and to be able to click on them and be taken to the blog and show it with it's comments.
 - to achieve that, I'll need to fetch both data and  comments the first time around, and change the actionCreator
 - a little to be able to add the comments as well
 - this will make it easier for me working with comments later on