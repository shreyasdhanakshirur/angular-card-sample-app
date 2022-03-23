## Scripts

### Task

Create an Angular Project and reproduce as closely as possible the search result cards design below. The display must be responsive. The number of cards displayed should decrease or increase depending on the screen width.
Use the Festo LX public search REST API documented below to get real data. Use appropriate input fields to set the search term, page number, result size and sort order of the request.

** BONUS **: Display the detailed information of the course (description for example) in a new detail page or a popup from the “Show More” button. (No particular restriction)

### Evaluation criteria

- Code quality (Clean Code).
- Design accuracy.

### Design of the result card

![Design lesson cards](CardsDesign.jpg)

### Search API

The search API is available through the REST API at the following address:

`GET https://lx.festo.com/SearchService/api/search/learning-paths/public`

**Settings :**
- q (string): the searched text (default "")
- page (number): results page (default 1)
- size (number): number of results (default 20)
- sortOrder (number): sort value (MostRelevant default)
    - MostRelevant = 1
    - Popularity = 2
    - MostRecent = 3
    - Oldest = 4

For example :
`https://lx.festo.com/SearchService/api/search/learning-paths/public?q=motor&page=1&size=20&sortOrder=1`

The model corresponding to the return of the web service is already in the project under:
`CourseSearchResultList.ts`

**IMPORTANT: Note that we don't allow `localhost:*` in the `Access-Control-Allow-Origin` response headers of `lx.festo.com`, so you'll have to bypass the CORS. You can easily deal with this issue by installing a web browser plugin or using a proxy like `https://thingproxy.freeboard.io/fetch/**`
