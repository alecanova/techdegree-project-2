/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Selecting two global variables
const students = document.querySelectorAll('.student-item');
const studentsPerPage = 10;

/**
Creating the 'showPage' function to hide all of the items in the 
   list except for the ten you want to show.
**/   
const showPage = ( list, page) => {
// Establishing a startIndex and an endIndex to restrict the number of students in a page.
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = page * studentsPerPage;
// Looping through the 'list' of students to display just the choosen quantity and hide the rest.
   for ( let i = 0; i < list.length; i++){
      if( i >= startIndex && i < endIndex){
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
}

/**
   Creating the 'appendPageLinks' function to generate, append, and add 
   functionality to the pagination buttons.
**/
const appendPageList = (list) => {
// Calcultaing the amount of pages needed (list.length = 54; studentsPerPage = 10;). The result will be rounded up.
   const totalPages = Math.ceil(list.length / studentsPerPage);
// Generating and appending 'div' and 'ul' elements.
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';
   const pageDiv = document.querySelector('.page');
   pageDiv.appendChild(paginationDiv);
   const UL = document.createElement('ul');
   paginationDiv.appendChild(UL);
// Looping through the totalPages to create 'li' and 'a' elements with the variable starting point set to 1.
   for ( let i = 1; i <= totalPages; i++){
      const LI = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = '#';
      anchor.textContent = [i];
      UL.appendChild(LI);
      LI.appendChild(anchor);
   // Setting the class of the first page anchor to 'active'.
      if (anchor.textContent == 1) {
         anchor.className = 'active';
         }
   // Adding a 'click' event to the anchor.
         anchor.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(list, i);
   // Adding and removing the 'active' class when is clicked.
            document.querySelector('a.active').classList.remove('active');
            const clickedAnchor = event.target;
            clickedAnchor.classList.add('active');
         })
     }
      
}

// Calling the 'showPage' function at page 1.
showPage (students, 1);
// Calling the 'appendPageList' function.
appendPageList (students);

