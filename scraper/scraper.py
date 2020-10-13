import re
import json
import requests
from bs4 import BeautifulSoup

# gets the IMDb ids for later api use
# separates all movies from all english movies
# * last scraped on October 13, 2020


page_num = 1
all_movies = []
english_movies = []

while page_num <= 951:
    page = requests.get(
        f"https://www.imdb.com/search/title/?groups=top_1000&sort=user_rating,desc&start={page_num}&ref_=adv_nxt").text

    soup = BeautifulSoup(page, 'html.parser')
    ribbonize = soup.find_all('div', 'ribbonize')

    for movie in ribbonize:
        # extracts IMDb ID
        regex = re.search("tt\S{7}", str(movie))
        all_movies.append(regex.group(0))

    page_num += 50

for movie in all_movies:
    # only movies with English listed in Language
    res = requests.get(
        f'http://www.omdbapi.com/?i={movie}&apikey=80e59555').json()

    if "English" in res['Language']:
        english_movies.append(movie)

# movies to remove because of too many numbers in title
movies_to_remove = ['tt1306980', 'tt8579674']

for movie in movies_to_remove:
    all_movies.remove(movie)
    english_movies.remove(movie)

# converts to JSON and writes to file
with open('all_movies.json', 'w') as f:
    json.dump(all_movies, f)

with open('english_movies.json', 'w') as f:
    json.dump(english_movies, f)
