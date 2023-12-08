function myFunction(){
    var subjectObject = {
        "BCA": {
          "1st Year": ["I", "II"],
          "2nd Year": ["III", "IV"],
          "3rd Year": ["V", "VI"]    
        },
        "BCS": {
          "1st Year": ["I", "II"],
          "2nd Year": ["III", "IV"],
          "3rd Year": ["V", "VI"]    
        },
        "BT": {
          "1st Year": ["I", "II"],
          "2nd Year": ["III", "IV"],
          "3rd Year": ["V", "VI"]    
        },
        "BI": {
          "1st Year": ["I", "II"],
          "2nd Year": ["III", "IV"],
          "3rd Year": ["V", "VI"]    
        }
      
      }
      window.onload = function() {
        var subjectSel = document.getElementById("course");
        var topicSel = document.getElementById("year");
        var chapterSel = document.getElementById("sem");
        for (var x in subjectObject) {
          subjectSel.options[subjectSel.options.length] = new Option(x, x);
        }
        subjectSel.onchange = function() {
          //empty Chapters- and Topics- dropdowns
          chapterSel.length = 1;
          topicSel.length = 1;
          //display correct values
          for (var y in subjectObject[this.value]) {
            topicSel.options[topicSel.options.length] = new Option(y, y);
          }
        }
        topicSel.onchange = function() {
          //empty Chapters dropdown
          chapterSel.length = 1;
          //display correct values
          var z = subjectObject[subjectSel.value][this.value];
          for (var i = 0; i < z.length; i++) {
            chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
          }
        }
      }
      function showsubject()
         {
             var course=document.getElementById('course').value;
             var year=document.getElementById('year').value;
             var sem=document.getElementById('sem').value;
             
             if(sem=="I")
             {
               if(course=="BCA")
               {
               document.getElementById('subject').innerHTML="<table class='table table-striped table-hover'><thead><tr><th scope='col'>Sr. no.</th><th scope='col'>SUBJECT</th><th>Code</th></tr></thead><tbody><tr><th scope='row'>1</th><td>C Programming</td><td>BCA-101</td></tr> <tr><th scope='row'>2</th><td>Office Automation</td><td>BCA-102</td></tr> <tr><th scope='row'>3</th><td>Fundamental of Computer Application</td><td>BCA-103</td></tr> <tr><th scope='row'>4</th><td> Element of Statistics</td><td>BCA-104</td></tr> <tr><th scope='row'>5</th><td>Communication Skills</td><td>BCA-105</td></tr> <tr><th scope='row'>6</th><td>Lab Course-1: C Programming</td><td>BCA-106</td></tr> <tr><th scope='row'>7</th><td>Lab Course-2: Office Automation</td><td>BCA-107</td></tr></tbody></table>";
                return false;
               }
               else if(course=="BCS")
               {
                document.getElementById('subject').innerHTML="<table class='table table-striped table-hover'><thead><tr><th scope='col'>Sr. no.</th><th scope='col'>SUBJECT</th><th>Code</th></tr></thead><tbody><tr><th scope='row'>1</th><td>Basic of Computer Science</td><td>BCS-101</td></tr> <tr><th scope='row'>2</th><td>Intro to Prog Lang using C-1</td><td>BCS-102</td></tr> <tr><th scope='row'>3</th><td>Web Technologies</td><td>BCS-103</td></tr> <tr><th scope='row'>4</th><td>Fundamental of Digital Electronics</td><td>BCS-104</td></tr> <tr><th scope='row'>5</th><td>Communication Skills-1</td><td>BCS-105</td></tr> <tr><th scope='row'>6</th><td>Lab Course-1: C Programming-1</td><td>BCS-106</td></tr> <tr><th scope='row'>7</th><td>Lab Course-2: Web Tech & O.A.</td><td>BCS-107</td></tr></tbody></table>";
                return false;
               }
               else
               {
                document.getElementById('subject').innerHTML="";
               }
             }
             else if(sem=="II")
             {
              if(course=="BCA")
              {
               document.getElementById('subject').innerHTML="<table class='table table-striped table-hover'><thead><tr><th scope='col'>Sr. no.</th><th scope='col'>SUBJECT</th><th>Code</th></tr></thead><tbody><tr><th scope='row'>1</th><td>Business Accounting with Tally</td><td>BCA-201</td></tr> <tr><th scope='row'>2</th><td>Organizational Behaviour</td><td>BCA-202</td></tr> <tr><th scope='row'>3</th><td>Web Technology</td><td>BCA-203</td></tr> <tr><th scope='row'>4</th><td>Web Technology</td><td>BCA-204</td></tr> <tr><th scope='row'>5</th><td>E-Commerce</td><td>BCA-205</td></tr> <tr><th scope='row'>6</th><td>Lab Course-3: Tally ERP9</td><td>BCA-206</td></tr> <tr><th scope='row'>7</th><td>Lab Course-4: Web Technology</td><td>BCA-207</td></tr></tbody></table>";
               return false;
              }
              else if(course=="BCS")
              {
               document.getElementById('subject').innerHTML="<table class='table table-striped table-hover'><thead><tr><th scope='col'>Sr. no.</th><th scope='col'>SUBJECT</th><th>Code</th></tr></thead><tbody><tr><th scope='row'>1</th><td>Operating System</td><td>BCS-201</td></tr> <tr><th scope='row'>2</th><td>Intro to Prog Lang using C-2</td><td>BCS-202</td></tr> <tr><th scope='row'>3</th><td>Data Management System</td><td>BCS-203</td></tr> <tr><th scope='row'>4</th><td>8085 Microprocessor</td><td>BCS-204</td></tr> <tr><th scope='row'>5</th><td>Communication Skills-2</td><td>BCS-205</td></tr> <tr><th scope='row'>6</th><td>Lab Course-3: C Programming-2</td><td>BCS-206</td></tr> <tr><th scope='row'>7</th><td>Lab Course-4: DBMS & DTP</td><td>BCS-207</td></tr></tbody></table>";
               return false;
              } 
             }
             else if(sem=="III")
             {
              if(course=="BCA")
              {
               document.getElementById('subject').innerHTML="<table class='table table-striped table-hover'><thead><tr><th scope='col'>Sr. no.</th><th scope='col'>SUBJECT</th><th>Code</th></tr></thead><tbody><tr><th scope='row'>1</th><td>Programming in C++</td><td>BCA-301</td></tr> <tr><th scope='row'>2</th><td>Operating System Concepts</td><td>BCA-302</td></tr> <tr><th scope='row'>3</th><td>Database Management System</td><td>BCA-303</td></tr> <tr><th scope='row'>4</th><td>Business Application and ERP</td><td>BCA-304</td></tr> <tr><th scope='row'>5</th><td>Numerical Aptitude</td><td>BCA-305</td></tr> <tr><th scope='row'>6</th><td>Lab Course-1: C++ Programming</td><td>BCA-306</td></tr> <tr><th scope='row'>7</th><td>Lab Course-1: DBMS</td><td>BCA-307</td></tr></tbody></table>";
               return false;
              }
              else if(course=="BCS")
              {
               document.getElementById('subject').innerHTML="<table class='table table-striped table-hover'><thead><tr><th scope='col'>Sr. no.</th><th scope='col'>SUBJECT</th><th>Code</th></tr></thead><tbody><tr><th scope='row'>1</th><td>Object Oriented Programming</td><td>BCS-301</td></tr> <tr><th scope='row'>2</th><td>Computer Networks</td><td>BCS-302</td></tr> <tr><th scope='row'>3</th><td>Data Structure and Algorithms</td><td>BCS-303</td></tr> <tr><th scope='row'>4</th><td>Discrete Mathematics</td><td>BCS-304</td></tr> <tr><th scope='row'>5</th><td>Numerical Abilities</td><td>BCS-305</td></tr> <tr><th scope='row'>6</th><td>Lab Course-1: C++ Programming</td><td>BCS-306</td></tr> <tr><th scope='row'>7</th><td>Lab Course-2: Data Structure & Algorithm</td><td>BCS-307</td></tr></tbody></table>";
               return false;
              }  
             }
             else if(sem=="IV")
             {
              if(course=="BCA")
              {
               document.getElementById('subject').innerHTML="<table class='table table-striped table-hover'><thead><tr><th scope='col'>Sr. no.</th><th scope='col'>SUBJECT</th><th>Code</th></tr></thead><tbody><tr><th scope='row'>1</th><td>Programming in Java</td><td>BCA-401</td></tr> <tr><th scope='row'>2</th><td>Data Structure and Algorithm</td><td>BCA-402</td></tr> <tr><th scope='row'>3</th><td>RDBMS</td><td>BCA-403</td></tr> <tr><th scope='row'>4</th><td>Computer Graphics</td><td>BCA-404</td></tr> <tr><th scope='row'>5</th><td>Logical Reasoning</td><td>BCA-405</td></tr> <tr><th scope='row'>6</th><td>Lab Course-3: Java Programming</td><td>BCA-406</td></tr> <tr><th scope='row'>7</th><td>Lab Course-4: RDBMS</td><td>BCA-407</td></tr></tbody></table>";
               return false;
              }
              else if(course=="BCS")
              {
               document.getElementById('subject').innerHTML="<table class='table table-striped table-hover'><thead><tr><th scope='col'>Sr. no.</th><th scope='col'>SUBJECT</th><th>Code</th></tr></thead><tbody><tr><th scope='row'>1</th><td>Programming in Java</td><td>BCS-401</td></tr> <tr><th scope='row'>2</th><td>Software Engineering</td><td>BCS-402</td></tr> <tr><th scope='row'>3</th><td>RDBMS</td><td>BCS-403</td></tr> <tr><th scope='row'>4</th><td>Principle of Compiler Design</td><td>BCS-404</td></tr> <tr><th scope='row'>5</th><td>Logical Reasoning</td><td>BCS-405</td></tr> <tr><th scope='row'>6</th><td>Lab Course-3: RDBMS</td><td>BCS-406</td></tr> <tr><th scope='row'>7</th><td>Lab Course-4: Java Programming</td><td>BCS-407</td></tr></tbody></table>";
               return false;
              } 
             }
             else if(sem=="V")
             {
               if(course=="BCA")
               {
                document.getElementById('subject').innerHTML="<table class='table table-striped table-hover'><thead><tr><th scope='col'>Sr. no.</th><th scope='col'>SUBJECT</th><th>Code</th></tr></thead><tbody><tr><th scope='row'>1</th><td>System Analysis and Design</td><td>BCA-501</td></tr> <tr><th scope='row'>2</th><td>Web Development and PHP Programming</td><td>BCA-502</td></tr> <tr><th scope='row'>3</th><td>Mobile Application Development</td><td>BCA-503</td></tr> <tr><th scope='row'>4</th><td>Linux Operating System</td><td>BCA-504</td></tr> <tr><th scope='row'>5</th><td>Environmental Studies</td><td>BCA-505</td></tr> <tr><th scope='row'>6</th><td>Lab Course-1: PHP Programming</td><td>BCA-506</td></tr> <tr><th scope='row'>7</th><td>Lab Course-2: Mobile Application Development</td><td>BCA-507</td></tr></tbody></table>";
                return false;
               }
               else if(course=="BCS")
               {
                document.getElementById('subject').innerHTML="<table class='table table-striped table-hover'><thead><tr><th scope='col'>Sr. no.</th><th scope='col'>SUBJECT</th><th>Code</th></tr></thead><tbody><tr><th scope='row'>1</th><td>Windows Programming</td><td>BCS-501</td></tr> <tr><th scope='row'>2</th><td>Python</td><td>BCS-502</td></tr> <tr><th scope='row'>3</th><td>Data Science</td><td>BCS-503</td></tr> <tr><th scope='row'>4</th><td>System Analysis and Design</td><td>BCS-504</td></tr> <tr><th scope='row'>5</th><td>Software Testing</td><td>BCS-505</td></tr> <tr><th scope='row'>6</th><td>Lab Course-1: Windows Programming</td><td>BCS-506</td></tr> <tr><th scope='row'>7</th><td>Lab Course-2: Python</td><td>BCS-507</td></tr></tbody></table>";
                return false;
               }
             }
             else if(sem=="VI")
             {
              if(course=="BCA")
              {
               document.getElementById('subject').innerHTML="<table class='table table-striped table-hover'><thead><tr><th scope='col'>Sr. no.</th><th scope='col'>SUBJECT</th><th>Code</th></tr></thead><tbody><tr><th scope='row'>1</th><td>Python</td><td>BCA-601</td></tr> <tr><th scope='row'>2</th><td>Windows Programming</td><td>BCA-602</td></tr> <tr><th scope='row'>3</th><td>Software Engineering</td><td>BCA-603</td></tr>  <tr><th scope='row'>4</th><td>Lab Course-4: Python</td><td>BCA-604</td></tr> <tr><th scope='row'>5</th><td>Lab Course-4: Windows Programming</td><td>BCA-605</td></tr></tbody></table>";
               return false;
              }
              else if(course=="BCS")
              {
               document.getElementById('subject').innerHTML="<table class='table table-striped table-hover'><thead><tr><th scope='col'>Sr. no.</th><th scope='col'>SUBJECT</th><th>Code</th></tr></thead><tbody><tr><th scope='row'>1</th><td>Linux</td><td>BCS-601</td></tr> <tr><th scope='row'>2</th><td>Android</td><td>BCS-602</td></tr> <tr><th scope='row'>3</th><td>Networking Essential</td><td>BCS-603</td></tr> <tr><th scope='row'>4</th><td>Fundamental Image Processing</td><td>BCS-604</td></tr> <tr><th scope='row'>5</th><td>Lab Course-3: Android</td><td>BCS-605</td></tr> <tr><th scope='row'>6</th><td>Lab Course-4: Fundamental Image Processing</td><td>BCS-606</td></tr></tbody></table>";
               return false;
              }
             }
            }
          $(function() {
              $('.date-picker').datepicker( {
                  changeMonth: true,
                  changeYear: true,
                  showButtonPanel: true,
                  dateFormat: 'MM yy',
                  onClose: function(dateText, inst) { 
                      var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
                      var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                      $(this).datepicker('setDate', new Date(year, month, 1));
                  },
                  beforeShow : function(input, inst) {
                      var datestr;
                      if ((datestr = $(this).val()).length > 0) {
                          year = datestr.substring(datestr.length-4, datestr.length);
                          month = jQuery.inArray(datestr.substring(0, datestr.length-5), $(this).datepicker('option', 'monthNamesShort'));
                          $(this).datepicker('option', 'defaultDate', new Date(year, month, 1));
                          $(this).datepicker('setDate', new Date(year, month, 1));
                      }
                  }
              });
          });
}