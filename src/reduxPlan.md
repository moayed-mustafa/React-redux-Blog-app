# Redux Game Plan:-

## My state at the moment is one blogs list where I'm listing the blogs
### I do the following operations on my state: -

- Add Blogs
- Remove Blogs
- Edit Blogs
- Add comments to a blog
- Remove comment from a blog
- why am I not adding editing comments on a blog? I should


 ## This is done by passing down the state and the function to set state using Context


  ## How to move this to redux based?

   - Start by creating your reducres, you will need two reducers, one for blogs, one for comments.
   - create the store and wrap it around your App component on index.js
   - using the use selector hook, select the state where you are needing it.
   - dispatch actions
