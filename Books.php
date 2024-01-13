<?php
session_start();
    $conn = new mysqli("localhost", "root", "", "test");
    // $conn = new mysqli("db.lxautezahrnizkijicaf.supabase.co", "postgres", "WCLSwebsite123$", "postgres");
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Books</title>
    <link rel="stylesheet" type="text/css" href="bookstyle.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

</head>


<body>
    <div class="top">
        <img src="img\top2.png" alt="">
    </div>
   <div id="nav">
        <ul>
      <li><a href="WCLSwebsite.html" id="homeLink">Home</a></li>
      <li><a href="Books.php" id="allbookLink">AllBooks</a></li>
    <li><a href="#" id="textbookLink">TextBook</a></li>
    <li><a href="#" id="exerciseALink">Exercise Book A</a></li>
    <li><a href="#" id="exerciseBLink">Exercise Book B</a></li>
    </ul>
        </ul>
    </div>

    <div class="box"> 
        <div class="left">
            <a href="news.html"><img src="img\enrol.jpg"" alt=""></a>
        </div>

     <div class="right" id ="right">
<?php
// Generate corresponding information for each box traversal
$sql = "SELECT bookname, year FROM studentbook ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    while ($row = $result->fetch_assoc()) {
    
    $bookname = $row['bookname'];
    $year = $row['year'];
// 输出 HTML 结构

    echo "<div>";
    echo "<a href='books/$bookname.pdf'><img src='books/$bookname.png' alt='Book Cover'></a>";
    echo "<p class='review'><a href='books/$bookname.pdf'>$bookname</a></p>";
    echo "<div class='info'>";
    echo "<h4><a href='books/$bookname.pdf' >Read&Download</a></h4>";
    echo "<em>| </em>";                       
    echo "<span>Book $year</span>";
    echo "</div>";
    echo "</div>";
 }
} else {
    echo "no matching record";
}
    ?>
     </div><!-- the end of right box -->

<div id="exerciseA" style="display: none">
       <!-- Click exerciseA to switch the displayed box -->
    <?php
 $sql = "SELECT bookname, year FROM studentbook WHERE bookname LIKE '%A%'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // 输出数据
    while ($row = $result->fetch_assoc()) {
        $bookname = $row['bookname'];
        $year = $row['year'];
    echo "<div>";
    echo "<a href='books/$bookname.pdf'><img src='books/$bookname.png' alt='Book Cover'></a>";
    echo "<p class='review'><a href='books/$bookname.pdf'>$bookname</a></p>";
    echo "<div class='info'>";
    echo "<h4><a href='books/$bookname.pdf' >Read&Download</a></h4>";
    echo "<em>| </em>";                       
    echo "<span>Book $year</span>";
    echo "</div>";
    echo "</div>";
    }
} else {
    echo "no matching record";
}

?>
 </div>

       <!-- Click exerciseB to switch the displayed box -->
        <div id="exerciseB" style="display: none">
    <?php
$sql = "SELECT bookname, year FROM studentbook WHERE bookname LIKE '%B%'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $bookname = $row["bookname"];
$year = $row["year"];

        // 在HTML中生成相应的结构
 
    echo "<div>";
    echo "<a href='books/$bookname.pdf'><img src='books/$bookname.png' alt='Book Cover'></a>";
    echo "<p class='review'><a href='books/$bookname.pdf'>$bookname</a></p>";
    echo "<div class='info'>";
    echo "<h4><a href='books/$bookname.pdf' >Read&Download</a></h4>";
    echo "<em>| </em>";                       
    echo "<span>Book $year</span>";
    echo "</div>";
    echo "</div>";
    }
} else {
    echo "no matching record";
}

?>
</div>
 <!-- Click textbook to switch the displayed box -->
    <div id="textbook" style="display: none">
     <!-- Query records that meet conditions in the database -->
    <?php
