const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const cheerio = require('cheerio')
const tools = require('../lib/config.js')

let apkcombo = {
  search: async function(args) {
    let res = (await fetch(tools.Proxy(tools.api(1, '/search/' + encodeURIComponent(args.replace(' ', '-'))))))
    let ress = []
    res = (await res.text())
    let $ = cheerio.load(res)
    let link = []
    let name = []
    $('div.content-apps > a').each(function(a, b) {
      let nem = $(b).attr('title')
      name.push(nem)
      link.push($(b).attr('href').replace('https://apkcombo-com.translate.goog/', 'https://apkcombo.com/').replace('/?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp', ''))
    })
    for(var i=0;i<(name.length||link.length);i++){
      ress.push({res,creator: 'Samu330 👑',name:name[i],link:link[i]})
    }
    return ress
  },
  download: async function(url) {
    let res = (await fetch(url))
    res = (await res.text())
    let $ = cheerio.load(res)
    let img = $('div.app_header.mt-14 > div.avatar > img').attr('data-src')
    let developer = $('div.container > div > div.column.is-main > div.app_header.mt-14 > div.info > div.author > a').html()
    let appname = $('div.container > div > div.column.is-main > div.app_header.mt-14 > div.info > div.app_name > h1').text()
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
        res,
        creator: 'Samu330 👑',
        name: v.name,
        id: v.package
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
      developer: res.datalist.list[0].store.name,
      appname: res.datalist.list[0].name,
      link: res.datalist.list[0].file.path
    }
  }
}

let apk_dl = {apkcombo,aptoide}
module.exports = apk_dl
