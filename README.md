# tweet-tueur

Kill tweets containing your most hated hashtag.

## Install
You will need node.js and npm.
Open the node.js command prompt and go to the tweet-tueur's directory.
Type: `npm install` so that npm install the dependencies.

## Config
You'll need to obtain a **consumer key**, a **consumer secret**, an **access token key** and an **access token secret** from twitter.
In the application directory is a file named **twitter_infos.json** that you can fill with your keys you got from twitter.
You can also modify the hashtag you want to track (using a trending hashtag is recommended so you'll see some tweets on screen).
The file should look like this (xxx must be replaced by your actual keys, though):
```
{
  "hashtag" : "IndieDev",
  "consumer_key": "xxxxxxxxxxxxxx",
  "consumer_secret": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "access_token_key": "xxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
  "access_token_secret": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

## Run
When the dependencies are installed, you'll just need to type: `node server.js` to start the server side of the application.
Then you can connect to your server on port **4242** via your browser.
To connect locally, you would type `127.0.0.1:4242` or `localhost:4242`.
The page should display the application.
Tweets will appear from the top of the screen and you will have to click and kill them before they fall out of the window.