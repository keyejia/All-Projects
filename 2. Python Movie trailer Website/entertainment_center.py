import media
import fresh_tomatoes

#Adding movie object: fight_club
fight_club = media.movie("Fight Club",
                       "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.",
                       "https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg",
                       "https://www.youtube.com/watch?v=SUXWAEX2jlg")

#Adding movie object: forest_gump
forest_gump = media.movie("Forest Gump",
                       "The story depicts several decades in the life of Forrest Gump, a slow-witted but kind-hearted, good-natured and athletically prodigious man from Alabama, who witnesses, and in some cases influences, some of the defining events of the latter half of the 20th century in the United States",
                       "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
                       "https://www.youtube.com/watch?v=uPIEn0M8su0")

#Adding movie object: rain_man
rain_man = media.movie("Rain Man",
                       "selfish young wheeler-dealer, Charlie Babbitt (Tom Cruise), who discovers that his estranged father has died and bequeathed all of his multimillion-dollar estate to his other son, Raymond (Dustin Hoffman), an autistic savant, of whose existence Charlie was unaware",
                       "https://upload.wikimedia.org/wikipedia/en/b/b2/Rain_Man_poster.jpg",
                       "https://www.youtube.com/watch?v=KKC3W0awjm0")

#Adding movie object: sin_city                    
sin_city = media.movie("Sin City",
                     "The Hard Goodbye is about a man who embarks on a brutal rampage in search of his one-time sweetheart's killer, killing anyone, even the police, that gets in his way of finding and killing her murderer.",
                     "https://upload.wikimedia.org/wikipedia/en/9/9e/Sincitypostercast.jpg",
                     "https://www.youtube.com/watch?v=T2Dj6ktPU5c")

#Adding movie object: kung_fu_hustle
kung_fu_hustle = media.movie("Kung Fu Hustle",
                     "In Shanghai, China in the 1940s, a wannabe gangster aspires to join the notorious \"Axe Gang\" while residents of a housing complex exhibit extraordinary powers in defending their turf.",
                     "https://upload.wikimedia.org/wikipedia/en/0/00/KungFuHustleHKposter.jpg",
                     "https://www.youtube.com/watch?v=-m3IB7N_PRk")

#Adding movie object: lord_of_the_rings
lord_of_the_rings = media.movie("Lord of the Rings: The Return of the King",
                     "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
                     "https://upload.wikimedia.org/wikipedia/en/9/9d/Lord_of_the_Rings_-_The_Return_of_the_King.jpg",
                     "https://www.youtube.com/watch?v=r5X-hFf6Bwo")

#combine all the movies into a list.               
movies = [fight_club, forest_gump, rain_man, sin_city, kung_fu_hustle, lord_of_the_rings]
#Using function open_movies_page from fresh_tomatoes.py to render listed movies in webbrowser
fresh_tomatoes.open_movies_page(movies)
