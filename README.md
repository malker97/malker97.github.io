## Final Update
Make this Repo to public

# About this project

## The Repo [URL:https://github.com/malker97/CS410PFeFinalProject](https://github.com/malker97/CS410PFeFinalProject)
This Repo written by Xiaoran and Zhengmao.

##The Host[URL:https://malker97.github.io/](https://malker97.github.io/)

## About Template
> All code must be written by you. If you use any outside libraries or follow any tutorials, you should document that in your project Readme.
* The original template is included in the CSS folder and JS folder

### any outside libraries or follow any tutorials
* CSS: Bootstrap[URL](https://getbootstrap.com/) jQurery[url](https://jquery.com/) CSS Template[URL](http://www.templatesy.com/)
* JS: Bootstrap[URL](https://getbootstrap.com/) CSS Template[URL](http://www.templatesy.com/)
## Journal 
All logs are stored in Commit list in Chinses. :(
## The API We Used
Get Overwatch Player Information API: "http://owapi.io/profile/pc/us/[USERNAME]-[USERNUMBER]";
```json
{
  "username": "malker",
  "level": 311,
  "portrait": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/7407ec3a17bdab6504f62561e74fadb7aac468f00c18a05b1d15bc57a1b5d1f2.png",
  "endorsement": {
    "sportsmanship": {
      "value": 0.28,
      "rate": 28
    },
    "shotcaller": {
      "value": 0.26,
      "rate": 26
    },
    "teammate": {
      "value": 0.47,
      "rate": 47
    },
    "level": null,
    "frame": "https://static.playoverwatch.com/svg/icons/endorsement-frames-3c9292c49d.svg#_2",
    "icon": "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQwIiB3aWR0aD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxjaXJjbGUgcj0iMTUuOTE1NDk0MzA5MTg5NTQiIGZpbGw9IiMyYTJiMmUiIHN0cm9rZS1kYXNoYXJyYXk9IjI2IDc0IiBzdHJva2UtZGFzaG9mZnNldD0iMjUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlPSIjZjE5NTEyIiBjeD0iNTAlIiBjeT0iNTAlIj48L2NpcmNsZT48Y2lyY2xlIHI9IjE1LjkxNTQ5NDMwOTE4OTU0IiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlLWRhc2hhcnJheT0iNDcgNTMiIHN0cm9rZS1kYXNob2Zmc2V0PSI5OSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2U9IiNjODFhZjUiIGN4PSI1MCUiIGN5PSI1MCUiPjwvY2lyY2xlPjxjaXJjbGUgcj0iMTUuOTE1NDk0MzA5MTg5NTQiIGZpbGw9InRyYW5zcGFyZW50IiBzdHJva2UtZGFzaGFycmF5PSIyOCA3MiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjUyIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZT0iIzQwY2U0NCIgY3g9IjUwJSIgY3k9IjUwJSI+PC9jaXJjbGU+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGR5PSIuM2VtIiBmb250LWZhbWlseT0iY2VudHVyeSBnb3RoaWMsYXJpYWwsc2Fucy1zZXJpZiIgZm9udC13ZWlnaHQ9IjMwMCIgZm9udC1zaXplPSIxNiIgc3Ryb2tlPSIjZjZmNmY2IiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9IiNmNmY2ZjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5hTjwvdGV4dD48L3N2Zz4="
  },
  "private": false,
  "games": {
    "quickplay": {
      "won": 441
    },
    "competitive": {
      "won": 19,
      "lost": 6,
      "draw": 1,
      "played": 26,
      "win_rate": 76
    }
  },
  "playtime": {
    "quickplay": "104:59:50",
    "competitive": "04:49:48"
  },
  "competitive": {
    "tank": {
      "rank": null,
      "rank_img": null
    },
    "damage": {
      "rank": null,
      "rank_img": null
    },
    "support": {
      "rank": null,
      "rank_img": null
    }
  },
  "levelFrame": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/69c2c1aff0db8429a980bad7db76a3388003e43f0034097dc4cfa7f13c5de7d7.png",
  "star": "https://d15f34w2p8l1cc.cloudfront.net/overwatch/4a2c852a16043f613b7bfac33c8536dd9f9621a3d567174cb4ad9a80e3b13102.png"
}
```
### Get TimeZone API:"http://worldtimeapi.org/api/ip"

```json
{
  "abbreviation": "CEST",
  "client_ip": "46.101.228.33",
  "datetime": "2020-06-05T08:55:11.734850+02:00",
  "day_of_week": 5,
  "day_of_year": 157,
  "dst": true,
  "dst_from": "2020-03-29T01:00:00+00:00",
  "dst_offset": 3600,
  "dst_until": "2020-10-25T01:00:00+00:00",
  "raw_offset": 3600,
  "timezone": "Europe/Berlin",
  "unixtime": 1591340111,
  "utc_datetime": "2020-06-05T06:55:11.734850+00:00",
  "utc_offset": "+02:00",
  "week_number": 23
}
```
### Netease Blizzard IMG API:"http://overwatch.nos.netease.com/1/assets/img/pages/heroes/list/[heronames].png"
![Dva](http://overwatch.nos.netease.com/1/assets/img/pages/heroes/list/dva.png)

## Update
60c353c-Zhengmao, 18 minutes ago: Updated the ReadMe file
b3e10d2-Zhengmao, 19 minutes ago: Updated the ReadMe file
de700eb-Zhengmao, 20 minutes ago: Updated the ReadMe file
990d5d4-Zhengmao, 68 minutes ago: Merge branch'zhengmao'
f7dfe07-Zhengmao, 88 minutes ago: This should be the final version of the project, including the test content of the project, I have also joined
fd9eb32-Zhengmao, 2 days ago: deleted the test document
a54c32a-Zhengmao, 2 days ago: commented out some contact information
eeaa182-Zhengmao, 2 days ago: Basically realized the function of displaying time according to different time zones
bb3a601-Zhengmao, 2 days ago: Implemented the season countdown function of a website, these are the files required by the project
64d8e43-Zhengmao, 2 days ago: This page will be used to implement the season countdown function
cf28195-Zhengmao, 2 days ago: Merge branch'master' into zhengmao
a33722c-Zhengmao, 2 days ago: I don't know what this branch is better for
f301694-Zhengmao, 2 days ago: The search content is fully realized
1f4958f-Zhengmao, 2 days ago: I completed the query function
850099c-Zhengmao, 2 days ago: realized the greeting function to the user
82cea6b-Zhengmao, 2 days ago: Completed the function of changing the background according to the browser language
f54c33a-malker97, 2 days ago: Changed the location of the file, and implemented the function of changing the background photo according to the browser language.
dd941c4-Zhengmao, 2 days ago: This is a file that changes the background
bf0d2b4-Zhengmao, 2 days ago: Merge branch'master' of github.com:malker97/CS410PFeFinalProject
1dd2cde-Zhengmao, 2 days ago: Removed the method of determining region based on language, intend to enable new files to try
766faa5-WinnieThePooln, 2 days ago: update KingsRow.html
f00c87c-WinnieThePooln, 2 days ago: update dva ablitiy background color
efd14f5-Zhengmao, 2 days ago: Merge branch'master' of github.com:malker97/CS410PFeFinalProject
06587d9-Zhengmao, 2 days ago: most of it is done
7caba43-WinnieThePooln, 2 days ago: finised dva.html
c357b6c-Zhengmao, 2 days ago: In the form of a signature, the national flag of the Great Kingdom was added
5ce38db-Zhengmao, 2 days ago: Completed the content of King's Road Map and the link to the map website
43d4f70-Zhengmao, 2 days ago: Completed the content of the map of King's Road and the link to the map website
b2a8f42-Zhengmao, 2 days ago: Merge branch'master' of github.com:malker97/CS410PFeFinalProject
a6f31ff-Zhengmao, 2 days ago: Some content changed
5d5b874-Zhengmao, 2 days ago: This is a sample display of an independent map
7f9fd43-WinnieThePooln, 2 days ago: update dva.html
8834465-WinnieThePooln, 2 days ago: update dva.html
7b63531-Zhengmao, 2 days ago: fixed the bug of invisible navibar
8b0c7ea-Zhengmao, 2 days ago: Added YT index to all maps
2ff572e-Zhengmao, 2 days ago: This function is to select the YT photo below the map, he will play the unique audio of the corresponding map
ba6203a-Zhengmao, 2 days ago: Merge branch'zhengmao'
3cbe20f-Zhengmao, 2 days ago: This function that changes the background seems not very easy to write, so I want to write the function that changes the background according to the browser language first
6dfe267-Zhengmao, 2 days ago: This is a js that changes the map to the background. When the player selects the map, the map will become the national flag of the country where the map is located
bbdbc30-Zhengmao, 2 days ago: sent all the js scripts to the JS folder
caa39b7-Zhengmao, 2 days ago: Merge branch'zhengmao'
2f3b462-Zhengmao, 2 days ago: Complete the layout of the map and the arrangement of the general information
1dd9ef5-WinnieThePooln, 2 days ago: update heros.html and dva.html
c6b4156-Zhengmao, 3 days ago: At NetEase Blizzard, I downloaded all the map pictures
c780c1d-Zhengmao, 3 days ago: determined the location of the game map
63b3dc7-Zhengmao, 3 days ago: The document has been completed, but the layout is not very suitable, so the project needs to be changed
867cb6b-Zhengmao, 3 days ago: nothing changed
f929a23-Zhengmao, 3 days ago: Changed the subject of the case, and reserved the area shown on the right side of the inquiry
209a0f6-WinnieThePooln, 3 days ago: update page title of searchplayer.html
041bc4d-WinnieThePooln, 3 days ago: update page title of searchplayer.html
531afe5-Zhengmao, 3 days ago: Completed backup of js
50dd52a-Zhengmao, 3 days ago: Merge branch'master' of github.com:malker97/CS410PFeFinalProject
89eb0e7-Zhengmao, 3 days ago: Added the default content to the input box for easy testing, but also not sure how to display the output content
f5c94c7-WinnieThePooln, 3 days ago: update beginning of heros.html
91bbf7c-Zhengmao, 3 days ago: Merge branch'zhengmao'
238de05-Zhengmao, 3 days ago: Completed the content of the UI, leaving the connection to the original function
fb50dde-WinnieThePooln, 3 days ago: finished index.html
ac64898-Zhengmao, 3 days ago: Completed the function of querying player information, and it has been used in combination with the template, but may need to change the location of the file
f2511cc-Zhengmao, 3 days ago: Merge branch'master' of github.com:malker97/CS410PFeFinalProject
a98e0c7-Zhengmao, 3 days ago: copied the template to the current file
9bc4e90-WinnieThePooln, 3 days ago: update main slides in index.html
60f7b29-WinnieThePooln, 3 days ago: update page title and background
2b9c1fc-WinnieThePooln, 3 days ago: Merge branch'master' of https://github.com/malker97/CS410PFeFinalProject
044c25e-WinnieThePooln, 3 days ago: update header and footer
5911b37-Zhengmao, 4 days ago: Most of the functions to find players have been completed, the content needs to be added based on the data in the interface
3c88e39-Zhengmao, 4 days ago: I put all the useless comment functions behind the file
cbe011c-Zhengmao, 4 days ago: display the score information of three positions
e34fdd8-Zhengmao, 4 days ago: The language query function in this file is for testing
a0ef612-Zhengmao, 4 days ago: The function of this function is to set the background of the web page according to the browser language. When the player language does not exist in the game map, the default setting is to become the moon base
6837b91-Zhengmao, 4 days ago: This file is no longer useful, so it was deleted
f8746cb-Zhengmao, 4 days ago: The search content has been completed, but you need to improve the query area or country, and see if the book can get new content
0957a6d-Zhengmao, 4 days ago: You can find players by typing
12a3ed8-Zhengmao, 4 days ago: Merge branch'master' of github.com:malker97/CS410PFeFinalProject
f8aeafb-Zhengmao, 4 days ago: This is the file to query player information
c8bce86-Zhengmao, 4 days ago: The query function is completed, and the valid information can be obtained from the API
65bbf27-Zhengmao, 4 days ago: Updating the query hero code
3c65582-WinnieThePooln, 4 days ago: update
638de18-Zhengmao, 4 days ago: deleted some files
e0324b2-Zhengmao, 4 days ago: This is the test file of the query part
930e666-Zhengmao, 4 days ago: created a few basic websites
fae1471-Zhengmao, 4 days ago: I deleted the template
289a8d8-Zhengmao, 4 days ago: I don’t know what I changed later
e8ebb72-Zhengmao, 11 days ago: try to make the navigation bar for the website
1a89866-Zhengmao, 11 days ago: Simply downloaded the official js folder, you can use this when there is an exception after the update
