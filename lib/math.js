let modes = {
    facil: [-10, 10, -10, 10, '*/+-', 20000, 40],
    medio: [-40, 40, -20, 20, '*/+-', 40000, 150],
    dificil: [-100, 100, -70, 70, '*/+-', 60000, 350],
    extremo: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
    imposible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
    dios: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
  } 
  
  let operators = {
    '+': '+',
    '-': '-',
    '*': '×',
    '/': '÷'
  }

  function randomInt(from, to) {
    if (from > to) [from, to] = [to, from]
    from = Math.floor(from)
    to = Math.floor(to)
    return Math.floor((to - from) * Math.random() + from)
  }
  
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
  }

  function genMath(mode) {
      return new Promise((resolve, reject) => {
        let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
        let a = randomInt(a1, a2)
        let b = randomInt(b1, b2)
        let op = pickRandom([...ops])
        let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
        if (op == '/') [a, result] = [result, a]
        mathUser = { 
            math: `${a} ${operators[op]} ${b}`,
            mode: mode,
            time: time,
            win: bonus,
            answer: result
         }
         resolve(mathUser)
      })
  }
  
module.exports = { modes, operators, randomInt, pickRandom, genMath }