$sql = "SELECT bookname, year FROM studentbook WHERE bookname LIKE '%text%'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // 输出数据
    while ($row = $result->fetch_assoc()) {
        $bookname = $row["bookname"];
        $year = $row["year"];

        // 在HTML中生成相应的结构
 
    echo "<div>";
    echo "<a href='books/$bookname.pdf'><img src='books/$bookname.png' alt='Book Cover'></a>";
    echo "<p class='review'><a href='books/$bookname.pdf'>$bookname</a></p>";
    echo "<div class='info'>";
    echo "<h4><a href='books/$bookname.pdf' >Read&Download</a></h4>";
    echo "<em>| </em>";                       
    echo "<span>Book $year</span>";
    echo "</div>";
    echo "</div>";
    }
} else {
    echo "no matching record";
}
// $conn->close();
?>
</div>

    </div><!-- the end of main box -->

         <div class="bottom">
        <div class="link">
            <ul>
                <li><a href="img/常见问题.pdf" title="常见问题">常见问题</a></li>
                <li> <a href="img/WCLS FAQ 2019.pdf" title="FAQ">FAQ</a></li>
                <li><a href="img/条款及细则.pdf" title="条款及细则">条款及细则</a></li>
            </ul>
        </div>

        <div class="link2">
            <ul>
                <li><a href="img/WCLS Terms and Conditions 2020.pdf" title="Terms and Conditions">Terms and
                        Conditions</a></li>
                <li> <a href="img/WCLS Emergency Procedure 190513 - parents edition V4 ENG.pdf"
                        title="Emergency Instructions">Emergency Instructions</a></li>
                <li><a href="img/WCLS Emergency Procedure 190513 - parents edition V4 CHIN.pdf"
                        title="火灾及地震应急措施">火灾及地震应急措施</a></li>
            </ul>



        </div>

        <div id="footer">
            2008-2024 Wellington Chinese Language School

            <!-- <a href="Documentation/常见问题.docx" title="常见问题">常见问题</a>&nbsp;<a href="http://ice.xmu.edu.cn/confucius.aspx" title="厦大孔子学院">厦大孔子学院</a>&nbsp;<a href="javascript:;" title="Sample link # 3">Link 3</a>&nbsp;<a href="javascript:;" title="Sample link # 4">Link 4</a> -->
            <!-- <a href="http://college.chinese.cn/" title="孔子学院">孔子学院</a>&nbsp;<a href="http://ice.xmu.edu.cn/confucius.aspx" title="厦大孔子学院">厦大孔子学院</a>&nbsp;<a href="javascript:;" title="Sample link # 3">Link 3</a>&nbsp;<a href="javascript:;" title="Sample link # 4">Link 4</a> -->
        </div>

    </div>

        <script>

//Through the menu tag, switch the div box to display different content
       document.addEventListener("DOMContentLoaded", function () {
        // 获取要添加点击事件的<li>元素
        var textbookLink = document.getElementById('textbookLink');

    //    Add click event listener
        textbookLink.addEventListener('click', function (event) {
            // Checks whether the clicked element is <li> itself or its child element
          
                document.getElementById('textbook').style.display = 'block';
                document.getElementById('exerciseA').style.display = 'none';
                document.getElementById('exerciseB').style.display = 'none';
                 document.getElementById('right').style.display = 'none';
        });
         });
        
         document.addEventListener("DOMContentLoaded", function () {
     var exerciseALink = document.getElementById('exerciseALink');
     exerciseALink.addEventListener('click', function (event) {
            // Checks whether the clicked element is <li> itself or its child element
           document.getElementById('textbook').style.display = 'none';
                document.getElementById('exerciseA').style.display = 'block';
                document.getElementById('exerciseB').style.display = 'none';
                 document.getElementById('right').style.display = 'none';
        });
    });

     document.addEventListener("DOMContentLoaded", function () {
     var exerciseBLink = document.getElementById('exerciseBLink');
     exerciseBLink.addEventListener('click', function (event) {
            // Checks whether the clicked element is <li> itself or its child element
             document.getElementById('textbook').style.display = 'none';
                document.getElementById('exerciseA').style.display = 'none';
                document.getElementById('exerciseB').style.display = 'block';
                 document.getElementById('right').style.display = 'none';
        });
    });

        </script>
</body>

</html>