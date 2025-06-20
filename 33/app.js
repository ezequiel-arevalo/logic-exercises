const framesPerSecond = (minutes, fps) => {
  return minutes * 60 * fps;
}

console.log(framesPerSecond(1, 1)); // 60
// 1 minuto * 60 segundos * 1 FPS = 60

console.log(framesPerSecond(10, 1)); // 600
// 10 minutos * 60 segundos * 1 FPS = 600

console.log(framesPerSecond(10, 25)); // 15000
// 10 minutos * 60 segundos * 25 FPS = 15000