import re
import json
import requests
from bs4 import BeautifulSoup

# gets the IMDb ids for later api use
# scraped on October 6, 2020


page_num = 1
movies = []

while page_num <= 951:
    page = requests.get(
        f"https://www.imdb.com/search/title/?groups=top_1000&sort=user_rating,desc&start={page_num}&ref_=adv_nxt").text

    soup = BeautifulSoup(page, 'html.parser')
    ribbonize = soup.find_all('div', 'ribbonize')

    for movie in ribbonize:
        # extracts IMDb ID
        regex = re.search("tt\S{7}", str(movie))
        movies.append(regex.group(0))

    page_num += 50


# converts to JSON and writes to file
with open('movies.json', 'w') as f:
    json.dump(movies, f)
