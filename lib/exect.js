const util = require('util');

const syntax = require('syntax-error');

const { exec } = require('child_process');



exports.app = {

   async: async (m, {

      client,

      waFunc,

      voucher,

      users,

      chats,

      groups,

      groupMetadata,

      participants,

      env,

      isOwner,

      isPremium,

      emoji,

      core,

      mongo,

      isBlockList

   }) => {

      if (core && core.textAll !== undefined && core.textAll && core.textAll.length >= 1) {

        let command, text

        let x = core.textAll.trim().split`\n`,

          y = ''

        command = x[0].split` `[0]

        y += x[0].split` `.slice`1`.join` `, y += x.slice`1`.join`\n`

        text = y.trim()

        let input = core.textAll.slice(1).trim()

        if (command == '<') {

          if (!input) return

          let _syntax = ''

          let _return

          let _text = `(async () => { ${input} })()`

          try {

            _return = await eval(_text)

          } catch (e) {

            let err = await syntax(_text, 'Sistema De Ejecución')

            if (err) _syntax = err + '\n\n'

            _return = e

          } finally {

            reply(m.from, _syntax + util.format(_return), m)

          }

        } else if (command == '<=') {

          if (!text) return

          try {

            evL = await eval(`(async () => { return ${text} })()`)

            await client.reply(m.from, waFunc.jsonFormat(evL), m)

          } catch (e) {

            let err = await syntax(text)

            reply(m.from, typeof err != 'undefined' ? waFunc.texted('monospace', err) + '\n\n' : '' + waFunc.jsonFormat(e), m)

          }

        } else if (command == '=') {

          if (!text) return

          console.log('Exec : ' + text)

          exec(input, async (err, stdout) => {

            if (err) return client.reply(m.from, err.toString(), m)

            if (stdout) {

              await reply(m.from, stdout, m)

            }

          })

        }

      }

   },

   dev: true,

   cache: true,

   location: __filename

}
