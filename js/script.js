/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const studentList = document.querySelector('.student-list')[0];
const studentItem = studentList.children;
const studentsPerPage = 10;



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage ( list, page) {
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = page * studentsPerPage;
   for ( let i = 0; i < list.length; i++){
      if( i >= startIndex && i < endIndex){
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
}



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks (list) {
   const totalStudents = studentItem.length;
   const totalPages = Math.ceil(totalStudents/studentsPerPage);
   const paginationDiv = document.createElement('div');
   paginationDiv.className = 'pagination';
   const mainPage = document.querySelector('.page');
   mainPage.appendChild(paginationDiv);
   const UL = document.createElement('ul');
   paginationDiv.appendChild(UL);
   const anchorList = document.querySelectorAll('a');
   for ( let i = 0; i < totalPages; i++){
      const LI = document.createElement('li');
      const A = document.createElement('a');
      A.href = '#';
      A.textContent = i + 1;
      UL.appendChild(LI);
      LI.appendChild(A);
       A.addEventListener ('click', (e) => {
          for( let i = 0; i < anchorList.length; i++){
             anchorList[i].className = '';
             e.target.className = 'active';
          }
          return showPage (studentItem, i);
       });
   }
   anchorList[0].className = 'active';
} 
showPage (studentItem, 0);
appendPageLinks();



// Remember to delete the comments that came with this file, and replace them with your own code comments.