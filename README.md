With React, I am creating a move searcher that will fetch the movies and show them in my website.

Commit 1:

Searcher is functional but still not fetching from the API.

Commit 2:

Searcher is showing results fetching from the OMDb Api.

Commit 3:

Components added and layout improved


Commit 4:

Bugs fixed. Now if the search can't find a result doesn't return an error because of the value of not found being 'undefined'.
Now it returns a message because we get the result in search and make it an array by default, and totalResults a '0'. 

Commit 5: 

Created routes and added a Homepage. 

Commit 6: 

Using React Router, now we have an SPA. 

Commit 7: 

Page 404 inserted using React Router. When it doesn't detect one of the used routes, it returns the 404.
Also improved Back to homepage button. 
