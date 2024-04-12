# React frontend for HEADLESS (horseman) WORDPRESS 
### I've had a Word Press artist portfolio for 10 years with a custom theme. It's busted with current php 8. I was thinking of starting from scratch, but read that you can use wordpress as an API, so the new challenge will be to use what I have to build the site. Notes here. 

# Can I do this with my WP

- Yes! Put in your URL and then...   
- wp-json
- /wp-json/wp/v2
- etc. I'm still figuring this out
- Decoupling front end from back end means better security

# Structure

- Previously artwork series were saved with categories and tags using posts
- NOW: remake pages
- Add db field to images to put a page name they should get pulled into. 
- Less reliant on a patchwork of plugins and themes from external parties in the Wordpress universe
- BASE_URL in .env if necessary to help with future implementations on different DBs 

# Design

- Super excited to have so much control over the design!
- Google Fonts here we go
- Drop in the newer Google stats stuff

# Notes

### Examining the API --> How do I get the pages?
- I'm basing the front end off of pages, so I'm checking this out first: https://nickgolebiewski.com/wp-json/wp/v2/pages
- OK, I see that there's pages. I'll definitely need the unique id for each
- The pages at the top level have parent: 0
- Sub pages have parent: <id>
- Do we need sub-sub pages?
- The code to generate the menus and nav will reflect the parent and their children at two levels. 
  - If parent===0 top level menu and generate routes. 
  - If parent = one of ids on top level put in sub cat and make routes.
- When I first pull this data, I think I'll store it in a state that can be accessed throughout the project, so THUNK it in REDUX

### Examining the API --> How do I get the images?
- Will pull these in looking for the custom field "art_series" that will align with the page names. It doesn't work!
- Could get buggy since reliant on human tagging.
- What fields to get? Look up https://developer.wordpress.org/rest-api/reference/media/
  - source_url
  - description
  - media_type --> image or file
  - caption
  - alt_text
  - title
  - id
  - link   ?
- https://nickgolebiewski.com/wp-json/wp/v2/media/
- https://nickgolebiewski.com/wp-json/wp/v2/media?search=street-vendors&per_page=100  
- in the link above replace "street-vendors" with the name of the page.
- https://nickgolebiewski.com/wp-json/wp/v2/media?media_type=image&per_page=100
- 100 is the max number you can retrieve. Therefore 
  -OK, via just the API, you can search on text in the description or caption, i.e. "street-vendors" but NOT in the alt_text. The latter would need to be a filter from the front-end, which might just be totally OK. Since it would mean querying the database once, and then sorting out client-side, which would be blazing fast for a small app/db, but slow for something bigger.

### Fonts
- Using Google Fonts, I need to allow for Cross-Origin Resource Sharing to access the fonts from my shared server setup.
`<IfModule mod_headers.c>
    <FilesMatch "\.(ttf|otf|eot|woff|woff2)$">
        Header set Access-Control-Allow-Origin "https://fonts.gstatic.com"
    </FilesMatch>
</IfModule>
`
- Alternatively I could download the fonts and add them through @fontface in CSS.


Cheers,
Nick

