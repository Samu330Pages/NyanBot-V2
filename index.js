const { spawn } = require('child_process');
const path = require('path');

function start() {
   let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)];
   console.log([process.argv[0], ...args].join('\n'));
   let p = spawn(process.argv[0], args, {
      stdio: ['inherit', 'inherit', 'inherit', 'ipc']
   });

   p.on('message', data => {
      if (data == 'reset') {
         console.log('Restarting Bot...');
         p.kill();
         start();
         delete p;
      }
   });

   p.on('exit', (code, signal) => {
      if (signal) {
         console.error(`Process was killed with signal: ${signal}`);
      } else {
         console.error(`Exited with code: ${code}`);
         if (code === 1) {
            console.error('Error: Exited with code 1. Check for errors in your script.');
         }
         // Puedes agregar más condiciones aquí si necesitas manejar otros códigos de salida
         start(); // Reinicia el proceso
      }
   });

   // Captura la salida de errores
   p.stderr.on('data', (data) => {
      console.error(`Error output: ${data.toString()}`);
   });

   // Captura la salida estándar
   p.stdout.on('data', (data) => {
      console.log(`Output: ${data.toString()}`);
   });
}

start();
