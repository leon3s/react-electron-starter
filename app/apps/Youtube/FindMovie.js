const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
// const SpeechComponent = require('./SpeechComponent');

const moduleCpasbien = (categories, callback = () => 0) => {
  const categoryUrls = {
    _action_: 'https://www.cpasbien.site/action/',
    _animated_: 'https://www.cpasbien.site/animation/',
  };
  const movies = [];
  request.get(categoryUrls[categories[0]], (err, res, body) => {
    // console.log(res, res.statusCode, body);
    const $ = cheerio.load(body);

    $('.shortstory-in').each((e, elem) => {
      const title = $(elem).find('a').eq(1).attr('title');
      const url = $(elem).find('a').eq(0).attr('href');
      const pictureUrl = $(elem).find('img').eq(0).attr('src');
      let picture = pictureUrl;
      if (!pictureUrl.includes('https://www.cpasbien.site')) {
        picture = `https://www.cpasbien.site${pictureUrl}`;
      }
      if (picture.includes('http://www.torrents9.pe')) return;
      // console.log(elem.attr('title'));
      movies.push({
        url,
        title,
        picture,
      });
    });
    callback(null, movies);
  });

  console.log(categories);
};

class FindMovie extends SpeechComponent {
  showResponse = (movies) => {
    // this.say('Voici la liste des films disponible');
    let appWindow = new this.BrowserWindow({
      show: false,
      width: 1024,
      height: 728
    });
    appWindow.loadURL(`file://${__dirname}/app.html?module=FindMovie&action=${JSON.stringify({
      type: 'showMovieList',
      payload: movies,
    })}`);
    appWindow.webContents.on('did-finish-load', () => {
      if (!appWindow) {
        throw new Error('"appWindow" is not defined');
      }
      appWindow.show();
      appWindow.focus();
    });
    appWindow.on('closed', () => {
      appWindow = null;
    });
  }

  onParamsFulfilled = (response) => {
    console.log('FIND MOVIE PARAMS FULFILLED');
    console.log(response);
    const { categories } = response.queryResult.parameters;
    console.log(categories);
    moduleCpasbien(categories, (err, result) => {
      this.showResponse(result);
    });
  }
}

moduleCpasbien(['_action_'], (err, movies) => {
  console.log(err, movies);
  fs.writeFileSync('./movies.json', JSON.stringify(movies, null, 2));
});

module.exports = FindMovie;
