# Pagination

Numbered navigation for viewing pages. Always showing first, last and the two closest to the active page.

## How to use

User have to manually changed the totalPages variable to the amount of pages desired in the js file. Copy the whole pagination <div> into the HTML file.

## Design decisions

Showing just the right amount of info without showing to little, to not get a cluttered look. Therfore using two ellipsis to alway be able to easaly go to the first and at the same time se the next and previous number.
Using only arrows for buttons, no text for tidyness.
Active page is higlighted.


## Known limitations

There is no items per page function.
The component does not change any page, but puts an .active class on the current page. 
The currentPage is not stored if paage is reloaded.