const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cheerio = require('cheerio')
const tools = require('../lib/config.js')
const puppeteer = require('puppeteer');

let apkcombo = {
  search: async function(args) {
    let res = (await fetch(tools.Proxy(tools.api(1, '/search/' + encodeURIComponent(args.replace(' ', '-'))))))
    let ress = []
    res = (await res.text())
    let $ = cheerio.load(res)

    $('div.content-apps > a').each(function(a, b) {
        let name = $(b).attr('title');
        let link = $(b).attr('href').replace('https://apkcombo-com.translate.goog/', 'https://apkcombo.com/').replace('/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp', '');
        let author = $(b).find('.author').text();
        let imgSrc = $(b).find('img').attr('data-src');

        let descriptionSpans = $(b).find('.description span');
        let downloads = descriptionSpans.eq(0).text() || '';
        let rating = descriptionSpans.eq(1).text().replace(',', '.') || '';
        let size = descriptionSpans.eq(2).text() || '';

        ress.push({
            creator: 'Samu330 👑',
            note: "enhanced by Google",
            name: name,
            link: link,
            author: author,
            imgSrc: imgSrc,
            downloads: downloads,
            rating: rating,
            size: size
        });
    });

    return ress;
  },
  download: async function(url) {
    let res = (await fetch(url))
    res = (await res.text())
    let $ = cheerio.load(res)
    let img = $('div.app_header.mt-14 > div.avatar > img').attr('data-src')
    let developer = $('div.container > div > div.column.is-main > div.app_header.mt-14 > div.info > div.author > a').html()
    let appname = $('div.container > div > div.column.is-main > div.app_header.mt-14 > div.info > div.app_name > h1').text()
    let version = $('div.container > div > div.column.is-main > div.app_header.mt-14 > div.info > div.version').text()
    let downloadButton = $('div.container > div > div.column.is-main > div.download.is-desktop-only a.button.is-success');
    let fileSize = downloadButton.find('.fsize span').text();

    let link1 = 'https://apkcombo.com' + $('div.container > div > div.column.is-main > div.button-group.mt-14.mb-14.is-mobile-only > a').attr('href')

    res = (await fetch(link1))
    res = (await res.text())
    $ = cheerio.load(res)
    let link = $('#best-variant-tab > div:nth-child(1) > ul > li > ul > li > a').attr('href') + '&fp=945d4e52764ab9b1ce7a8fba0bb8d68d&ip=160.177.72.111'

    return {
        creator: 'Samu330 👑',
        img,
        developer,
        appname,
        version,
        fileSize,
        link
    }
  }
}

let aptoide = {
  search: async function(args) {
    let res = (await fetch(tools.api(5, '/apps/search', {
      query: args,
      limit: 1000
    })))

    let ress = {}
    res = (await res.json())
    ress = res.datalist.list.map(v => {
    return {
    creator: 'Samu330 👑',
    name: v.name || "🔴 sin datos",
    id: v.id || "🔴 sin datos",
    size: v.size || "🔴 sin datos",
    package: v.package || "🔴 sin datos",
    uname: v.uname || "🔴 sin datos",
    icon: v.icon || "🔴 sin datos",
    graphic: v.graphic || "🔴 sin datos",
    added: v.added || "🔴 sin datos",
    modified: v.modified || "🔴 sin datos",
    updated: v.updated || "🔴 sin datos",
    uptype: v.uptype || "🔴 sin datos",
    developer: {
      id: v.developer?.id || "🔴 sin datos",
      name: v.developer?.name || "🔴 sin datos"
    },
    store: {
      id: v.store?.id || "🔴 sin datos",
      name: v.store?.name || "🔴 sin datos",
      avatar: v.store?.avatar || "🔴 sin datos",
      appearance: {
        theme: v.store?.appearance?.theme || "🔴 sin datos",
        description: v.store?.appearance?.description || "🔴 sin datos"
      },
      stats: {
        apps: v.store?.stats?.apps || "🔴 sin datos",
        subscribers: v.store?.stats?.subscribers || "🔴 sin datos",
        downloads: v.store?.stats?.downloads || "🔴 sin datos"
      }
    },
    file: {
      vername: v.file?.vername || "🔴 sin datos",
      vercode: v.file?.vercode || "🔴 sin datos",
      md5sum: v.file?.md5sum || "🔴 sin datos",
      filesize: v.file?.filesize || "🔴 sin datos",
      path: v.file?.path || "🔴 sin datos",
      path_alt: v.file?.path_alt || "🔴 sin datos",
      tags: v.file?.tags || "🔴 sin datos",
      malware: {
        rank: v.file?.malware?.rank || "🔴 sin datos"
      }
    },
    stats: {
      downloads: v.stats?.downloads || "🔴 sin datos",
      pdownloads: v.stats?.pdownloads || "🔴 sin datos",
      rating: {
        avg: v.stats?.rating?.avg || "🔴 sin datos",
        total: v.stats?.rating?.total || "🔴 sin datos"
      },
      prating: {
        avg: v.stats?.prating?.avg || "🔴 sin datos",
        total: v.stats?.prating?.total || "🔴 sin datos"
      }
    },
    has_versions: v.has_versions ?? "🔴 sin datos",
    obb: v.obb || "🔴 sin datos",
    appcoins: {
      advertising: v.appcoins?.advertising ?? "🔴 sin datos",
      billing: v.appcoins?.billing ?? "🔴 sin datos",
      eskills: v.appcoins?.eskills ?? "🔴 sin datos"
    },
    urls: v.urls || "🔴 sin datos"
  }
    })
    return ress
  },
  download: async function(id) {
    let res = (await fetch(tools.api(5, '/apps/search', {
      query: id,
      limit: 1
    })))

    res = (await res.json())
    return {
      creator: 'Samu330 👑',
      img: res.datalist.list[0].icon,
      size: res.datalist.list[0].size,
      developer: res.datalist.list[0].store.name,
      appname: res.datalist.list[0].name,
      link: res.datalist.list[0].file.path
    }
  }
}

let apk_dl = {apkcombo,aptoide}
module.exports = apk_dl
