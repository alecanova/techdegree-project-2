/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination by Alessandro Canova
******************************************/

// Selecting global variables
const students = document.querySelectorAll('.student-item');
const studentsPerPage = 10;
const pageDiv = document.querySelector('.page');
const pageHeader = document.querySelector('.page-header');
const paginationDiv = document.createElement('div');
paginationDiv.className = 'pagination';
pageDiv.appendChild(paginationDiv);
// Creating a 'div' element to store the message 'No results'.
const noResultsMessage = document.createElement('div');

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
// Generating and appending 'ul' element.
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

const searchResult = (searchInput) => {
   const studentSearched = searchInput.value;
   const studentNames = document.querySelectorAll('h3');
   const matchStudent = [];
   paginationDiv.innerHTML = '';
   for ( let i = 0; i < students.length; i++) {
      students[i].style.display = 'none';
   }
   for ( let i = 0; i < studentNames; i++){
      if ( studentNames.textContent.toLowerCase().includes( studentSearched.toLowerCase() ) ) {
         const studentInfo = studentNames[i].parentNode.parentNode;
         matchStudent.push(studentInfo);
      }
   }
   if ( matchStudent.length > 0) {
      showPage ( matchStudent, 1);
      appendPageList ( matchStudent);
      document.querySelector('a').classList = 'active';
      noResultsMessage.innerHTML = '';
      paginationDiv.style.display = '';   
   } else {
      noResultsMessage.innerHTML = '<p>No results.</p>';
      paginationDiv.style.display = 'none';
   }
} 

/**
Creating the 'searchBar' function 
**/   
const searchBar = () => {
// Creating and appending 'Search bar' elements.
   const searchBarDiv = document.createElement('div');
   searchBarDiv.className = 'student-search';
   pageHeader.appendChild(searchBarDiv);
   const input = document.createElement('input');
   input.placeholder = 'Search for students...';
   searchBarDiv.appendChild(input);
   const searchButton = document.createElement('button');
   searchButton.textContent = 'Search';
   searchBarDiv.appendChild(searchButton);

   searchButton.addEventListener ('click', () => {
      searchResult ( searchInput);
   });
   input.addEventListener ('keyup', () => {
      searchResult ( searchInput);
   });
}


// Calling the 'showPage' function at page 1.
showPage (students, 1);
// Calling the 'appendPageList' function.
appendPageList (students);
// Calling the 'searchBar' function.
searchBar();


