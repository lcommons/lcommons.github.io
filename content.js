
function loadContent(id){
    document.getElementById("main").innerHTML = content[id];
    //alert($('#phred').html());
    //$('#main').html('hello world');
    $('table.display').DataTable(
	{"paging":   false,
         "ordering": false});
    /*if(params != ''){
	alert('s');
	//$('table.display').DataTable(params[id]);
	$('table.display').DataTable();
    }*/
}

const params = {
    'marathonlist':{"paging":false,"order": [[ 1, "asc" ]]},
    'titanic':{},
    'policeshootings':{},
    'nhmountains':{"paging":   false}
}

const content = {
    'marathonlist':"<p>I am making my way through running a marathon in all fifty states. I've run twenty one marathons, in 13 states so far. Most recently I ran the Flying Pig Marathon in Cincinnatti in May, and plan a couple more in the fall (Clarence DeMarr in New Hampshire and Philadelphia.)<table id='marathontable' class='display' ><thead><tr><th>Race #</th><th>Year</th><th>Race</th><th>Time</th><th>State</th><th>State #</th></tr></thead><tbody><tr><td>1.</td><td> 2005</td><td> Cape Cod Marathon      </td><td>   3:36:05 </td><td> Massachusetts</td><td> 1</td></tr><tr><td>2.</td><td> 2008</td><td> Maine Marathon          </td><td>  3:21:00 </td><td> Maine        </td><td> 2</td></tr><tr><td>3.</td><td> 2009</td><td> Boston Marathon         </td><td>  3:42:32</td><td></td><td></td></tr><tr><td>4.</td><td> 2009</td><td> Stone Cat Marathon      </td><td>  4:14:18</td><td></td><td></td></tr><tr><td>5.</td><td> 2010</td><td> Boston Marathon          </td><td> 3:52:17</td><td></td><td></td></tr><tr><td>6.</td><td> 2010</td><td> 12 Hours Around the Lake</td><td> 11:46:23</td><td></td><td></td></tr><tr><td>7.</td><td> 2010</td><td> Hartford Marathon      </td><td>   4:29:07 </td><td> Connecticut  </td><td> 3 </td></tr><tr><td>8.</td><td> 2010</td><td> Stone Cat 50 Mile race </td><td>  10:41:08</td><td></td><td></td></tr><tr><td>9.</td><td> 2011</td><td> Memphis Marathon       </td><td>   3:34:42</td><td> Tennessee   </td><td>  4</td></tr><tr><td>9.1&nbsp;</td><td>2012</td><td> [stress fracture in foot :-(  ]</td><td></td><td><td></td></td></tr><tr><td>10.</td><td> 2013</td><td> Vermont City Marathon  </td><td>   4:38:44 </td><td> Vermont    </td><td>   5</td></tr><tr><td>11.</td><td> 2013</td><td> New York Marathon      </td><td>   4:52:56 </td><td> New York   </td><td>   6</td></tr><tr><td>12.</td><td> 2014</td><td> Rhode Island Marathon  </td><td>   4:25:22 </td><td> Rhode Island</td><td>  7</td></tr><tr><td>13.</td><td> 2014</td><td> Chicago                </td><td>   4:39:20</td><td>  Illinois    </td><td>  8</td></tr><tr><td>14.</td><td> 2015</td><td> ocean drive marathon    </td><td>  4:27:06</td><td>  New Jersey </td><td>   9</td></tr><tr><td>14.1 &nbsp;</td><td>2015</td><td>(calf injury at Baystate Marathon in the fall)</td><td></td><td></td><td></td></tr><tr><td>15.</td><td> 2016</td><td> Delaware Marathon    </td><td>     3:54   </td><td>  Delaware   </td><td>  10</td></tr><tr><td>16.</td><td> 2016</td><td> Baystate Marathon   </td><td>      3:42</td><td></td><td></td></tr><tr><td>17.</td><td> 2016</td><td> Marine Corp Marathon</td><td>      3:34:09 </td><td> Virginia  </td><td>   11</td></tr><tr><td>18.</td><td> 2018</td><td> Oceans Run Marathon </td><td>      4:57:05</td><td></td><td></td></tr><tr><td>19.</td><td> 2018</td><td> Boston Marathon     </td><td>      4:29</td><td></td><td></td></tr><tr><td>20.</td><td> 2018</td><td> Baltimore marathon  </td><td>      4:28    </td><td> Maryland </td><td>    12</td></tr><tr><td>21.</td><td> 2019 </td><td>Flying Pig Marathon, Cincinnati</td><td>4:58</td><td>Ohio</td><td>13</td></tr><tr><td>22.</td><td>2019</td><td>Clarence DeMar Marathon </td><td>4:29</td><td>New Hampshire </td><td>14</td></tr></tbody></table>",
    "titanic":'	<h2 id="titanic">Titanic Passenger Survival Data</h2>\
	<h5>December, 2018</h5>\
	<p>Here are three Jupyter Notebooks that analyse passenger data from the sinking of the HMS Titanic:\
            <ul>\
               <li><a href="https://github.com/lcommons/portfolio/blob/95871f7a632642f5ac4550b6ac079f3c3604bbc4/titanic/titanic-2.ipynb">This Jupyter Notebook</a> implements a logistic regression analysis of the Titanic passenger survival data</li>\
               <li><a href="https://github.com/lcommons/portfolio/blob/95871f7a632642f5ac4550b6ac079f3c3604bbc4/titanic/titanic-3.ipynb">This Jupyter Notebook</a> implements a Random Forest analysis of the Titanic data.</li>\
               <li><a href="https://github.com/lcommons/portfolio/blob/95871f7a632642f5ac4550b6ac079f3c3604bbc4/titanic/titanic-3b.ipynb">This Jupyter Notebook</a> explores the top parameters identified in the earlier random forest analysis.</li>\
	<img src="titanic-img-1.jpg"/>',
    "policeshootings":'<h2 id="policeshootings">Police Shootings in the United States</h2>\
	<h5>March, 2019</h5>\
	<p>This notebook analyses data compiled by the Washington Post of shooting deaths by police in the United States.</p>\
	<a href="https://colab.research.google.com/github/lcommons/portfolio/blob/master/policeshootings/PoliceShootings.ipynb#scrollTo=DmRZPVkiUYol"><img src="policeshootings-img-1.jpg"/></a>\
	<br>',
    "kindleweather":"<h2>Kindle Weather Page</h2><p><a href='https://github.com/lcommons/enviromonitor'>This application</a> retreives current weather and forecast data from the National Weather Service, produces a web page to display it, and also provides a node.js REST service to server the data.</p><img src='weatherPageExample.jpg'/> ",
    'nhmountains':'<table id="nhmountainstable" class="display" ><thead><tr><th>Date</th><th>Mountain</th><th>Height</th><th>Conditions</th><th>Gear/Notes</th></tr></thead><tbody><tr><td>2019-02-17</td><td>Mt Tecumseh</td><td>4,003\'</td><td>Beautiful! Sunny, 30s, packed snow (two days post snowstorm)</td><td>yak trax </td></tr><tr><td>2019-06-17</td><td>Mount Osceola</td><td>4,340\'</td><td>A beautiful day, but we took the wrong trail; we should have hiked from Tripoli road.</td><td></td></tr><tr><td>2019-06-17</td><td>East Osceola</td><td>4,156\'</td><td></td><td></td></tr><tr><td>2019-08-20</td><td>Mount Jackson</td><td>4,052\'</td><td></td><td>Also climbed nearby Mt Webster.</td></tr><tr><td>2019-09-05</td><td>Mount Washington</td><td>6,288\'</td><td>A beautiful day for the highest mountain in the northeast. Temp’s in the 40’s the whole way, bright sunny skies.</td><td>We were prepared for forecasted wind chills below freezing, but it never got that cold.</td></tr></tbody></table>',
    'finapps':'<p>I have written two calculators related to planning for Financial Independance and Retireing Early (FIRE).</p><p>The first projects your assets given a current financial situation, saving plans and future spending plans. It is here: <a href="http://lagrange1.herokuapp.com/">http://lagrange1.herokuapp.com/</a></p><p>The second is a calculator to predict when you will achieve Financial Independance (FI): <a href="http://lagrange2.herokuapp.com/index.html">http://lagrange2.herokuapp.com/index.html</a>.</p>'
}

