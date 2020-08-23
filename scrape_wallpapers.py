import requests

url = "https://www.reddit.com/r/Animewallpaper/search.json?q=flair_name%3A%22Desktop%22&restrict_sr=1"

headers = {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36"
}

r = requests.get(url, headers=headers)

res = r.json()

links = res["data"]["children"]

images = []

for link in links:
    try:
        images.append(link["data"]["url_overridden_by_dest"])
    except:
        pass

count = 0
for image_link in images:
    with open(f"Images/img{count}.jpg", "wb") as f:
        image = requests.get(image_link)
        if image.status_code == 200:
            image = image.content
            f.write(image)
            print(f"Downloaded Image No: {count}")
            count += 1
