import re
import json
import requests
from bs4 import BeautifulSoup


# * last scraped on October 28, 2020


page_num = 1
movie_ids = []
movie_data = []


while page_num <= 951:
    page = requests.get(
        f"https://www.imdb.com/search/title/?groups=top_1000&sort=user_rating,desc&start={page_num}&ref_=adv_nxt").text

    soup = BeautifulSoup(page, 'html.parser')
    ribbonize = soup.find_all('div', 'ribbonize')

    for movie in ribbonize:
        # extracts IMDb ID
        regex = re.search("tt\S{7}", str(movie))
        movie_ids.append(regex.group(0))

        print(regex.group(0))

    page_num += 50


# obscure movies to remove
movies_to_remove = ['tt1306980', 'tt8579674', 'tt0056801', 'tt0416449', "tt1043150", "tt8239946", "tt0986264", "tt3417422", "tt7838252", "tt4849438",
                    "tt3322420", "tt1954470", "tt1620933", "tt0375611", "tt2395469", "tt2283748", "tt1562872", "tt3863552", "tt8108198", "tt1639426", "tt2338151", "tt2350496"]
for movie in movies_to_remove:
    movie_ids.remove(movie)

# scrapes for json movie data
for movie_id in movie_ids:

    movie_json = requests.get(
        f"https://www.omdbapi.com/?i={movie_id}&apikey=80e59555").json()

    movie_json['imdbID'] = movie_id
    movie_data.append(movie_json)

    print(movie_json['Title'])

# removes Bollywood movies
# partly works
for movie in movie_data:
    if movie['Country'] == 'India':
        movie_data.remove(movie)

# converts to JSON and writes to file
with open('movie_data.json', 'w') as f:
    json.dump(movie_data, f)
